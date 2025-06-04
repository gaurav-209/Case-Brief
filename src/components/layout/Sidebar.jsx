import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Users, 
  Briefcase, 
  FileText, 
  CheckSquare, 
  Calendar, 
  DollarSign, 
  BarChart, 
  Settings,
  ChevronRight,
  ChevronLeft,
  Scale
} from 'lucide-react';

const Sidebar = () => {

    const [collapsed, setCollapsed] = useState(false)
    const [screenWidth,setScreenWidth] = useState(window.innerWidth)

//     useEffect(() => {
//     const handleResize = () => setScreenWidth(window.innerWidth)
//     window.addEventListener('resize', handleResize)
//     return () => window.removeEventListener('resize', handleResize)
//   }, [])

    const menuItems = [
    { path: '/dashboard', label: 'Dashboard', icon: <LayoutDashboard size={20} /> },
    { path: '/clients', label: 'Clients', icon: <Users size={20} /> },
    { path: '/cases', label: 'Cases', icon: <Briefcase size={20} /> },
    { path: '/documents', label: 'Documents', icon: <FileText size={20} /> },
    { path: '/tasks', label: 'Tasks', icon: <CheckSquare size={20} /> },
    { path: '/appointments', label: 'Appointments', icon: <Calendar size={20} /> },
    { path: '/invoices', label: 'Invoices', icon: <DollarSign size={20} /> },
    { path: '/reports', label: 'Reports', icon: <BarChart size={20} /> },
    { path: '/settings', label: 'Settings', icon: <Settings size={20} /> },
  ]

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  }

  return (
    <div className={`h-full bg-primary-800 text-white transition-all duration-300 ${collapsed && screenWidth > 768 ? 'w-16' : 'w-64'}`}>
      <div className="p-4 flex items-center justify-between border-b border-primary-700">
        <Link to="/dashboard" className={`flex items-center ${collapsed ? 'justify-center' : ''}`}>
          <Scale size={24} className="text-secondary-400" />
          {!collapsed && (
            <span className="ml-2 text-xl font-serif font-bold">CaseBrief</span>
          )}
        </Link>
        <button 
          onClick={toggleSidebar} 
          className="text-gray-300 hover:text-white focus:outline-none"
          aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        >
          {collapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
        </button>
      </div>

      <nav className="mt-6">
        <ul className="space-y-2 px-2">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`flex items-center py-2 px-4 rounded-md transition-colors ${
                    isActive 
                      ? 'bg-primary-700 text-secondary-400' 
                      : 'text-gray-300 hover:bg-primary-700 hover:text-white'
                  }`}
                >
                  <span className="text-current">{item.icon}</span>
                  {!collapsed && <span className="ml-3">{item.label}</span>}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  )
}

export default Sidebar
