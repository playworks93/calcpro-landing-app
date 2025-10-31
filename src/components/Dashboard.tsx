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
          className={activeTab === 'basic_calculations' ? 'active' : ''}
          onClick={() => setActiveTab('basic_calculations')}
        >
          Basic Calculations
        </button>
        <button 
          className={activeTab === 'graphing_and_charting' ? 'active' : ''}
          onClick={() => setActiveTab('graphing_and_charting')}
        >
          Graphing And Charting
        </button>
        <button 
          className={activeTab === 'real_time_collaboration' ? 'active' : ''}
          onClick={() => setActiveTab('real_time_collaboration')}
        >
          Real Time Collaboration
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

        {activeTab === 'basic_calculations' && (
          <div className="tab-content">
            <h2>Basic Calculations</h2>
            <p>Manage your basic calculations here.</p>
          </div>
        )}

        {activeTab === 'graphing_and_charting' && (
          <div className="tab-content">
            <h2>Graphing and Charting</h2>
            <p>Manage your graphing and charting here.</p>
          </div>
        )}

        {activeTab === 'real_time_collaboration' && (
          <div className="tab-content">
            <h2>Real-Time Collaboration</h2>
            <p>Manage your real time collaboration here.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Dashboard