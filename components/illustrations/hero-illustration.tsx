'use client'

import * as React from 'react'

interface HeroIllustrationProps {
  className?: string
}

const HeroIllustration: React.FC<HeroIllustrationProps> = ({ className = '' }) => {
  return (
    <div
      className={`relative w-full max-w-6xl mx-auto h-[400px] mt-10 rounded-xl overflow-hidden bg-gradient-to-tr from-indigo-50 to-purple-50 shadow-md border border-indigo-100 ${className}`}
    >
      <svg
        viewBox="0 0 800 400"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        role="img"
      >
        <defs>
          <linearGradient id="heroGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6366f1" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
          <linearGradient id="paperGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#f8fafc" />
          </linearGradient>
          <linearGradient id="aiGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4" />
            <stop offset="100%" stopColor="#0ea5e9" />
          </linearGradient>
          <marker
            id="arrowhead"
            markerWidth="10"
            markerHeight="7"
            refX="9"
            refY="3.5"
            orient="auto"
          >
            <polygon points="0 0, 10 3.5, 0 7" fill="#06b6d4" />
          </marker>
        </defs>

        <circle cx="150" cy="100" r="60" fill="url(#heroGradient)" opacity="0.1" />
        <circle cx="650" cy="300" r="90" fill="url(#aiGradient)" opacity="0.1" />

        {/* Left Resume */}
        <g>
          <rect
            x="150"
            y="120"
            width="200"
            height="260"
            rx="12"
            fill="url(#paperGradient)"
            stroke="#e2e8f0"
            strokeWidth="2"
          />
          <rect x="170" y="140" width="100" height="12" rx="6" fill="#64748b" />
          <rect x="170" y="165" width="160" height="8" rx="4" fill="#94a3b8" />
          <rect x="170" y="180" width="140" height="8" rx="4" fill="#94a3b8" />
          <rect x="170" y="210" width="80" height="8" rx="4" fill="#94a3b8" />
          <rect x="170" y="230" width="120" height="8" rx="4" fill="#94a3b8" />
          <rect x="170" y="250" width="100" height="8" rx="4" fill="#94a3b8" />
          <rect x="170" y="280" width="140" height="8" rx="4" fill="#94a3b8" />
          <rect x="170" y="300" width="90" height="8" rx="4" fill="#94a3b8" />
        </g>

        {/* AI Arrow Pulse */}
        <g className="animate-pulse">
          <path
            d="M380 240 L420 240"
            stroke="url(#aiGradient)"
            strokeWidth="3"
            fill="none"
            markerEnd="url(#arrowhead)"
          />
          <circle cx="390" cy="230" r="3" fill="#06b6d4" />
          <circle cx="400" cy="235" r="2" fill="#0ea5e9" />
          <circle cx="410" cy="228" r="2.5" fill="#06b6d4" />
        </g>

        {/* Right Resume */}
        <g>
          <rect
            x="450"
            y="120"
            width="200"
            height="260"
            rx="12"
            fill="url(#paperGradient)"
            stroke="#10b981"
            strokeWidth="2"
          />
          <rect x="470" y="140" width="120" height="12" rx="6" fill="#059669" />
          <rect x="470" y="165" width="160" height="8" rx="4" fill="#10b981" />
          <rect x="470" y="180" width="140" height="8" rx="4" fill="#10b981" />
          <rect x="470" y="210" width="100" height="8" rx="4" fill="#10b981" />
          <rect x="470" y="230" width="140" height="8" rx="4" fill="#10b981" />
          <rect x="470" y="250" width="120" height="8" rx="4" fill="#10b981" />
          <rect x="470" y="280" width="160" height="8" rx="4" fill="#10b981" />
          <rect x="470" y="300" width="110" height="8" rx="4" fill="#10b981" />
        </g>

        {/* AI Brain Icon */}
        <g transform="translate(380, 80)">
          <circle cx="20" cy="30" r="25" fill="url(#aiGradient)" />
          <circle cx="15" cy="25" r="4" fill="white" />
          <circle cx="25" cy="25" r="4" fill="white" />
          <circle cx="15" cy="25" r="2" fill="#1e293b" />
          <circle cx="25" cy="25" r="2" fill="#1e293b" />
          <rect x="16" y="32" width="8" height="4" rx="2" fill="white" />
          <path d="M5 35 Q20 25 35 35" stroke="white" strokeWidth="2" fill="none" />
        </g>

        {/* Enhancement Stars */}
        {[150, 200, 250].map((cy, i) => (
          <g key={i}>
            <circle cx="630" cy={cy} r="8" fill="#fbbf24" />
            <text
              x="630"
              y={cy + 5}
              textAnchor="middle"
              fontSize="10"
              fill="white"
              fontWeight="bold"
            >
              ✨
            </text>
          </g>
        ))}

        {/* Floating Sparkles */}
        <g className="animate-bounce" style={{ animationDuration: '3s' }}>
          <circle cx="100" cy="200" r="3" fill="#8b5cf6" opacity="0.6" />
          <circle cx="700" cy="150" r="4" fill="#06b6d4" opacity="0.6" />
          <circle cx="120" cy="320" r="2" fill="#10b981" opacity="0.6" />
        </g>
      </svg>
    </div>
  )
}

export default HeroIllustration
