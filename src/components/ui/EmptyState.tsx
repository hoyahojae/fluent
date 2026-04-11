interface EmptyStateProps {
  icon: 'book' | 'chart' | 'trophy' | 'search'
  title: string
  description: string
  action?: {
    label: string
    onClick: () => void
  }
}

const illustrations: Record<EmptyStateProps['icon'], React.ReactNode> = {
  book: (
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" className="text-fluent-navy-600">
      <rect x="16" y="12" width="48" height="56" rx="4" stroke="currentColor" strokeWidth="2" />
      <path d="M28 28h24M28 36h18M28 44h20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
      <circle cx="40" cy="58" r="3" stroke="currentColor" strokeWidth="2" opacity="0.3" />
    </svg>
  ),
  chart: (
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" className="text-fluent-navy-600">
      <rect x="16" y="52" width="10" height="16" rx="2" stroke="currentColor" strokeWidth="2" opacity="0.4" />
      <rect x="30" y="40" width="10" height="28" rx="2" stroke="currentColor" strokeWidth="2" opacity="0.5" />
      <rect x="44" y="28" width="10" height="40" rx="2" stroke="currentColor" strokeWidth="2" opacity="0.6" />
      <rect x="58" y="16" width="10" height="52" rx="2" stroke="currentColor" strokeWidth="2" opacity="0.7" />
      <line x1="12" y1="68" x2="72" y2="68" stroke="currentColor" strokeWidth="2" opacity="0.3" />
    </svg>
  ),
  trophy: (
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" className="text-fluent-navy-600">
      <path d="M28 16h24v20a12 12 0 01-24 0V16z" stroke="currentColor" strokeWidth="2" />
      <path d="M28 22h-6a6 6 0 000 12h6M52 22h6a6 6 0 010 12h-6" stroke="currentColor" strokeWidth="2" opacity="0.5" />
      <line x1="40" y1="48" x2="40" y2="56" stroke="currentColor" strokeWidth="2" />
      <rect x="30" y="56" width="20" height="4" rx="2" stroke="currentColor" strokeWidth="2" opacity="0.5" />
      <path d="M36 24l4 4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.3" />
    </svg>
  ),
  search: (
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" className="text-fluent-navy-600">
      <circle cx="36" cy="36" r="16" stroke="currentColor" strokeWidth="2" />
      <line x1="48" y1="48" x2="62" y2="62" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M30 32a6 6 0 018.5-1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.3" />
    </svg>
  ),
}

export function EmptyState({ icon, title, description, action }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-6 text-center animate-fade-in">
      <div className="mb-4 opacity-60">
        {illustrations[icon]}
      </div>
      <h3 className="font-semibold text-fluent-text-secondary mb-1">{title}</h3>
      <p className="text-sm text-fluent-text-muted max-w-[240px]">{description}</p>
      {action && (
        <button
          onClick={action.onClick}
          className="mt-4 btn-primary text-sm py-2.5 px-5"
        >
          {action.label}
        </button>
      )}
    </div>
  )
}
