'use client'

import { useState } from 'react'

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion'
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
} from '@/components/ui/alert-dialog'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { LoadingSpinner } from '@/components/ui/loading-spinner'
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from '@/components/ui/dialog'
import FeatureIcon from '@/components/illustrations/feature-icons'
import ProcessIllustration from '@/components/illustrations/process-illustration'
import DashboardPreview from '@/components/illustrations/dashboard-preview'
import TestimonialSection from '@/components/illustrations/testimonals'
import HeroIllustration from '@/components/illustrations/hero-illustration'
import { Card } from '@/components/ui/card'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu'
import { Badge } from '@/components/ui/badge'

export default function ResumeTailorPage() {
  const [resume, setResume] = useState('')
  const [jobDesc, setJobDesc] = useState('')
  const [tailoredResume, setTailoredResume] = useState('')
  const [loading, setLoading] = useState(false)
  const [emailDialogOpen, setEmailDialogOpen] = useState(false)
  const [email, setEmail] = useState('')
  const [otpSent, setOtpSent] = useState(false)
  const [badgeMenuOpen, setBadgeMenuOpen] = useState(false)

  // Footer dialog state and email input
  const [footerDialogOpen, setFooterDialogOpen] = useState(false)
  const [footerEmail, setFooterEmail] = useState('')

  const handleTailor = async () => {
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1500))
    setTailoredResume(
      `Tailored Resume based on Job Description:\n\n${jobDesc}\n\n...tailored content...`
    )
    setLoading(false)
  }

  return (
    <>
      {/* Navigation */}
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center bg-white shadow-sm sticky top-0 z-50">
        <ul className="flex space-x-8 text-blue-700 font-semibold text-lg cursor-pointer select-none">
          <li className="hover:text-blue-900">ResumeCraft AI</li>
          <li className="hover:text-blue-900">Features</li>
          <li className="hover:text-blue-900">Demo</li>
          <li className="hover:text-blue-900">Pricing</li>
          <li>
            <button className="bg-blue-700 text-white px-4 py-1 rounded hover:bg-blue-800 transition">
              Get Started
            </button>
          </li>
        </ul>

        <div className="flex items-center space-x-4">
          <Dialog open={emailDialogOpen} onOpenChange={setEmailDialogOpen}>
            <DialogTrigger asChild>
              <button className="text-blue-600 border border-blue-600 px-4 py-1 rounded hover:bg-blue-600 hover:text-white transition">
                Login
              </button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Enter Your Email</DialogTitle>
                <DialogDescription>
                  We will send an OTP to your email for verification.
                </DialogDescription>
              </DialogHeader>
              <input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border px-4 py-2 rounded mt-4"
              />
              <DialogFooter className="mt-4">
                <Button
                  onClick={() => {
                    setOtpSent(true)
                    setEmailDialogOpen(false)
                  }}
                >
                  Send OTP
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="text-slate-700 px-3 py-1 rounded border border-gray-300 hover:bg-gray-100 transition">
                Menu ▼
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-40 bg-white rounded-md shadow-md p-1">
              <DropdownMenuItem className="px-3 py-2 hover:bg-gray-100 cursor-pointer">
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem className="px-3 py-2 hover:bg-gray-100 cursor-pointer">
                Settings
              </DropdownMenuItem>
              <DropdownMenuItem className="px-3 py-2 hover:bg-gray-100 cursor-pointer">
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <div className="relative">
            <button
              onClick={() => setBadgeMenuOpen(!badgeMenuOpen)}
              className="text-blue-600 font-semibold border border-blue-600 px-3 py-1 rounded hover:bg-blue-600 hover:text-white transition"
            >
              Badge ▼
            </button>
            {badgeMenuOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-md p-2 z-50">
                <Badge variant="default" className="block mb-2 cursor-pointer">
                  Default
                </Badge>
                <Badge variant="secondary" className="block mb-2 cursor-pointer">
                  Secondary
                </Badge>
                <Badge variant="destructive" className="block mb-2 cursor-pointer">
                  Destructive
                </Badge>
                <Badge variant="outline" className="block cursor-pointer">
                  Outline
                </Badge>
              </div>
            )}
          </div>
        </div>
      </nav>

      <main className="min-h-screen bg-gradient-to-br from-white to-slate-100 py-12 px-6 flex flex-col items-center max-w-7xl mx-auto">
        <Dialog open={otpSent} onOpenChange={setOtpSent}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>OTP Sent</DialogTitle>
              <DialogDescription>
                An OTP has been sent to <strong>{email}</strong>. Please check your inbox.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <DialogClose asChild>
                <Button>OK</Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        <HeroIllustration className="mb-12" />

        {/* SINGLE SVG container with dark blue background and updated overlay text */}
        <div className="relative w-full max-w-5xl h-[520px] mb-12 bg-blue-900 rounded-lg overflow-hidden">
          {/* SVG unchanged – keep your full SVG here (omitted here for brevity) */}

          {/* Overlay Text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center pointer-events-none font-serif">
            <h2 className="text-4xl font-extrabold mb-2 text-gray-100">
              I-Powered Resume Magic
            </h2>
            <h3 className="text-3xl font-semibold mb-4 text-gray-200 leading-snug">
              Tailor Your Resume with
              <br />
              AI Precision
            </h3>
            <p className="max-w-xl mb-8 text-lg text-gray-300 leading-relaxed">
              Transform your resume for any job in seconds. Our AI analyzes job descriptions and optimizes your resume to match exactly what employers are looking for.
            </p>

            <div className="flex gap-6 mb-10 pointer-events-auto">
              <button
                className="bg-indigo-500 hover:bg-indigo-600 px-8 py-3 rounded font-semibold shadow-lg transition text-white"
                onClick={() => alert('Try Free Demo clicked')}
              >
                Try Free Demo
              </button>
              <button
                className="border border-indigo-500 text-indigo-500 hover:bg-indigo-500 hover:text-white px-8 py-3 rounded font-semibold shadow-lg transition"
                onClick={() => alert('Watch Demo clicked')}
              >
                Watch Demo
              </button>
            </div>

            <div className="flex gap-16 text-indigo-300 font-semibold text-lg">
              <div>
                <span className="block text-3xl font-bold text-gray-100">
                  10k+
                </span>
                <span>Resumes Tailored</span>
              </div>
              <div>
                <span className="block text-3xl font-bold text-gray-100">
                  95%
                </span>
                <span>Success Rate</span>
              </div>
              <div>
                <span className="block text-3xl font-bold text-gray-100">
                  30s
                </span>
                <span>Average Time</span>
              </div>
            </div>
          </div>
        </div>

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
              {loading ? <LoadingSpinner size="sm" /> : 'Tailor My Resume'}
            </Button>
          </div>
        </Card>

        {tailoredResume && (
          <Card className="max-w-3xl bg-white rounded-2xl p-8 shadow-lg border border-slate-200 whitespace-pre-wrap text-slate-800">
            <h3 className="text-2xl font-semibold mb-4 text-blue-700">
              🎉 Tailored Resume
            </h3>
            <pre>{tailoredResume}</pre>
          </Card>
        )}

        <section className="max-w-7xl w-full mb-12">
          <FeatureIcon type="ai" className="w-20 h-20 mx-auto" />
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

      {/* FOOTER with overlay text + dialog */}
      <footer className="max-w-7xl mx-auto px-6 py-12 text-center text-slate-700">
        {/* Dark blue footer box with overlay text and buttons */}
        <div className="bg-blue-900 rounded-lg p-10 max-w-3xl mx-auto text-white font-serif mb-12">
          <h2 className="text-3xl font-extrabold mb-4">
            Ready to Land Your Dream Job?
          </h2>
          <p className="mb-6 text-lg">
            Join thousands of professionals who've transformed their careers with AI-powered resume tailoring
          </p>

          <div className="flex justify-center gap-6">
            <button
              onClick={() => setFooterDialogOpen(true)}
              className="bg-indigo-500 hover:bg-indigo-600 px-6 py-3 rounded font-semibold shadow-lg transition"
            >
              Start Free Trial
            </button>
            <button
              onClick={() => alert('Schedule Demo clicked')}
              className="border border-indigo-500 text-indigo-500 hover:bg-indigo-500 hover:text-white px-6 py-3 rounded font-semibold shadow-lg transition"
            >
              Schedule Demo
            </button>
          </div>
        </div>

        {/* Footer Dialog for free trial */}
        <Dialog open={footerDialogOpen} onOpenChange={setFooterDialogOpen}>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle>Enter Your Email</DialogTitle>
              <DialogDescription>
                We will send an OTP to your email for verification.
              </DialogDescription>
            </DialogHeader>

            <input
              type="email"
              placeholder="you@example.com"
              value={footerEmail}
              onChange={(e) => setFooterEmail(e.target.value)}
              className="w-full border border-gray-300 rounded px-4 py-2 mt-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <DialogFooter className="mt-6 flex justify-end gap-4">
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
              <Button
                onClick={() => {
                  alert('OTP sent to ' + footerEmail)
                  setFooterDialogOpen(false)
                  setFooterEmail('')
                }}
              >
                Send OTP
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        {/* Existing FAQ and copyright */}
        <section className="max-w-3xl mx-auto p-8">
          <h1 className="text-2xl font-bold mb-6">FAQ - Resume Tailor</h1>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>How does the Resume Tailor work?</AccordionTrigger>
              <AccordionContent>
                Paste your resume and job description, then click "Tailor My Resume". Our AI will generate a customized resume for you.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Can I upload my resume file?</AccordionTrigger>
              <AccordionContent>
                Yes, you can upload files like PDF or DOCX using the FileUpload component.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Is my data secure?</AccordionTrigger>
              <AccordionContent>
                Absolutely. We prioritize your privacy and do not store your resume data beyond the session.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        <div className="text-sm text-slate-500 mt-8">
          Made with ❤️ by You |{' '}
          <a
            href="https://www.linkedin.com/in/aleeza-mariam-8b12312a5/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-blue-600"
          >
            LinkedIn
          </a>{' '}
          |{' '}
          <a
            href="https://github.com/aleezamarriam3456/resume-tailor"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-blue-600"
          >
            GitHub
          </a>
        </div>
      </footer>
    </>
  )
}
