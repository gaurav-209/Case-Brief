import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

const DashboardLayout = () => {
  return (
     <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-1 pt-16">
        <div className="h-screen sticky top-0">
          <Sidebar />
        </div>
        <main className="flex-1 bg-gray-50">
          <div className="container mx-auto px-4 py-6">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  )
}

export default DashboardLayout
