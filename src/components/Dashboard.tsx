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
          className={activeTab === 'advanced_calculation_functionality' ? 'active' : ''}
          onClick={() => setActiveTab('advanced_calculation_functionality')}
        >
          Advanced Calculation Functionality
        </button>
        <button 
          className={activeTab === 'data_visualization_&_analytics' ? 'active' : ''}
          onClick={() => setActiveTab('data_visualization_&_analytics')}
        >
          Data Visualization & Analytics
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

        {activeTab === 'advanced_calculation_functionality' && (
          <div className="tab-content">
            <h2>Advanced Calculation Functionality</h2>
            <p>Manage your advanced calculation functionality here.</p>
          </div>
        )}

        {activeTab === 'data_visualization_&_analytics' && (
          <div className="tab-content">
            <h2>Data Visualization & Analytics</h2>
            <p>Manage your data visualization & analytics here.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Dashboard