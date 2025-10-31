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
          className={activeTab === 'user_authentication_&_onboarding' ? 'active' : ''}
          onClick={() => setActiveTab('user_authentication_&_onboarding')}
        >
          User Authentication & Onboarding
        </button>
        <button 
          className={activeTab === 'basic_&_advanced_calculations' ? 'active' : ''}
          onClick={() => setActiveTab('basic_&_advanced_calculations')}
        >
          Basic & Advanced Calculations
        </button>
        <button 
          className={activeTab === 'real_time_graphing_&_analytics' ? 'active' : ''}
          onClick={() => setActiveTab('real_time_graphing_&_analytics')}
        >
          Real Time Graphing & Analytics
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

        {activeTab === 'user_authentication_&_onboarding' && (
          <div className="tab-content">
            <h2>User Authentication & Onboarding</h2>
            <p>Manage your user authentication & onboarding here.</p>
          </div>
        )}

        {activeTab === 'basic_&_advanced_calculations' && (
          <div className="tab-content">
            <h2>Basic & Advanced Calculations</h2>
            <p>Manage your basic & advanced calculations here.</p>
          </div>
        )}

        {activeTab === 'real_time_graphing_&_analytics' && (
          <div className="tab-content">
            <h2>Real-time Graphing & Analytics</h2>
            <p>Manage your real time graphing & analytics here.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Dashboard