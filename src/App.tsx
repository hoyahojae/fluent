import { Routes, Route, Navigate } from 'react-router-dom'
import { useStore } from '@/stores/useStore'
import { BottomNav } from '@/components/layout/BottomNav'
import Welcome from '@/pages/Welcome'
import LevelTest from '@/pages/LevelTest'
import Home from '@/pages/Home'
import Learn from '@/pages/Learn'
import Manage from '@/pages/Manage'
import Reports from '@/pages/Reports'
import Session from '@/pages/Session'

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const isOnboarded = useStore((s) => s.isOnboarded)
  if (!isOnboarded) return <Navigate to="/welcome" replace />
  return <>{children}</>
}

export default function App() {
  const isOnboarded = useStore((s) => s.isOnboarded)

  return (
    <div className="min-h-screen bg-fluent-bg-dark text-fluent-text-primary">
      <Routes>
        {/* 온보딩 플로우 */}
        <Route path="/welcome" element={
          isOnboarded ? <Navigate to="/" replace /> : <Welcome />
        } />
        <Route path="/level-test" element={
          isOnboarded ? <Navigate to="/" replace /> : <LevelTest />
        } />

        {/* 메인 앱 */}
        <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path="/learn" element={<ProtectedRoute><Learn /></ProtectedRoute>} />
        <Route path="/manage" element={<ProtectedRoute><Manage /></ProtectedRoute>} />
        <Route path="/reports" element={<ProtectedRoute><Reports /></ProtectedRoute>} />
        <Route path="/session" element={<ProtectedRoute><Session /></ProtectedRoute>} />

        {/* 기본 리다이렉트 */}
        <Route path="*" element={<Navigate to={isOnboarded ? '/' : '/welcome'} replace />} />
      </Routes>
      <BottomNav />
    </div>
  )
}
