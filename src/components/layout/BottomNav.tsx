import { useLocation, useNavigate } from 'react-router-dom'
import { HomeIcon, BookIcon, ChartIcon } from '@/components/ui/Icons'
import { cn } from '@/lib/utils'
import { playSound } from '@/lib/sounds'

const tabs = [
  { path: '/', label: '홈', icon: HomeIcon },
  { path: '/learn', label: '학습', icon: BookIcon },
  { path: '/reports', label: '리포트', icon: ChartIcon },
]

export function BottomNav() {
  const location = useLocation()
  const navigate = useNavigate()

  // 특정 페이지에서는 네비게이션 숨김
  const hiddenPaths = ['/session', '/welcome', '/level-test', '/manage', '/debug']
  if (hiddenPaths.some(p => location.pathname.startsWith(p))) return null

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-fluent-bg-dark-card/95 backdrop-blur-lg border-t border-fluent-navy-700/50 z-50">
      <div className="max-w-lg mx-auto flex items-center justify-around h-16 pb-[env(safe-area-inset-bottom)]">
        {tabs.map((tab) => {
          const isActive = location.pathname === tab.path
          const Icon = tab.icon
          return (
            <button
              key={tab.path}
              onClick={() => { playSound('click'); navigate(tab.path) }}
              className={cn(
                'flex flex-col items-center justify-center gap-0.5 w-16 h-full transition-colors',
                isActive ? 'text-fluent-teal-400' : 'text-fluent-text-muted'
              )}
            >
              <Icon size={22} />
              <span className="text-[10px] font-medium">{tab.label}</span>
            </button>
          )
        })}
      </div>
    </nav>
  )
}
