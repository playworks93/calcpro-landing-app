import { useState } from 'react'
import Dashboard from './components/Dashboard'
import Auth from './components/Auth'
import AuthComponent from './components/AuthComponent'
import CalculatorComponent from './components/CalculatorComponent'
import AnalyticsDashboard from './components/AnalyticsDashboard'
import CollaborationPanel from './components/CollaborationPanel'
import HistoryLog from './components/HistoryLog'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const handleLogin = () => {
    setIsAuthenticated(true)
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
  }

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-content">
          <h1>CalcPro</h1>
          <p className="tagline">Advanced Calculations Made Easy</p>
        </div>
        {isAuthenticated && (
          <button onClick={handleLogout} className="btn-logout">
            Logout
          </button>
        )}
      </header>

      <main className="app-main">
        {isAuthenticated ? (
          <Dashboard />
        ) : (
          <Auth onLogin={handleLogin} />
        )}
      </main>

      <footer className="app-footer">
        <div className="features">
          <h3>Key Features:</h3>
          <ul>
          <li>User Authentication</li>
          <li>Advanced Mathematical Operations</li>
          <li>Data Analytics Dashboard</li>
          <li>Collaboration Tools (Real-time sharing)</li>
          <li>History Log of Calculations</li>
          <li>Customizable Shortcuts</li>
          </ul>
        </div>
        <p>&copy; 2025 CalcPro. Built with React + TypeScript + Vite</p>
      </footer>
    </div>
  )
}

export default App