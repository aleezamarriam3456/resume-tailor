'use client'

import { useState } from 'react'

// Correct component imports (singular FeatureIcon, not FeatureIcons)
import DashboardPreview from '@/components/illustrations/dashboard-preview'
import HeroIllustration from '@/components/illustrations/hero-illustration'
import FeatureIcon from '@/components/illustrations/feature-icons'
import TestimonialSection from '@/components/illustrations/testimonals'
import ProcessIllustration from '@/components/illustrations/process-illustration'

import { Input } from '@/components/ui/input'
import { Card } from '@/components/ui/card'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'

// Added UI component imports:
import { Accordion } from '@/components/ui/accordion'
import { Alert } from '@/components/ui/alert'
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogAction,
  AlertDialogCancel,
} from '@/components/ui/alert-dialog'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator, BreadcrumbEllipsis } from '@/components/ui/breadcrumb'
import { Badge } from '@/components/ui/badge'
import { AspectRatio } from '@/components/ui/aspect.radio'

// ** Added import for Calendar component **
import { Calendar } from '@/components/ui/calender'

// Import carousel, chart, and checkbox as requested
import {Carousel}  from '@/components/ui/carousel'
import { Chart } from '@/components/ui/chart'
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent
} from '@/components/ui/collapsible'



import { Checkbox } from '@/components/ui/checkbox'

export default function ResumeTailor() {
  const [resume, setResume] = useState('')
  const [jobDesc, setJobDesc] = useState('')
  const [tailoredResume, setTailoredResume] = useState('')
  const [loading, setLoading] = useState(false)

  const handleTailor = async () => {
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1500))
    setTailoredResume(`Tailored Resume based on Job Description:\n\n${jobDesc}\n\n...tailored content...`)
    setLoading(false)
  }

  return (
    <>
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center bg-white shadow-sm sticky top-0 z-50">
        <h1 className="font-extrabold text-xl text-blue-700">Resume Tailor</h1>
        <button className="text-blue-600 border border-blue-600 px-4 py-1 rounded hover:bg-blue-600 hover:text-white transition">
          Login
        </button>
      </nav>

      <main className="min-h-screen bg-gradient-to-br from-white to-slate-100 py-12 px-6 flex flex-col items-center max-w-7xl mx-auto">
        {/* Hero Illustration */}
        <HeroIllustration className="mb-12" />

        <header className="max-w-3xl text-center mb-12 mt-12">
          <h2 className="text-5xl font-extrabold text-blue-700 mb-4 drop-shadow-md">
            Tailor Your Resume Effortlessly
          </h2>
          <p className="text-lg text-slate-700">
            Paste your resume and job description, then let AI craft the perfect tailored resume for you.
          </p>
        </header>

        <Card className="max-w-4xl w-full p-8 mb-12 shadow-lg">
          <div className="grid md:grid-cols-2 gap-8">
            <section>
              <label htmlFor="resume" className="mb-2 font-semibold text-slate-700 block">
                Your Resume
              </label>
              <Textarea
                id="resume"
                rows={12}
                placeholder="Paste your resume here"
                value={resume}
                onChange={(e) => setResume(e.target.value)}
              />
            </section>

            <section>
              <label htmlFor="jobDesc" className="mb-2 font-semibold text-slate-700 block">
                Job Description
              </label>
              <Textarea
                id="jobDesc"
                rows={12}
                placeholder="Paste job description here"
                value={jobDesc}
                onChange={(e) => setJobDesc(e.target.value)}
              />
            </section>
          </div>

          <div className="mt-8 text-center">
            <Button onClick={handleTailor} disabled={loading}>
              {loading ? 'Tailoring...' : 'Tailor My Resume'}
            </Button>
          </div>
        </Card>

        {tailoredResume && (
          <Card className="max-w-3xl bg-white rounded-2xl p-8 shadow-lg border border-slate-200 whitespace-pre-wrap text-slate-800">
            <h3 className="text-2xl font-semibold mb-4 text-blue-700">🎉 Tailored Resume</h3>
            <pre>{tailoredResume}</pre>
          </Card>
        )}

        {/* Feature Icon with type "ai" */}
        <section className="max-w-7xl w-full mb-12 flex justify-center">
          <FeatureIcon type="ai" className="w-20 h-20" />
        </section>

        <section className="max-w-7xl w-full mb-12 grid grid-cols-1 md:grid-cols-4 gap-8">
          {[1, 2, 3, 4].map((step) => (
            <ProcessIllustration
              key={step}
              step={step as 1 | 2 | 3 | 4}
              title={`Step ${step}`}
              description={`Description for step ${step} of the process.`}
            />
          ))}
        </section>

        <section className="max-w-7xl w-full mb-12">
          <DashboardPreview />
        </section>

        <section className="max-w-7xl w-full mb-12">
          <TestimonialSection />
        </section>
      </main>

      <footer className="max-w-7xl mx-auto px-6 py-6 text-center text-sm text-slate-500">
        Made with ❤️ by You |{' '}
        <a
          href="https://linkedin.com/in/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-blue-600"
        >
          LinkedIn
        </a>{' '}
        |{' '}
        <a
          href="https://github.com/yourgithub"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-blue-600"
        >
          GitHub
        </a>
      </footer>
    </>
  )
}
