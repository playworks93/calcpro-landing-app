import { useState } from 'react'
import Dashboard from './components/Dashboard'
import Auth from './components/Auth'
import AuthComponent from './components/AuthComponent'
import CalculatorInterface from './components/CalculatorInterface'
import HistoryPanel from './components/HistoryPanel'
import DataVisualization from './components/DataVisualization'
import CollaborativeSession from './components/CollaborativeSession'

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
          <p className="tagline">Empower Your Calculations</p>
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
          <li>User Authentication & Onboarding</li>
          <li>Advanced Calculation Functionality</li>
          <li>Data Visualization & Analytics</li>
          <li>Collaborative Calculation Sessions</li>
          <li>History & Favorites Management</li>
          <li>Customizable Calculator Interface</li>
          </ul>
        </div>
        <p>&copy; 2025 CalcPro. Built with React + TypeScript + Vite</p>
      </footer>
    </div>
  )
}

export default App