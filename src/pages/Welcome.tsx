import { useNavigate } from 'react-router-dom'

export default function Welcome() {
  const navigate = useNavigate()

  return (
    <div className="max-w-lg mx-auto min-h-screen flex flex-col items-center justify-center px-6 animate-fade-in">
      {/* 로고 */}
      <div className="mb-8">
        <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-fluent-teal-400 to-fluent-teal-600 flex items-center justify-center shadow-lg shadow-fluent-teal-400/20 mb-6 mx-auto">
          <svg width="48" height="48" viewBox="0 0 32 32" fill="none">
            <path d="M8 8h12a2 2 0 0 1 0 4H12v4h6a2 2 0 0 1 0 4h-6v4a2 2 0 0 1-4 0V8z" fill="white"/>
            <path d="M18 14c2 0 4 1.5 4 4s-2 4-4 4" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.6"/>
          </svg>
        </div>
        <h1 className="text-3xl font-bold text-center">Fluent</h1>
        <p className="text-fluent-text-secondary text-center mt-2">
          나만을 위한 영어 학습
        </p>
      </div>

      {/* 특징 소개 */}
      <div className="w-full space-y-4 mb-10">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-xl bg-fluent-teal-400/15 flex items-center justify-center flex-shrink-0 mt-0.5">
            <span className="text-lg">🎯</span>
          </div>
          <div>
            <p className="font-medium text-sm">레벨 맞춤 학습</p>
            <p className="text-xs text-fluent-text-secondary mt-0.5">레벨 테스트를 통해 나에게 딱 맞는 수준부터 시작</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-xl bg-fluent-teal-400/15 flex items-center justify-center flex-shrink-0 mt-0.5">
            <span className="text-lg">📝</span>
          </div>
          <div>
            <p className="font-medium text-sm">8가지 활동 유형</p>
            <p className="text-xs text-fluent-text-secondary mt-0.5">번역, 작문, 받아쓰기 등 다양한 방식으로 학습</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-xl bg-fluent-teal-400/15 flex items-center justify-center flex-shrink-0 mt-0.5">
            <span className="text-lg">📊</span>
          </div>
          <div>
            <p className="font-medium text-sm">약점 집중 강화</p>
            <p className="text-xs text-fluent-text-secondary mt-0.5">틀린 문제를 반복 학습하여 완벽하게 마스터</p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <button
        onClick={() => navigate('/level-test')}
        className="w-full btn-primary text-lg py-4 shadow-lg shadow-fluent-teal-400/20"
      >
        레벨 테스트 시작하기
      </button>

      <p className="text-[11px] text-fluent-text-muted mt-4 text-center">
        약 3~5분 소요 · 나에게 맞는 레벨을 찾아드려요
      </p>
    </div>
  )
}
