import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Header } from '@/components/layout/Header'
import { useStore } from '@/stores/useStore'
import { levels } from '@/data/curriculum'

export default function Debug() {
  const navigate = useNavigate()
  const store = useStore()
  const [confirmReset, setConfirmReset] = useState(false)

  const handleResetAll = async () => {
    localStorage.removeItem('fluent-storage')
    // SW 캐시 정리 & 해제
    if ('serviceWorker' in navigator) {
      const regs = await navigator.serviceWorker.getRegistrations()
      await Promise.all(regs.map((r) => r.unregister()))
      const keys = await caches.keys()
      await Promise.all(keys.map((k) => caches.delete(k)))
    }
    window.location.href = '/'
  }

  const handleSetLevel = (level: number) => {
    store.updateSettings({ currentLevel: level })
  }

  const handleSkipOnboarding = () => {
    store.setOnboarded()
    store.updateSettings({ currentLevel: 3 })
    navigate('/')
  }

  const handleClearSessions = () => {
    // sessionLogs를 비우기 위해 직접 상태 조작
    useStore.setState({ sessionLogs: [], totalXp: 0, streak: 0, lastStudyDate: null })
  }

  const handleClearMastery = () => {
    useStore.setState({ mastery: {}, unitProgress: {} })
  }

  const handleClearBadges = () => {
    useStore.setState({ earnedBadges: {}, perfectSessions: 0 })
  }

  const handleResetToWelcome = () => {
    useStore.setState({ isOnboarded: false })
    navigate('/welcome')
  }

  const storageSize = new Blob([JSON.stringify(localStorage.getItem('fluent-storage') ?? '')]).size

  return (
    <div className="max-w-lg mx-auto pb-24 animate-fade-in">
      <Header title="🛠 디버그 모드" />

      <div className="px-4 mt-2 space-y-4">
        {/* 현재 상태 */}
        <div className="card">
          <h3 className="font-semibold text-sm mb-3 text-fluent-warning">현재 상태</h3>
          <div className="space-y-2 text-xs">
            <div className="flex justify-between">
              <span className="text-fluent-text-muted">온보딩 완료</span>
              <span>{store.isOnboarded ? '✅' : '❌'}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-fluent-text-muted">현재 레벨</span>
              <span>Lv.{store.settings.currentLevel}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-fluent-text-muted">총 XP</span>
              <span>{store.totalXp}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-fluent-text-muted">연속 학습</span>
              <span>{store.streak}일</span>
            </div>
            <div className="flex justify-between">
              <span className="text-fluent-text-muted">세션 수</span>
              <span>{store.sessionLogs.length}회</span>
            </div>
            <div className="flex justify-between">
              <span className="text-fluent-text-muted">마스터리 항목</span>
              <span>{Object.keys(store.mastery).length}개</span>
            </div>
            <div className="flex justify-between">
              <span className="text-fluent-text-muted">획득 배지</span>
              <span>{Object.keys(store.earnedBadges).length}개</span>
            </div>
            <div className="flex justify-between">
              <span className="text-fluent-text-muted">완료 유닛</span>
              <span>{Object.values(store.unitProgress).filter(s => s === 'completed').length}개</span>
            </div>
            <div className="flex justify-between">
              <span className="text-fluent-text-muted">저장소 크기</span>
              <span>{(storageSize / 1024).toFixed(1)} KB</span>
            </div>
          </div>
        </div>

        {/* 테마 설정 */}
        <div className="card">
          <h3 className="font-semibold text-sm mb-3">테마 설정</h3>
          <div className="grid grid-cols-3 gap-2">
            {(['auto', 'light', 'dark'] as const).map((mode) => (
              <button
                key={mode}
                onClick={() => store.updateSettings({ themeMode: mode })}
                className={`py-2.5 rounded-lg text-xs font-medium transition-colors ${
                  store.settings.themeMode === mode
                    ? 'bg-fluent-teal-400 text-white'
                    : 'bg-fluent-navy-700 text-fluent-text-secondary'
                }`}
              >
                {mode === 'auto' ? '🔄 자동' : mode === 'light' ? '☀️ 라이트' : '🌙 다크'}
              </button>
            ))}
          </div>
          <p className="text-[10px] text-fluent-text-muted mt-2">
            자동: 기기 설정에 따라 전환
          </p>
        </div>

        {/* 레벨 수동 설정 */}
        <div className="card">
          <h3 className="font-semibold text-sm mb-3">레벨 수동 설정</h3>
          <div className="grid grid-cols-5 gap-2">
            {levels.map((lv) => (
              <button
                key={lv.level}
                onClick={() => handleSetLevel(lv.level)}
                className={`py-2 rounded-lg text-xs font-medium transition-colors ${
                  store.settings.currentLevel === lv.level
                    ? 'bg-fluent-teal-400 text-white'
                    : 'bg-fluent-navy-700 text-fluent-text-secondary'
                }`}
              >
                Lv.{lv.level}
              </button>
            ))}
          </div>
        </div>

        {/* 빠른 동작 */}
        <div className="card">
          <h3 className="font-semibold text-sm mb-3">빠른 동작</h3>
          <div className="space-y-2">
            {!store.isOnboarded && (
              <button
                onClick={handleSkipOnboarding}
                className="w-full bg-fluent-teal-400/20 text-fluent-teal-300 py-2.5 rounded-xl text-sm font-medium"
              >
                온보딩+레벨테스트 건너뛰기 (Lv.3 시작)
              </button>
            )}
            <button
              onClick={handleResetToWelcome}
              className="w-full bg-fluent-navy-700 text-fluent-text-secondary py-2.5 rounded-xl text-sm font-medium"
            >
              웰컴 화면으로 돌아가기
            </button>
            <button
              onClick={() => navigate('/level-test?type=periodic')}
              className="w-full bg-fluent-navy-700 text-fluent-text-secondary py-2.5 rounded-xl text-sm font-medium"
            >
              레벨 테스트 다시 하기
            </button>
            <button
              onClick={() => navigate('/manage')}
              className="w-full bg-fluent-navy-700 text-fluent-text-secondary py-2.5 rounded-xl text-sm font-medium"
            >
              콘텐츠 관리 페이지
            </button>
            <button
              onClick={() => navigate('/manage?tab=leveltest')}
              className="w-full bg-fluent-navy-700 text-fluent-text-secondary py-2.5 rounded-xl text-sm font-medium"
            >
              레벨테스트 문제 관리
            </button>
          </div>
        </div>

        {/* 부분 초기화 */}
        <div className="card">
          <h3 className="font-semibold text-sm mb-3">부분 초기화</h3>
          <div className="space-y-2">
            <button
              onClick={handleClearSessions}
              className="w-full bg-fluent-warning/10 text-fluent-warning py-2.5 rounded-xl text-sm font-medium"
            >
              학습 기록만 초기화 (세션, XP, 스트릭)
            </button>
            <button
              onClick={handleClearMastery}
              className="w-full bg-fluent-warning/10 text-fluent-warning py-2.5 rounded-xl text-sm font-medium"
            >
              마스터리+유닛 진행도 초기화
            </button>
            <button
              onClick={handleClearBadges}
              className="w-full bg-fluent-warning/10 text-fluent-warning py-2.5 rounded-xl text-sm font-medium"
            >
              배지 초기화
            </button>
          </div>
        </div>

        {/* 전체 초기화 */}
        <div className="card border border-fluent-error/30">
          <h3 className="font-semibold text-sm mb-3 text-fluent-error">⚠️ 전체 초기화</h3>
          {!confirmReset ? (
            <button
              onClick={() => setConfirmReset(true)}
              className="w-full bg-fluent-error/20 text-fluent-error py-2.5 rounded-xl text-sm font-medium"
            >
              모든 데이터 삭제 + 처음부터 시작
            </button>
          ) : (
            <div className="space-y-2">
              <p className="text-xs text-fluent-error text-center">정말 모든 데이터를 삭제하시겠어요?</p>
              <div className="flex gap-2">
                <button
                  onClick={handleResetAll}
                  className="flex-1 bg-fluent-error text-white py-2.5 rounded-xl text-sm font-bold"
                >
                  삭제
                </button>
                <button
                  onClick={() => setConfirmReset(false)}
                  className="flex-1 bg-fluent-navy-700 text-fluent-text-secondary py-2.5 rounded-xl text-sm"
                >
                  취소
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
