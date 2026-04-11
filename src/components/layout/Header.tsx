import { cn } from '@/lib/utils'
import { ChevronLeftIcon } from '@/components/ui/Icons'
import { useNavigate } from 'react-router-dom'

interface HeaderProps {
  title: string
  showBack?: boolean
  onBack?: () => void
  right?: React.ReactNode
  className?: string
}

export function Header({ title, showBack, onBack, right, className }: HeaderProps) {
  const navigate = useNavigate()

  return (
    <header className={cn('sticky top-0 z-40 bg-fluent-bg-dark/95 backdrop-blur-lg', className)}>
      <div className="max-w-lg mx-auto flex items-center justify-between h-14 px-4">
        <div className="flex items-center gap-2 min-w-0">
          {showBack && (
            <button
              onClick={onBack ?? (() => navigate(-1))}
              className="text-fluent-text-secondary hover:text-fluent-text-primary -ml-2 p-2"
            >
              <ChevronLeftIcon size={22} />
            </button>
          )}
          <h1 className="text-lg font-semibold truncate">{title}</h1>
        </div>
        {right && <div className="flex-shrink-0">{right}</div>}
      </div>
    </header>
  )
}
