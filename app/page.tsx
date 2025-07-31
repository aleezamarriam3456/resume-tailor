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
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert'
import { AspectRatio } from '@/components/ui/aspect-ratio'

import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'


import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { LoadingSpinner } from '@/components/ui/loading-spinner'
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogFooter, DialogTitle, DialogDescription, DialogClose } from '@/components/ui/dialog'
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

export default function ResumeTailorPage() {
  const [resume, setResume] = useState('')
  const [jobDesc, setJobDesc] = useState('')
  const [tailoredResume, setTailoredResume] = useState('')
  const [loading, setLoading] = useState(false)
  const [dialogOpen, setDialogOpen] = useState(false)

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
        <h1 className="font-extrabold text-xl text-blue-700">Resume Tailor</h1>

        <div className="flex items-center space-x-4">
          <button className="text-blue-600 border border-blue-600 px-4 py-1 rounded hover:bg-blue-600 hover:text-white transition">
            Login
          </button>

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
        </div>
      </nav>

      {/* Main Content */}
      <main className="min-h-screen bg-gradient-to-br from-white to-slate-100 py-12 px-6 flex flex-col items-center max-w-7xl mx-auto">
        {/* Hero Illustration */}
        <HeroIllustration className="mb-12" />

        {/* Header */}
        <header className="max-w-3xl text-center mb-12 mt-12">
          <h2 className="text-5xl font-extrabold text-blue-700 mb-4 drop-shadow-md">
            Tailor Your Resume Effortlessly
          </h2>
          <p className="text-lg text-slate-700">
            Paste your resume and job description, then let AI craft the perfect tailored resume for you.
          </p>
        </header>

        {/* Resume and Job Desc Inputs */}
        <Card className="max-w-4xl w-full p-8 mb-12 shadow-lg">
          <div className="grid md:grid-cols-2 gap-8">
            <section>
              <label
                htmlFor="resume"
                className="mb-2 font-semibold text-slate-700 block"
              >
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
              <label
                htmlFor="jobDesc"
                className="mb-2 font-semibold text-slate-700 block"
              >
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

        {/* Tailored Resume Display */}
        {tailoredResume && (
          <Card className="max-w-3xl bg-white rounded-2xl p-8 shadow-lg border border-slate-200 whitespace-pre-wrap text-slate-800">
            <h3 className="text-2xl font-semibold mb-4 text-blue-700">
              🎉 Tailored Resume
            </h3>
            <pre>{tailoredResume}</pre>
          </Card>
        )}

        {/* FAQ Section */}
        <section className="max-w-3xl mx-auto p-8 mt-16 mb-16 w-full">
          <h1 className="text-2xl font-bold mb-6 text-center">FAQ - Resume Tailor</h1>

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

        {/* Alert Dialog */}
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <button className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">
              Delete Item
            </button>
          </AlertDialogTrigger>

          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. Do you want to continue?
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction>Delete</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>

        {/* Example Alert */}
        <Alert variant="destructive" className="mb-4 mt-12 max-w-3xl">
          <AlertTitle>Warning!</AlertTitle>
          <AlertDescription>
            This action cannot be undone.
          </AlertDescription>
        </Alert>

        {/* Dialog example */}
        <div className="mb-12">
          <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
            <DialogTrigger asChild>
              <Button variant="outline">Open Help Dialog</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>How to Use Resume Tailor</DialogTitle>
                <DialogDescription>
                  Paste your resume and job description, then click &quot;Tailor My Resume&quot; to get a customized version.
                </DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <DialogClose asChild>
                  <Button>Close</Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>


        {/* Tutorial Video Section */}
<section className="max-w-3xl w-full mb-12">
  <h2 className="text-2xl font-bold mb-4 text-blue-700 text-center">
    How to Use Resume Tailor
  </h2>
  <AspectRatio ratio={16 / 9} className="rounded-lg overflow-hidden shadow-lg">
    <iframe
      src="https://www.youtube.com/embed/dQw4w9WgXcQ"
      title="Resume Tailor Tutorial"
      allowFullScreen
      className="w-full h-full"
    />
  </AspectRatio>
</section>

        <header className="max-w-3xl text-center mb-12 mt-12 flex items-center justify-center gap-4">
        <Avatar>
          <AvatarImage src="/avatar.jpg" alt="User Avatar" />
          <AvatarFallback>RT</AvatarFallback>
        </Avatar>
        <h2 className="text-5xl font-extrabold text-blue-700 mb-4 drop-shadow-md">
          Tailor Your Resume Effortlessly
        </h2>
      </header>


        {/* Feature Icon */}
        <section className="max-w-7xl w-full mb-12 flex justify-center">
          <FeatureIcon type="ai" className="w-20 h-20" />
        </section>

        {/* Process Steps */}
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

        {/* Dashboard Preview */}
        <section className="max-w-7xl w-full mb-12">
          <DashboardPreview />
        </section>

        {/* Testimonials */}
        <section className="max-w-7xl w-full mb-12">
          <TestimonialSection />
        </section>
      </main>

      {/* Footer */}
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
