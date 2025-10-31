import { useState } from 'react'
import Dashboard from './components/Dashboard'
import Auth from './components/Auth'
import Calculator from './components/Calculator'
import GraphDisplay from './components/GraphDisplay'
import CollaborationPanel from './components/CollaborationPanel'
import HistoryLog from './components/HistoryLog'
import SettingsPanel from './components/SettingsPanel'

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
          <p className="tagline">Your Smart Calculator</p>
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
          <li>Basic Calculations</li>
          <li>Graphing and Charting</li>
          <li>Real-Time Collaboration</li>
          <li>Historical Calculation Log</li>
          <li>Customizable User Interface</li>
          <li>Integration with Third-Party APIs</li>
          </ul>
        </div>
        <p>&copy; 2025 CalcPro. Built with React + TypeScript + Vite</p>
      </footer>
    </div>
  )
}

export default App