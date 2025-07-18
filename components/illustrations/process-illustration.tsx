'use client'

import React from 'react'

interface ProcessIllustrationProps {
  step: 1 | 2 | 3 | 4
  title: string
  description: string
}

export function ProcessIllustration({ step, title, description }: ProcessIllustrationProps) {
  const getStepIllustration = () => {
    switch (step) {
      case 1:
        return (
          <svg viewBox="0 0 200 200" className="w-full h-full" aria-hidden="true" role="img">
            <defs>
              <linearGradient id="uploadGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#6366f1" />
                <stop offset="100%" stopColor="#8b5cf6" />
              </linearGradient>
            </defs>

            <g>
              <ellipse cx="100" cy="80" rx="60" ry="40" fill="url(#uploadGradient)" opacity="0.1" />
              <path d="M60 90 Q50 70 70 70 Q80 50 100 50 Q120 50 130 70 Q150 70 140 90 Z" fill="url(#uploadGradient)" />
              <path d="M100 110 L100 140" stroke="white" strokeWidth="4" />
              <path d="M90 120 L100 110 L110 120" stroke="white" strokeWidth="4" fill="none" />
              <rect x="70" y="140" width="60" height="40" rx="4" fill="white" stroke="#e2e8f0" strokeWidth="2" />
              <rect x="80" y="150" width="40" height="4" rx="2" fill="#64748b" />
              <rect x="80" y="160" width="30" height="3" rx="1.5" fill="#94a3b8" />
              <rect x="80" y="168" width="35" height="3" rx="1.5" fill="#94a3b8" />
            </g>

            <g className="animate-pulse">
              <circle cx="160" cy="60" r="2" fill="#fbbf24" />
              <circle cx="40" cy="120" r="1.5" fill="#fbbf24" style={{ animationDelay: '0.5s' }} />
              <circle cx="170" cy="140" r="1" fill="#fbbf24" style={{ animationDelay: '1s' }} />
            </g>
          </svg>
        )

      case 2:
        return (
          <svg viewBox="0 0 200 200" className="w-full h-full" aria-hidden="true" role="img">
            <defs>
              <linearGradient id="jobGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#8b5cf6" />
                <stop offset="100%" stopColor="#a855f7" />
              </linearGradient>
            </defs>

            <g>
              <rect x="70" y="70" width="60" height="40" rx="6" fill="url(#jobGradient)" />
              <rect x="85" y="60" width="30" height="20" rx="4" fill="url(#jobGradient)" />
              <rect x="70" y="85" width="60" height="4" fill="white" opacity="0.3" />
              {[130, 140, 150, 160].map((y, i) => (
                <rect key={i} x="50" y={y} width={100 - i * 10} height="3" rx="1.5" fill="#64748b" />
              ))}
            </g>

            <g className="animate-pulse">
              <rect x="160" y="90" width="25" height="12" rx="6" fill="#06b6d4" />
              <text x="172" y="99" textAnchor="middle" fontSize="8" fill="white" fontWeight="bold">
                JS
              </text>
            </g>
            <g className="animate-pulse" style={{ animationDelay: '0.3s' }}>
              <rect x="30" y="110" width="30" height="12" rx="6" fill="#10b981" />
              <text x="45" y="119" textAnchor="middle" fontSize="8" fill="white" fontWeight="bold">
                React
              </text>
            </g>
            <g className="animate-pulse" style={{ animationDelay: '0.6s' }}>
              <rect x="160" y="130" width="25" height="12" rx="6" fill="#f59e0b" />
              <text x="172" y="139" textAnchor="middle" fontSize="8" fill="white" fontWeight="bold">
                TS
              </text>
            </g>
          </svg>
        )

      case 3:
        return (
          <svg viewBox="0 0 200 200" className="w-full h-full" aria-hidden="true" role="img">
            <defs>
              <linearGradient id="aiGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#06b6d4" />
                <stop offset="100%" stopColor="#0ea5e9" />
              </linearGradient>
            </defs>

            <circle cx="100" cy="80" r="35" fill="url(#aiGradient)" />
            <g stroke="white" strokeWidth="2" fill="none">
              <circle cx="85" cy="70" r="4" />
              <circle cx="115" cy="70" r="4" />
              <circle cx="100" cy="90" r="4" />
              <line x1="85" y1="70" x2="100" y2="90" />
              <line x1="115" y1="70" x2="100" y2="90" />
              <line x1="85" y1="70" x2="115" y2="70" />
            </g>

            <g transform="translate(130, 50) rotate(45)">
              <rect width="3" height="30" fill="#fbbf24" />
              <path d="M-2 0 L5 0 L3 -5 Z" fill="#fbbf24" />
              <circle cx="1.5" cy="-8" r="1" fill="#fbbf24" />
              <circle cx="6" cy="-3" r="0.5" fill="#fbbf24" />
              <circle cx="-1" cy="-5" r="0.5" fill="#fbbf24" />
            </g>

            <g
              className="animate-spin"
              style={{ transformOrigin: '100px 80px', animationDuration: '3s' }}
            >
              {[ [120, 60], [80, 60], [120, 100], [80, 100] ].map(([cx, cy], i) => (
                <circle key={i} cx={cx} cy={cy} r="2" fill="#fbbf24" />
              ))}
            </g>

            <rect x="60" y="140" width="80" height="40" rx="4" fill="white" stroke="#10b981" strokeWidth="2" />
            <rect x="70" y="150" width="60" height="4" rx="2" fill="#10b981" />
            <rect x="70" y="160" width="40" height="3" rx="1.5" fill="#10b981" />
            <rect x="70" y="168" width="50" height="3" rx="1.5" fill="#10b981" />

            <circle cx="130" cy="130" r="8" fill="#10b981" />
            <path d="M125 130 L129 134 L135 128" stroke="white" strokeWidth="2" fill="none" />
          </svg>
        )

      case 4:
        return (
          <svg viewBox="0 0 200 200" className="w-full h-full" aria-hidden="true" role="img">
            <defs>
              <linearGradient id="downloadGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#10b981" />
                <stop offset="100%" stopColor="#059669" />
              </linearGradient>
            </defs>

            {[0, 5, 10].map((offset, i) => (
              <rect
                key={i}
                x={90 - offset}
                y={50 + offset}
                width="60"
                height="40"
                rx="4"
                fill="white"
                stroke={i === 2 ? '#10b981' : '#e2e8f0'}
                strokeWidth="2"
              />
            ))}

            <rect x="100" y="60" width="40" height="4" rx="2" fill="#10b981" />
            <rect x="100" y="70" width="30" height="3" rx="1.5" fill="#10b981" />
            <rect x="100" y="78" width="35" height="3" rx="1.5" fill="#10b981" />

            <g className="animate-bounce">
              <circle cx="100" cy="130" r="20" fill="url(#downloadGradient)" />
              <path d="M100 120 L100 140" stroke="white" strokeWidth="4" />
              <path d="M90 135 L100 145 L110 135" stroke="white" strokeWidth="4" fill="none" />
            </g>

            <g className="animate-pulse">
              <circle cx="160" cy="80" r="3" fill="#10b981" />
              <circle cx="40" cy="120" r="2" fill="#10b981" />
              <circle cx="170" cy="140" r="2.5" fill="#10b981" />
            </g>
            <g className="animate-pulse" style={{ animationDelay: '0.5s' }}>
              <rect x="50" y="40" width="4" height="4" fill="#fbbf24" transform="rotate(45 52 42)" />
              <rect x="160" y="45" width="3" height="3" fill="#f59e0b" transform="rotate(45 161.5 46.5)" />
              <rect x="45" y="160" width="3" height="3" fill="#06b6d4" transform="rotate(45 46.5 161.5)" />
              <rect x="170" y="170" width="4" height="4" fill="#8b5cf6" transform="rotate(45 172 172)" />
            </g>
          </svg>
        )

      default:
        return null
    }
  }

  return (
    <div className="text-center group hover:scale-105 transition-all duration-300">
      <div className="w-32 h-32 mx-auto mb-6 relative">
        {getStepIllustration()}
        <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center shadow-lg">
          <span className="text-white font-bold text-sm">{step}</span>
        </div>
      </div>
      <h3 className="text-xl font-semibold mb-3 text-gray-800 group-hover:text-primary transition-colors">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  )
}

export default ProcessIllustration
