import { useState } from 'react'

interface DashboardProps {}

const Dashboard = (props: DashboardProps) => {
  const [activeTab, setActiveTab] = useState('overview')

  return (
    <div className="dashboard">
      <nav className="dashboard-nav">
        <button 
          className={activeTab === 'overview' ? 'active' : ''}
          onClick={() => setActiveTab('overview')}
        >
          Overview
        </button>
        <button 
          className={activeTab === 'real_time_collaborative_calculations' ? 'active' : ''}
          onClick={() => setActiveTab('real_time_collaborative_calculations')}
        >
          Real Time Collaborative Calculations
        </button>
        <button 
          className={activeTab === 'advanced_graphing_and_visualization' ? 'active' : ''}
          onClick={() => setActiveTab('advanced_graphing_and_visualization')}
        >
          Advanced Graphing And Visualization
        </button>
        <button 
          className={activeTab === 'customizable_calculation_templates' ? 'active' : ''}
          onClick={() => setActiveTab('customizable_calculation_templates')}
        >
          Customizable Calculation Templates
        </button>
      </nav>

      <div className="dashboard-content">
        {activeTab === 'overview' && (
          <div className="tab-content">
            <h2>Dashboard Overview</h2>
            <div className="cards">
              <div className="card">
                <h3>Total Users</h3>
                <p className="stat">1,234</p>
              </div>
              <div className="card">
                <h3>Active Sessions</h3>
                <p className="stat">567</p>
              </div>
              <div className="card">
                <h3>Revenue</h3>
                <p className="stat">$12,345</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'real_time_collaborative_calculations' && (
          <div className="tab-content">
            <h2>Real-time Collaborative Calculations</h2>
            <p>Manage your real time collaborative calculations here.</p>
          </div>
        )}

        {activeTab === 'advanced_graphing_and_visualization' && (
          <div className="tab-content">
            <h2>Advanced Graphing and Visualization</h2>
            <p>Manage your advanced graphing and visualization here.</p>
          </div>
        )}

        {activeTab === 'customizable_calculation_templates' && (
          <div className="tab-content">
            <h2>Customizable Calculation Templates</h2>
            <p>Manage your customizable calculation templates here.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Dashboard