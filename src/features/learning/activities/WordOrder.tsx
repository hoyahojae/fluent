import { useState } from 'react'
import type { Activity } from '@/data/types'
import { cn, checkAnswer } from '@/lib/utils'

interface Props {
  activity: Activity
  onSubmit: (isCorrect: boolean, userAnswer: string) => void
}

export function WordOrder({ activity, onSubmit }: Props) {
  const [selectedWords, setSelectedWords] = useState<string[]>([])
  const [availableWords, setAvailableWords] = useState<string[]>(activity.options ?? [])

  const handleSelectWord = (word: string, index: number) => {
    setSelectedWords([...selectedWords, word])
    const newAvailable = [...availableWords]
    newAvailable.splice(index, 1)
    setAvailableWords(newAvailable)
  }

  const handleRemoveWord = (index: number) => {
    const word = selectedWords[index]!
    const newSelected = [...selectedWords]
    newSelected.splice(index, 1)
    setSelectedWords(newSelected)
    setAvailableWords([...availableWords, word])
  }

  const handleSubmit = () => {
    if (selectedWords.length === 0) return
    const userAnswer = selectedWords.join(' ')
    const correct = checkAnswer(userAnswer, activity.answer)
    onSubmit(correct, userAnswer)
  }

  const handleReset = () => {
    setSelectedWords([])
    setAvailableWords(activity.options ?? [])
  }

  return (
    <div className="space-y-6">
      <div>
        <p className="text-xs text-fluent-teal-400 font-medium mb-2">어순 배열</p>
        <p className="text-lg font-semibold">{activity.question}</p>
        {activity.hint && (
          <p className="text-xs text-fluent-text-muted mt-1">{activity.hint}</p>
        )}
      </div>

      {/* 선택된 단어 영역 */}
      <div className="min-h-[60px] bg-fluent-navy-700/50 rounded-xl p-3 flex flex-wrap gap-2 items-start">
        {selectedWords.length === 0 ? (
          <p className="text-sm text-fluent-text-muted w-full text-center py-2">
            아래에서 단어를 선택하세요
          </p>
        ) : (
          selectedWords.map((word, i) => (
            <button
              key={`${word}-${i}`}
              onClick={() => handleRemoveWord(i)}
              className="bg-fluent-teal-400/20 text-fluent-teal-300 px-3 py-1.5 rounded-lg text-sm font-medium
                         active:scale-95 transition-transform animate-fade-in"
            >
              {word}
            </button>
          ))
        )}
      </div>

      {/* 선택 가능한 단어 */}
      <div className="flex flex-wrap gap-2 justify-center">
        {availableWords.map((word, i) => (
          <button
            key={`${word}-${i}`}
            onClick={() => handleSelectWord(word, i)}
            className={cn(
              'bg-fluent-navy-600 text-fluent-text-primary px-3 py-1.5 rounded-lg text-sm font-medium',
              'active:scale-95 transition-transform'
            )}
          >
            {word}
          </button>
        ))}
      </div>

      <div className="flex gap-3">
        <button onClick={handleReset} className="btn-secondary flex-1 text-sm">
          초기화
        </button>
        <button
          onClick={handleSubmit}
          disabled={selectedWords.length === 0}
          className="btn-primary flex-1 disabled:opacity-40"
        >
          확인
        </button>
      </div>
    </div>
  )
}
