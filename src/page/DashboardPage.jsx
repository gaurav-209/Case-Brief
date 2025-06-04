import React from 'react'
import { Link } from 'react-router-dom'
import {
    Users,
    Briefcase,
    Calendar,
    CheckSquare,
    TrendingUp,
    ArrowUpRight,
    ArrowDownRight
} from 'lucide-react';
import Card from '../components/ui/Card'
import { dashboardStats } from '../data/mockData'
import { formatCurrency } from '../data/mockData'

const DashboardPage = () => {

    const stats = dashboardStats

    const statsData = [
        { path: '/clients', label: 'Total Clients', stats: stats.totalClients, icon: <Users size={20} className="text-primary-600" />, des: 'View all clients' },
        { path: '/cases', label: 'Open Cases', stats: stats.openCases, icon: <Briefcase size={20} className="text-primary-600" />, des: 'View all cases' },
        { path: '/appointments', label: 'Hearings This Week', stats: stats.hearingsThisWeek, icon: <Calendar size={20} className="text-primary-600" />, des: 'View calendar' },
        { path: '/clients', label: 'Tasks Due', stats: stats.tasksDue, icon: <CheckSquare size={20} className="text-primary-600" />, des: 'View tasks' },
    ]

    return (
        <div>
            <div className="mb-8">
                <h1 className="text-3xl font-serif font-bold text-primary-800">Dashboard</h1>
                <p className="text-gray-600">Welcome to your legal practice management dashboard</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-12">
                {
                    statsData.map((stat, idx) => (
                        <Card key={idx} className="flex flex-col">
                            <div className="flex items-start justify-between mb-2">
                                <div>
                                    <p className="text-sm font-medium text-gray-500">{stat.label}</p>
                                    <h2 className="text-2xl font-bold text-primary-800">{stat.stats}</h2>
                                </div>
                                <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                                    {stat.icon}
                                </div>
                            </div>
                            <div className="mt-auto pt-4 border-t border-gray-100">
                                <Link to={stat.path} className="text-sm text-primary-600 hover:text-primary-800 font-medium">
                                    {stat.des}
                                </Link>
                            </div>
                        </Card>
                    ))
                }
                <Card className="flex flex-col">
                    <div className="flex items-start justify-between mb-2">
                        <div>
                            <p className="text-sm font-medium text-gray-500">Revenue (MTD)</p>
                            <h2 className="text-2xl font-bold text-primary-800">{formatCurrency(stats.revenue.current)}</h2>
                        </div>
                        <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                            <TrendingUp size={20} className="text-primary-600" />
                        </div>
                    </div>
                    <div className="flex items-center mt-2">
                        {stats.revenue.percentChange > 0 ? (
                            <div className="flex items-center text-success-500 text-sm">
                                <ArrowUpRight size={16} className="mr-1" />
                                <span>{stats.revenue.percentChange}% vs last month</span>
                            </div>
                        ) : (
                            <div className="flex items-center text-error-500 text-sm">
                                <ArrowDownRight size={16} className="mr-1" />
                                <span>{Math.abs(stats.revenue.percentChange)}% vs last month</span>
                            </div>
                        )}
                    </div>
                    <div className="mt-auto pt-4 border-t border-gray-100">
                        <Link to="/reports" className="text-sm text-primary-600 hover:text-primary-800 font-medium">
                            View financial reports
                        </Link>
                    </div>
                </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Recent Cases */}
                <Card>
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-lg font-bold text-primary-800">Recent Cases</h3>
                        <Link to="/cases" className="text-sm text-primary-600 hover:text-primary-800 font-medium">
                            View all
                        </Link>
                    </div>
                    <div className="divide-y divide-gray-200">
                        <div className="py-3">
                            <div className="flex justify-between">
                                <div>
                                    <p className="font-medium text-primary-700">Acme Corp. Patent Infringement</p>
                                    <p className="text-sm text-gray-500">Acme Corporation</p>
                                </div>
                                <div className="flex items-center">
                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                                        In Progress
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="py-3">
                            <div className="flex justify-between">
                                <div>
                                    <p className="font-medium text-primary-700">Smith Divorce Proceedings</p>
                                    <p className="text-sm text-gray-500">John Smith</p>
                                </div>
                                <div className="flex items-center">
                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                        Open
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="py-3">
                            <div className="flex justify-between">
                                <div>
                                    <p className="font-medium text-primary-700">TechStart Series A Funding</p>
                                    <p className="text-sm text-gray-500">TechStart Inc.</p>
                                </div>
                                <div className="flex items-center">
                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                                        In Progress
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </Card>

                {/* Upcoming Appointments */}
                <Card>
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-lg font-bold text-primary-800">Upcoming Appointments</h3>
                        <Link to="/appointments" className="text-sm text-primary-600 hover:text-primary-800 font-medium">
                            View all
                        </Link>
                    </div>
                    <div className="divide-y divide-gray-200">
                        <div className="py-3">
                            <div className="flex justify-between">
                                <div>
                                    <p className="font-medium text-primary-700">Patent Strategy Meeting</p>
                                    <p className="text-sm text-gray-500">Nov 20, 10:00 AM</p>
                                </div>
                                <div className="flex items-center">
                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800">
                                        Meeting
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="py-3">
                            <div className="flex justify-between">
                                <div>
                                    <p className="font-medium text-primary-700">Mediation Session</p>
                                    <p className="text-sm text-gray-500">Nov 22, 2:00 PM</p>
                                </div>
                                <div className="flex items-center">
                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-secondary-100 text-secondary-800">
                                        Court Date
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="py-3">
                            <div className="flex justify-between">
                                <div>
                                    <p className="font-medium text-primary-700">Investment Term Review</p>
                                    <p className="text-sm text-gray-500">Nov 24, 11:00 AM</p>
                                </div>
                                <div className="flex items-center">
                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                        Call
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    )
}

export default DashboardPage
