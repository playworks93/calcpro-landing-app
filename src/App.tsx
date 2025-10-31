import { useState } from 'react'
import Dashboard from './components/Dashboard'
import Auth from './components/Auth'
import CalculatorDisplay from './components/CalculatorDisplay'
import ButtonPad from './components/ButtonPad'
import HistoryPanel from './components/HistoryPanel'
import AnalyticsDashboard from './components/AnalyticsDashboard'
import CollaborationPanel from './components/CollaborationPanel'

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
          <p className="tagline">Your Advanced Calculation Companion</p>
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
          <li>Basic Arithmetic Operations</li>
          <li>Advanced Scientific Calculations</li>
          <li>Data Analytics Integration</li>
          <li>Real-time Collaboration with Multiple Users</li>
          <li>History Tracking and Reusable Expressions</li>
          <li>Customizable User Interface</li>
          </ul>
        </div>
        <p>&copy; 2025 CalcPro. Built with React + TypeScript + Vite</p>
      </footer>
    </div>
  )
}

export default App