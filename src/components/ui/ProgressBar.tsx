import { cn } from '@/lib/utils'

interface ProgressBarProps {
  value: number // 0~100
  className?: string
  color?: 'teal' | 'xp' | 'success' | 'error'
  size?: 'sm' | 'md'
  showLabel?: boolean
}

export function ProgressBar({ value, className, color = 'teal', size = 'md', showLabel }: ProgressBarProps) {
  const clamped = Math.min(100, Math.max(0, value))

  const colorMap = {
    teal: 'bg-fluent-teal-400',
    xp: 'bg-fluent-xp',
    success: 'bg-fluent-success',
    error: 'bg-fluent-error',
  }

  const sizeMap = {
    sm: 'h-1.5',
    md: 'h-2.5',
  }

  return (
    <div className={cn('w-full', className)}>
      {showLabel && (
        <div className="flex justify-between mb-1">
          <span className="text-xs text-fluent-text-secondary">{Math.round(clamped)}%</span>
        </div>
      )}
      <div className={cn('w-full bg-fluent-navy-700 rounded-full overflow-hidden', sizeMap[size])}>
        <div
          className={cn('h-full rounded-full transition-all duration-500 ease-out', colorMap[color])}
          style={{ width: `${clamped}%` }}
        />
      </div>
    </div>
  )
}
