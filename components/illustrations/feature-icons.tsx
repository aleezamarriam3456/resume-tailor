'use client'

import * as React from 'react'

interface FeatureIconProps {
  type: 'ai' | 'speed' | 'security' | 'history' | 'formats' | 'mobile'
  className?: string
}

const gradients: Record<FeatureIconProps['type'], [string, string]> = {
  ai: ['#6366f1', '#8b5cf6'],
  speed: ['#8b5cf6', '#a855f7'],
  security: ['#06b6d4', '#0ea5e9'],
  history: ['#10b981', '#059669'],
  formats: ['#f59e0b', '#d97706'],
  mobile: ['#6366f1', '#4f46e5'],
}

export default function FeatureIcon({ type, className = 'w-12 h-12' }: FeatureIconProps) {
  const gradientId = React.useId() // Unique ID per component instance for gradient
  const [start, end] = gradients[type] ?? ['#000', '#333']

  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      role="img"
      aria-label={`${type} icon`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={start} />
          <stop offset="100%" stopColor={end} />
        </linearGradient>
      </defs>

      <circle cx="32" cy="32" r="30" fill={`url(#${gradientId})`} />

      {type === 'ai' && (
        <>
          <circle cx="25" cy="25" r="4" fill="white" />
          <circle cx="39" cy="25" r="4" fill="white" />
          <circle cx="25" cy="25" r="2" fill="#1e293b" />
          <circle cx="39" cy="25" r="2" fill="#1e293b" />
          <path d="M20 40 Q32 35 44 40" stroke="white" strokeWidth={3} fill="none" />
        </>
      )}

      {type === 'speed' && (
        <path d="M20 40 C32 20, 44 20, 44 40" stroke="white" strokeWidth={3} fill="none" />
      )}

      {type === 'security' && (
        <path d="M24 28 L32 20 L40 28 L32 44 Z" stroke="white" strokeWidth={2} fill="none" />
      )}

      {type === 'history' && (
        <g stroke="white" strokeWidth={2}>
          <circle cx="32" cy="32" r="12" fill="none" />
          <path d="M32 26 V32 L36 36" />
        </g>
      )}

      {type === 'formats' && (
        <>
          <rect x="20" y="20" width="24" height="24" rx="2" fill="white" />
          <text
            x="32"
            y="36"
            textAnchor="middle"
            fontSize="14"
            fill="#1e293b"
            fontWeight="bold"
            fontFamily="Arial, sans-serif"
          >
            PDF
          </text>
        </>
      )}

      {type === 'mobile' && (
        <>
          <rect x="24" y="16" width="16" height="32" rx="2" fill="white" />
          <circle cx="32" cy="44" r="1.5" fill="#1e293b" />
        </>
      )}
    </svg>
  )
}
