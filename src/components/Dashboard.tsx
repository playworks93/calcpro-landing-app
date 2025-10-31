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
          className={activeTab === 'basic_arithmetic_operations' ? 'active' : ''}
          onClick={() => setActiveTab('basic_arithmetic_operations')}
        >
          Basic Arithmetic Operations
        </button>
        <button 
          className={activeTab === 'advanced_scientific_calculations' ? 'active' : ''}
          onClick={() => setActiveTab('advanced_scientific_calculations')}
        >
          Advanced Scientific Calculations
        </button>
        <button 
          className={activeTab === 'data_analytics_integration' ? 'active' : ''}
          onClick={() => setActiveTab('data_analytics_integration')}
        >
          Data Analytics Integration
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

        {activeTab === 'basic_arithmetic_operations' && (
          <div className="tab-content">
            <h2>Basic Arithmetic Operations</h2>
            <p>Manage your basic arithmetic operations here.</p>
          </div>
        )}

        {activeTab === 'advanced_scientific_calculations' && (
          <div className="tab-content">
            <h2>Advanced Scientific Calculations</h2>
            <p>Manage your advanced scientific calculations here.</p>
          </div>
        )}

        {activeTab === 'data_analytics_integration' && (
          <div className="tab-content">
            <h2>Data Analytics Integration</h2>
            <p>Manage your data analytics integration here.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Dashboard