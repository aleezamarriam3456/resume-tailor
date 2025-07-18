'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface StatCardProps {
  bgColor: string
  iconBgColor: string
  iconPath: string
  title: string
  value: string | number
}

function StatCard({ bgColor, iconBgColor, iconPath, title, value }: StatCardProps) {
  return (
    <div className={`${bgColor} rounded-xl p-5 shadow-md hover:shadow-lg transition-shadow`}>
      <div className="flex items-center space-x-4">
        <div className={`${iconBgColor} p-2 rounded-lg`}>
          <svg
            className="w-6 h-6 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
            dangerouslySetInnerHTML={{ __html: iconPath }}
          />
        </div>
        <div>
          <p className="text-sm text-gray-500 font-medium">{title}</p>
          <p className="text-2xl font-bold text-gray-900">{value}</p>
        </div>
      </div>
    </div>
  )
}

interface DashboardPreviewProps {
  className?: string
}

export function DashboardPreview({ className = '' }: DashboardPreviewProps) {
  const icons = {
    totalResumes: `<path d="M14 2H6C4.89 2 4 2.89 4 4v16c0 1.11.89 2 2 2h12c1.11 0 2-.89 2-2V8l-6-6z"/>`,
    aiTailored: `<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>`,
    applied: `<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>`,
    successRate: `<path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>`,
  }

  const recentResumes = [
    {
      id: 1,
      title: 'Frontend Developer',
      status: 'Applied',
      statusColor: 'bg-green-100 text-green-800',
      description: 'Tailored for: Senior React Developer at TechCorp',
    },
    {
      id: 2,
      title: 'Backend Engineer',
      status: 'In Review',
      statusColor: 'bg-yellow-100 text-yellow-800',
      description: 'Tailored for: Node.js Engineer at DataWorks',
    },
    {
      id: 3,
      title: 'UI/UX Designer',
      status: 'Interview',
      statusColor: 'bg-blue-100 text-blue-800',
      description: 'Tailored for: Product Designer at Creatives Inc.',
    },
  ]

  return (
    <div
      className={`w-full max-w-6xl mx-auto bg-white dark:bg-zinc-900 rounded-2xl shadow-xl overflow-hidden mt-16 ${className}`}
    >
      {/* Top Browser Bar */}
      <div className="flex items-center justify-between px-6 py-3 bg-gray-100 dark:bg-zinc-800 border-b border-gray-200 dark:border-zinc-700">
        <div className="flex items-center space-x-2">
          <span className="w-3 h-3 bg-red-500 rounded-full"></span>
          <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
          <span className="w-3 h-3 bg-green-500 rounded-full"></span>
        </div>
        <div className="text-sm font-mono text-gray-700 dark:text-gray-300">
          resumecraft.ai/dashboard
        </div>
        <div className="w-6" /> {/* Empty space for alignment */}
      </div>

      <div className="p-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-10">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-tr from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center shadow-md">
              <svg
                className="w-6 h-6 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L2 7v10c0 5.55 3.84 10 9 10s9-4.55 9-10V7l-10-5z" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">ResumeCraft AI</h1>
          </div>
          <div className="flex items-center space-x-3">
            <p className="text-gray-600 dark:text-gray-300 text-sm">Welcome, user@example.com</p>
            <div className="w-10 h-10 bg-gray-200 dark:bg-gray-600 rounded-full" />
          </div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12"
        >
          <StatCard
            bgColor="bg-blue-50"
            iconBgColor="bg-blue-600"
            iconPath={icons.totalResumes}
            title="Total Resumes"
            value={12}
          />
          <StatCard
            bgColor="bg-purple-50"
            iconBgColor="bg-purple-600"
            iconPath={icons.aiTailored}
            title="AI Tailored"
            value={8}
          />
          <StatCard
            bgColor="bg-green-50"
            iconBgColor="bg-green-600"
            iconPath={icons.applied}
            title="Applied"
            value={5}
          />
          <StatCard
            bgColor="bg-orange-50"
            iconBgColor="bg-orange-600"
            iconPath={icons.successRate}
            title="Success Rate"
            value="89%"
          />
        </motion.div>

        {/* Recent Resumes */}
        <div className="bg-gray-50 dark:bg-zinc-800 rounded-2xl border border-gray-200 dark:border-zinc-700 p-6">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Recent Tailored Resumes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recentResumes.map((resume) => (
              <motion.div
                key={resume.id}
                className="bg-white dark:bg-zinc-900 p-5 rounded-xl shadow-sm hover:shadow-lg transition-shadow"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-base font-bold text-gray-900 dark:text-white">{resume.title}</h3>
                  <span className={`px-2 py-1 text-xs rounded-full font-medium ${resume.statusColor}`}>
                    {resume.status}
                  </span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  {resume.description}
                </p>
                <div className="flex space-x-2">
                  <button className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white py-1.5 rounded-md text-sm font-semibold">
                    View
                  </button>
                  <button className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 py-1.5 rounded-md text-sm font-semibold dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-100">
                    Download
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardPreview
