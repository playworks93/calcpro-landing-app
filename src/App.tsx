import { useState } from 'react'
import Dashboard from './components/Dashboard'
import Auth from './components/Auth'
import CalculatorDisplay from './components/CalculatorDisplay'
import CalculatorButtons from './components/CalculatorButtons'
import HistoryLog from './components/HistoryLog'
import GraphingTool from './components/GraphingTool'
import UserSettings from './components/UserSettings'

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
          <li>Basic Arithmetic Operations</li>
          <li>Graphing and Visualization Tools</li>
          <li>History Log of Calculations</li>
          <li>Collaboration Features (Share & Comment)</li>
          <li>Customizable User Interface</li>
          <li>Multi-Device Sync</li>
          </ul>
        </div>
        <p>&copy; 2025 CalcPro. Built with React + TypeScript + Vite</p>
      </footer>
    </div>
  )
}

export default App