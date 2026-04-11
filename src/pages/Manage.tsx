import { useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { Header } from '@/components/layout/Header'
import { levels, getThemesForLevel, getUnitsForTheme, getExpressionsForUnit, getVocabularyForUnit } from '@/data/curriculum'
import { ChevronRightIcon, SparklesIcon, VolumeIcon, PlusIcon, PencilIcon, TrashIcon, SearchIcon, XIcon } from '@/components/ui/Icons'
import { speak } from '@/lib/utils'
import { playSound } from '@/lib/sounds'
import { useStore } from '@/stores/useStore'
import type { Expression, Vocabulary } from '@/data/types'
import { generateContent } from '@/features/ai/aiContentGenerator'

type View = 'levels' | 'themes' | 'units' | 'detail'

export default function Manage() {
  const navigate = useNavigate()
  const [view, setView] = useState<View>('levels')
  const [selectedLevel, setSelectedLevel] = useState<number | null>(null)
  const [selectedTheme, setSelectedTheme] = useState<string | null>(null)
  const [selectedUnit, setSelectedUnit] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [showSearch, setShowSearch] = useState(false)

  const goBack = () => {
    if (view === 'detail') setView('units')
    else if (view === 'units') setView('themes')
    else if (view === 'themes') setView('levels')
    else navigate('/')
  }

  const title =
    view === 'levels' ? '콘텐츠 관리' :
    view === 'themes' ? levels.find(l => l.level === selectedLevel)?.name ?? '' :
    view === 'units' ? '유닛 목록' :
    '학습 내용'

  return (
    <div className="max-w-lg mx-auto pb-24 animate-fade-in">
      <Header
        title={title}
        showBack
        onBack={goBack}
        right={
          view === 'levels' ? (
            <button
              onClick={() => { setShowSearch(!showSearch); setSearchQuery('') }}
              className="p-2 -mr-2 text-fluent-text-secondary"
            >
              {showSearch ? <XIcon size={20} /> : <SearchIcon size={20} />}
            </button>
          ) : undefined
        }
      />

      <div className="px-4 mt-2">
        {/* 검색바 */}
        {showSearch && view === 'levels' && (
          <div className="mb-4 animate-slide-up">
            <input
              type="text"
              placeholder="표현 또는 어휘 검색..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-fluent-navy-700 rounded-xl px-4 py-3 text-sm text-fluent-text-primary placeholder:text-fluent-text-muted focus:outline-none focus:ring-2 focus:ring-fluent-teal-400"
              autoFocus
            />
          </div>
        )}

        {/* 검색 결과 */}
        {showSearch && searchQuery.length >= 2 && (
          <SearchResults query={searchQuery} />
        )}

        {/* 레벨 목록 */}
        {(!showSearch || searchQuery.length < 2) && view === 'levels' && (
          <div className="space-y-2">
            {levels.map((level) => {
              const themeCount = getThemesForLevel(level.level).length
              return (
                <button
                  key={level.id}
                  onClick={() => { setSelectedLevel(level.level); setView('themes') }}
                  className="card w-full text-left flex items-center justify-between active:scale-[0.98] transition-transform"
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-medium px-2 py-0.5 rounded bg-fluent-teal-400/20 text-fluent-teal-300">
                        {level.cefr}
                      </span>
                      <span className="font-medium text-sm">{level.name}</span>
                    </div>
                    <p className="text-xs text-fluent-text-muted mt-1">{level.description}</p>
                    <p className="text-[10px] text-fluent-text-muted mt-1">테마 {themeCount}개</p>
                  </div>
                  <ChevronRightIcon size={18} className="text-fluent-text-muted" />
                </button>
              )
            })}
          </div>
        )}

        {/* 테마 목록 */}
        {view === 'themes' && selectedLevel !== null && (
          <div className="space-y-2">
            {getThemesForLevel(selectedLevel).map((theme) => {
              const unitCount = getUnitsForTheme(theme.id).length
              return (
                <button
                  key={theme.id}
                  onClick={() => { setSelectedTheme(theme.id); setView('units') }}
                  className="card w-full text-left flex items-center justify-between active:scale-[0.98] transition-transform"
                >
                  <div>
                    <p className="font-medium text-sm">{theme.name}</p>
                    <p className="text-xs text-fluent-text-muted mt-1">{theme.description}</p>
                    <p className="text-[10px] text-fluent-text-muted mt-1">유닛 {unitCount}개</p>
                  </div>
                  <ChevronRightIcon size={18} className="text-fluent-text-muted" />
                </button>
              )
            })}
          </div>
        )}

        {/* 유닛 목록 */}
        {view === 'units' && selectedTheme && (
          <div className="space-y-2">
            {getUnitsForTheme(selectedTheme).map((unit) => {
              const exprCount = getExpressionsForUnit(unit.id).length
              const vocabCount = getVocabularyForUnit(unit.id).length
              return (
                <button
                  key={unit.id}
                  onClick={() => { setSelectedUnit(unit.id); setView('detail') }}
                  className="card w-full text-left flex items-center justify-between active:scale-[0.98] transition-transform"
                >
                  <div>
                    <p className="font-medium text-sm">{unit.name}</p>
                    <p className="text-xs text-fluent-text-muted mt-1">{unit.description}</p>
                    <div className="flex gap-2 mt-1.5">
                      <span className="text-[10px] text-fluent-text-muted">표현 {exprCount}</span>
                      <span className="text-[10px] text-fluent-text-muted">어휘 {vocabCount}</span>
                    </div>
                  </div>
                  <ChevronRightIcon size={18} className="text-fluent-text-muted" />
                </button>
              )
            })}
          </div>
        )}

        {/* 상세 내용 */}
        {view === 'detail' && selectedUnit && (
          <UnitDetail unitId={selectedUnit} />
        )}
      </div>
    </div>
  )
}

// ===== 검색 결과 컴포넌트 =====
function SearchResults({ query }: { query: string }) {
  const customExpressions = useStore((s) => s.customExpressions)
  const customVocabulary = useStore((s) => s.customVocabulary)
  const q = query.toLowerCase()

  const results = useMemo(() => {
    const matchedExprs: Expression[] = []
    const matchedVocab: Vocabulary[] = []

    levels.forEach((level) => {
      getThemesForLevel(level.level).forEach((theme) => {
        getUnitsForTheme(theme.id).forEach((unit) => {
          getExpressionsForUnit(unit.id).forEach((expr) => {
            if (expr.english.toLowerCase().includes(q) || expr.korean.includes(q)) {
              matchedExprs.push(expr)
            }
          })
          getVocabularyForUnit(unit.id).forEach((v) => {
            if (v.word.toLowerCase().includes(q) || v.meaning.includes(q)) {
              matchedVocab.push(v)
            }
          })
        })
      })
    })

    // Also search custom content
    customExpressions.forEach((expr) => {
      if (expr.english.toLowerCase().includes(q) || expr.korean.includes(q)) {
        if (!matchedExprs.find((e) => e.id === expr.id)) matchedExprs.push(expr)
      }
    })
    customVocabulary.forEach((v) => {
      if (v.word.toLowerCase().includes(q) || v.meaning.includes(q)) {
        if (!matchedVocab.find((mv) => mv.id === v.id)) matchedVocab.push(v)
      }
    })

    return { expressions: matchedExprs.slice(0, 20), vocabulary: matchedVocab.slice(0, 20) }
  }, [q, customExpressions, customVocabulary])

  const total = results.expressions.length + results.vocabulary.length

  if (total === 0) {
    return (
      <div className="text-center py-12 text-fluent-text-muted text-sm">
        검색 결과가 없습니다
      </div>
    )
  }

  return (
    <div className="space-y-3">
      <p className="text-xs text-fluent-text-muted">{total}개 결과</p>
      {results.expressions.length > 0 && (
        <>
          <p className="text-xs font-medium text-fluent-teal-300">표현</p>
          {results.expressions.map((expr) => (
            <div key={expr.id} className="card">
              <div className="flex items-start justify-between gap-2">
                <div className="min-w-0 flex-1">
                  <p className="font-medium text-sm">{expr.english}</p>
                  <p className="text-xs text-fluent-text-secondary mt-1">{expr.korean}</p>
                </div>
                <button onClick={() => speak(expr.english)} className="text-fluent-teal-400 p-1.5 -mr-1">
                  <VolumeIcon size={18} />
                </button>
              </div>
            </div>
          ))}
        </>
      )}
      {results.vocabulary.length > 0 && (
        <>
          <p className="text-xs font-medium text-fluent-teal-300 mt-4">어휘</p>
          {results.vocabulary.map((v) => (
            <div key={v.id} className="card">
              <div className="flex items-center gap-2">
                <p className="font-medium text-sm">{v.word}</p>
                <span className="text-[10px] text-fluent-text-muted bg-fluent-navy-700 px-1.5 py-0.5 rounded">{v.partOfSpeech}</span>
              </div>
              <p className="text-xs text-fluent-text-secondary mt-1">{v.meaning}</p>
            </div>
          ))}
        </>
      )}
    </div>
  )
}

// ===== 유닛 상세 + CRUD =====
function UnitDetail({ unitId }: { unitId: string }) {
  const builtInExpressions = getExpressionsForUnit(unitId)
  const builtInVocab = getVocabularyForUnit(unitId)
  const customExpressions = useStore((s) => s.customExpressions.filter((e) => e.unitId === unitId))
  const customVocabulary = useStore((s) => s.customVocabulary.filter((v) => v.unitId === unitId))
  const { addExpression, updateExpression, deleteExpression, addVocabulary, updateVocabulary, deleteVocabulary } = useStore()

  const allExpressions = [...builtInExpressions, ...customExpressions]
  const allVocab = [...builtInVocab, ...customVocabulary]

  const [tab, setTab] = useState<'expressions' | 'vocabulary'>('expressions')
  const [showAddExpr, setShowAddExpr] = useState(false)
  const [showAddVocab, setShowAddVocab] = useState(false)
  const [editingExpr, setEditingExpr] = useState<string | null>(null)
  const [editingVocab, setEditingVocab] = useState<string | null>(null)
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null)
  const [isGenerating, setIsGenerating] = useState(false)

  const isCustom = (id: string) => id.startsWith('custom-')

  const handleAiGenerate = async () => {
    setIsGenerating(true)
    try {
      // unitId에서 레벨 추정 (unit ID 형식: lv1-greetings-u1)
      const lvMatch = unitId.match(/lv(\d+)/)
      const level = lvMatch ? parseInt(lvMatch[1]!, 10) : 3
      const result = await generateContent(level, undefined, 2, 3)

      for (const expr of result.expressions) {
        addExpression({
          id: `custom-expr-${Date.now()}-${Math.random().toString(36).slice(2, 5)}`,
          unitId,
          ...expr,
          isAiGenerated: true,
        })
      }
      for (const vocab of result.vocabulary) {
        addVocabulary({
          id: `custom-vocab-${Date.now()}-${Math.random().toString(36).slice(2, 5)}`,
          unitId,
          ...vocab,
          partOfSpeech: '명사',
          exampleTranslation: '',
          isAiGenerated: true,
        })
      }
      playSound('levelup')
    } catch {
      playSound('incorrect')
    } finally {
      setIsGenerating(false)
    }
  }

  return (
    <div>
      {/* 탭 */}
      <div className="flex gap-2 mb-4">
        <button
          onClick={() => setTab('expressions')}
          className={`flex-1 py-2 rounded-xl text-sm font-medium transition-colors ${
            tab === 'expressions'
              ? 'bg-fluent-teal-400 text-white'
              : 'bg-fluent-navy-700 text-fluent-text-secondary'
          }`}
        >
          표현 ({allExpressions.length})
        </button>
        <button
          onClick={() => setTab('vocabulary')}
          className={`flex-1 py-2 rounded-xl text-sm font-medium transition-colors ${
            tab === 'vocabulary'
              ? 'bg-fluent-teal-400 text-white'
              : 'bg-fluent-navy-700 text-fluent-text-secondary'
          }`}
        >
          어휘 ({allVocab.length})
        </button>
      </div>

      {/* 추가 + AI 생성 버튼 */}
      <div className="flex gap-2 mb-4">
        <button
          onClick={() => {
            playSound('click')
            tab === 'expressions' ? setShowAddExpr(true) : setShowAddVocab(true)
          }}
          className="flex-1 btn-secondary flex items-center justify-center gap-2 text-sm"
        >
          <PlusIcon size={16} />
          직접 추가
        </button>
        <button
          onClick={handleAiGenerate}
          disabled={isGenerating}
          className="flex-1 btn-secondary flex items-center justify-center gap-2 text-sm disabled:opacity-50"
        >
          {isGenerating ? (
            <>
              <span className="w-4 h-4 border-2 border-fluent-text-muted/30 border-t-fluent-text-secondary rounded-full animate-spin" />
              생성 중...
            </>
          ) : (
            <>
              <SparklesIcon size={16} />
              AI 생성
            </>
          )}
        </button>
      </div>

      {/* 표현 추가 폼 */}
      {showAddExpr && (
        <ExpressionForm
          unitId={unitId}
          onSave={(expr) => { addExpression(expr); setShowAddExpr(false); playSound('correct') }}
          onCancel={() => setShowAddExpr(false)}
        />
      )}

      {/* 어휘 추가 폼 */}
      {showAddVocab && (
        <VocabularyForm
          unitId={unitId}
          onSave={(vocab) => { addVocabulary(vocab); setShowAddVocab(false); playSound('correct') }}
          onCancel={() => setShowAddVocab(false)}
        />
      )}

      {/* 표현 목록 */}
      {tab === 'expressions' && (
        <div className="space-y-2">
          {allExpressions.map((expr) => (
            <div key={expr.id}>
              {editingExpr === expr.id ? (
                <ExpressionForm
                  unitId={unitId}
                  initial={expr}
                  onSave={(updated) => { updateExpression(expr.id, updated); setEditingExpr(null); playSound('correct') }}
                  onCancel={() => setEditingExpr(null)}
                />
              ) : (
                <div className="card group">
                  <div className="flex items-start justify-between gap-2">
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-1.5">
                        <p className="font-medium text-sm">{expr.english}</p>
                        {expr.isAiGenerated && (
                          <SparklesIcon size={12} className="text-fluent-warning shrink-0" />
                        )}
                        {isCustom(expr.id) && (
                          <span className="text-[9px] bg-fluent-teal-400/20 text-fluent-teal-300 px-1 py-0.5 rounded shrink-0">직접</span>
                        )}
                      </div>
                      <p className="text-xs text-fluent-text-secondary mt-1">{expr.korean}</p>
                    </div>
                    <div className="flex items-center gap-0.5">
                      <button onClick={() => speak(expr.english)} className="text-fluent-teal-400 p-1.5">
                        <VolumeIcon size={18} />
                      </button>
                      {isCustom(expr.id) && (
                        <>
                          <button onClick={() => setEditingExpr(expr.id)} className="text-fluent-text-muted p-1.5">
                            <PencilIcon size={14} />
                          </button>
                          {deleteConfirm === expr.id ? (
                            <div className="flex items-center gap-1">
                              <button
                                onClick={() => { deleteExpression(expr.id); setDeleteConfirm(null); playSound('click') }}
                                className="text-[10px] bg-fluent-error px-2 py-1 rounded text-white"
                              >
                                삭제
                              </button>
                              <button
                                onClick={() => setDeleteConfirm(null)}
                                className="text-[10px] bg-fluent-navy-600 px-2 py-1 rounded text-fluent-text-secondary"
                              >
                                취소
                              </button>
                            </div>
                          ) : (
                            <button onClick={() => setDeleteConfirm(expr.id)} className="text-fluent-error/60 p-1.5">
                              <TrashIcon size={14} />
                            </button>
                          )}
                        </>
                      )}
                    </div>
                  </div>
                  {expr.notes && (
                    <p className="text-[10px] text-fluent-text-muted mt-2 border-t border-fluent-navy-700 pt-2">
                      {expr.notes}
                    </p>
                  )}
                </div>
              )}
            </div>
          ))}
          {allExpressions.length === 0 && (
            <p className="text-center text-sm text-fluent-text-muted py-8">아직 표현이 없습니다</p>
          )}
        </div>
      )}

      {/* 어휘 목록 */}
      {tab === 'vocabulary' && (
        <div className="space-y-2">
          {allVocab.map((v) => (
            <div key={v.id}>
              {editingVocab === v.id ? (
                <VocabularyForm
                  unitId={unitId}
                  initial={v}
                  onSave={(updated) => { updateVocabulary(v.id, updated); setEditingVocab(null); playSound('correct') }}
                  onCancel={() => setEditingVocab(null)}
                />
              ) : (
                <div className="card">
                  <div className="flex items-start justify-between gap-2">
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <p className="font-medium text-sm">{v.word}</p>
                        <span className="text-[10px] text-fluent-text-muted bg-fluent-navy-700 px-1.5 py-0.5 rounded">
                          {v.partOfSpeech}
                        </span>
                        {v.isAiGenerated && (
                          <SparklesIcon size={12} className="text-fluent-warning" />
                        )}
                        {isCustom(v.id) && (
                          <span className="text-[9px] bg-fluent-teal-400/20 text-fluent-teal-300 px-1 py-0.5 rounded">직접</span>
                        )}
                      </div>
                      <p className="text-xs text-fluent-text-secondary mt-1">{v.meaning}</p>
                      <p className="text-xs text-fluent-text-muted mt-2 italic">"{v.exampleSentence}"</p>
                      <p className="text-[10px] text-fluent-text-muted mt-0.5">{v.exampleTranslation}</p>
                    </div>
                    <div className="flex items-center gap-0.5">
                      <button onClick={() => speak(v.word)} className="text-fluent-teal-400 p-1.5">
                        <VolumeIcon size={18} />
                      </button>
                      {isCustom(v.id) && (
                        <>
                          <button onClick={() => setEditingVocab(v.id)} className="text-fluent-text-muted p-1.5">
                            <PencilIcon size={14} />
                          </button>
                          {deleteConfirm === v.id ? (
                            <div className="flex items-center gap-1">
                              <button
                                onClick={() => { deleteVocabulary(v.id); setDeleteConfirm(null); playSound('click') }}
                                className="text-[10px] bg-fluent-error px-2 py-1 rounded text-white"
                              >
                                삭제
                              </button>
                              <button
                                onClick={() => setDeleteConfirm(null)}
                                className="text-[10px] bg-fluent-navy-600 px-2 py-1 rounded text-fluent-text-secondary"
                              >
                                취소
                              </button>
                            </div>
                          ) : (
                            <button onClick={() => setDeleteConfirm(v.id)} className="text-fluent-error/60 p-1.5">
                              <TrashIcon size={14} />
                            </button>
                          )}
                        </>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
          {allVocab.length === 0 && (
            <p className="text-center text-sm text-fluent-text-muted py-8">아직 어휘가 없습니다</p>
          )}
        </div>
      )}
    </div>
  )
}

// ===== 표현 추가/수정 폼 =====
function ExpressionForm({
  unitId,
  initial,
  onSave,
  onCancel,
}: {
  unitId: string
  initial?: Expression
  onSave: (expr: Expression) => void
  onCancel: () => void
}) {
  const [english, setEnglish] = useState(initial?.english ?? '')
  const [korean, setKorean] = useState(initial?.korean ?? '')
  const [notes, setNotes] = useState(initial?.notes ?? '')

  const handleSubmit = () => {
    if (!english.trim() || !korean.trim()) return
    onSave({
      id: initial?.id ?? `custom-expr-${Date.now()}`,
      unitId,
      english: english.trim(),
      korean: korean.trim(),
      difficulty: 3,
      notes: notes.trim() || undefined,
      isAiGenerated: false,
    })
  }

  return (
    <div className="card mb-3 border border-fluent-teal-400/30 animate-slide-up">
      <p className="text-xs font-medium text-fluent-teal-300 mb-3">{initial ? '표현 수정' : '새 표현 추가'}</p>
      <div className="space-y-2">
        <input
          type="text"
          placeholder="영어 표현"
          value={english}
          onChange={(e) => setEnglish(e.target.value)}
          className="w-full bg-fluent-navy-700 rounded-lg px-3 py-2 text-sm text-fluent-text-primary placeholder:text-fluent-text-muted focus:outline-none focus:ring-1 focus:ring-fluent-teal-400"
          autoFocus
        />
        <input
          type="text"
          placeholder="한국어 뜻"
          value={korean}
          onChange={(e) => setKorean(e.target.value)}
          className="w-full bg-fluent-navy-700 rounded-lg px-3 py-2 text-sm text-fluent-text-primary placeholder:text-fluent-text-muted focus:outline-none focus:ring-1 focus:ring-fluent-teal-400"
        />
        <input
          type="text"
          placeholder="메모 (선택)"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          className="w-full bg-fluent-navy-700 rounded-lg px-3 py-2 text-sm text-fluent-text-primary placeholder:text-fluent-text-muted focus:outline-none focus:ring-1 focus:ring-fluent-teal-400"
        />
      </div>
      <div className="flex gap-2 mt-3">
        <button
          onClick={handleSubmit}
          disabled={!english.trim() || !korean.trim()}
          className="flex-1 bg-fluent-teal-400 text-white py-2 rounded-lg text-sm font-medium disabled:opacity-40"
        >
          {initial ? '수정' : '추가'}
        </button>
        <button
          onClick={onCancel}
          className="flex-1 bg-fluent-navy-700 text-fluent-text-secondary py-2 rounded-lg text-sm"
        >
          취소
        </button>
      </div>
    </div>
  )
}

// ===== 어휘 추가/수정 폼 =====
function VocabularyForm({
  unitId,
  initial,
  onSave,
  onCancel,
}: {
  unitId: string
  initial?: Vocabulary
  onSave: (vocab: Vocabulary) => void
  onCancel: () => void
}) {
  const [word, setWord] = useState(initial?.word ?? '')
  const [meaning, setMeaning] = useState(initial?.meaning ?? '')
  const [partOfSpeech, setPartOfSpeech] = useState(initial?.partOfSpeech ?? '명사')
  const [exampleSentence, setExampleSentence] = useState(initial?.exampleSentence ?? '')
  const [exampleTranslation, setExampleTranslation] = useState(initial?.exampleTranslation ?? '')

  const handleSubmit = () => {
    if (!word.trim() || !meaning.trim()) return
    onSave({
      id: initial?.id ?? `custom-vocab-${Date.now()}`,
      unitId,
      word: word.trim(),
      meaning: meaning.trim(),
      partOfSpeech,
      exampleSentence: exampleSentence.trim(),
      exampleTranslation: exampleTranslation.trim(),
      isAiGenerated: false,
    })
  }

  return (
    <div className="card mb-3 border border-fluent-teal-400/30 animate-slide-up">
      <p className="text-xs font-medium text-fluent-teal-300 mb-3">{initial ? '어휘 수정' : '새 어휘 추가'}</p>
      <div className="space-y-2">
        <input
          type="text"
          placeholder="영단어"
          value={word}
          onChange={(e) => setWord(e.target.value)}
          className="w-full bg-fluent-navy-700 rounded-lg px-3 py-2 text-sm text-fluent-text-primary placeholder:text-fluent-text-muted focus:outline-none focus:ring-1 focus:ring-fluent-teal-400"
          autoFocus
        />
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="한국어 뜻"
            value={meaning}
            onChange={(e) => setMeaning(e.target.value)}
            className="flex-1 bg-fluent-navy-700 rounded-lg px-3 py-2 text-sm text-fluent-text-primary placeholder:text-fluent-text-muted focus:outline-none focus:ring-1 focus:ring-fluent-teal-400"
          />
          <select
            value={partOfSpeech}
            onChange={(e) => setPartOfSpeech(e.target.value)}
            className="bg-fluent-navy-700 rounded-lg px-2 py-2 text-sm text-fluent-text-primary focus:outline-none focus:ring-1 focus:ring-fluent-teal-400"
          >
            <option value="명사">명사</option>
            <option value="동사">동사</option>
            <option value="형용사">형용사</option>
            <option value="부사">부사</option>
            <option value="전치사">전치사</option>
            <option value="접속사">접속사</option>
          </select>
        </div>
        <input
          type="text"
          placeholder="예문 (선택)"
          value={exampleSentence}
          onChange={(e) => setExampleSentence(e.target.value)}
          className="w-full bg-fluent-navy-700 rounded-lg px-3 py-2 text-sm text-fluent-text-primary placeholder:text-fluent-text-muted focus:outline-none focus:ring-1 focus:ring-fluent-teal-400"
        />
        <input
          type="text"
          placeholder="예문 번역 (선택)"
          value={exampleTranslation}
          onChange={(e) => setExampleTranslation(e.target.value)}
          className="w-full bg-fluent-navy-700 rounded-lg px-3 py-2 text-sm text-fluent-text-primary placeholder:text-fluent-text-muted focus:outline-none focus:ring-1 focus:ring-fluent-teal-400"
        />
      </div>
      <div className="flex gap-2 mt-3">
        <button
          onClick={handleSubmit}
          disabled={!word.trim() || !meaning.trim()}
          className="flex-1 bg-fluent-teal-400 text-white py-2 rounded-lg text-sm font-medium disabled:opacity-40"
        >
          {initial ? '수정' : '추가'}
        </button>
        <button
          onClick={onCancel}
          className="flex-1 bg-fluent-navy-700 text-fluent-text-secondary py-2 rounded-lg text-sm"
        >
          취소
        </button>
      </div>
    </div>
  )
}
