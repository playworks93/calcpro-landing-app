import { useState } from 'react'
import Dashboard from './components/Dashboard'
import Auth from './components/Auth'
import Calculator from './components/Calculator'
import GraphingTool from './components/GraphingTool'
import UserDashboard from './components/UserDashboard'
import AuthenticationModal from './components/AuthenticationModal'
import TemplateManager from './components/TemplateManager'

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
          <p className="tagline">Advanced Calculations, Simplified</p>
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
          <li>Real-time Collaborative Calculations</li>
          <li>Advanced Graphing and Visualization</li>
          <li>Customizable Calculation Templates</li>
          <li>Multi-Language Support</li>
          <li>History and Analytics Dashboard</li>
          <li>User Authentication and Management</li>
          </ul>
        </div>
        <p>&copy; 2025 CalcPro. Built with React + TypeScript + Vite</p>
      </footer>
    </div>
  )
}

export default App