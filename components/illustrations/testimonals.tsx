"use client";

import { Star } from "lucide-react";
import React from "react";

export default function TestimonialSection() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Software Engineer",
      company: "TechCorp",
      avatar: "SJ",
      content:
        "ResumeCraft AI helped me land my dream job at a Fortune 500 company. The AI tailoring was spot-on and highlighted exactly what the recruiters wanted to see.",
      rating: 5,
      color: "from-pink-400 to-purple-600",
    },
    {
      name: "Michael Chen",
      role: "Product Manager",
      company: "StartupXYZ",
      avatar: "MC",
      content:
        "I applied to 12 jobs using tailored resumes from this platform and got 8 interviews. The time savings alone made it worth every penny.",
      rating: 5,
      color: "from-blue-400 to-indigo-600",
    },
    {
      name: "Emily Rodriguez",
      role: "UX Designer",
      company: "DesignStudio",
      avatar: "ER",
      content:
        "The AI understood the nuances of design roles perfectly. My tailored resume showcased my skills in exactly the right way for each position.",
      rating: 5,
      color: "from-green-400 to-teal-600",
    },
  ];

  const trustBadges = [
    { text: "10,000+ resumes tailored", color: "bg-green-500" },
    { text: "95% success rate", color: "bg-blue-500" },
    { text: "Trusted by professionals", color: "bg-purple-500" },
  ];

  return (
    <section
      aria-label="Testimonials and Success Stories"
      className="py-20 bg-gradient-to-br from-slate-50 to-gray-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <Star className="h-8 w-8 text-yellow-500 mr-2" aria-hidden="true" />
            <span className="text-primary font-semibold">Success Stories</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Users Say
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Join thousands of professionals who've transformed their job search
            with AI-powered resume tailoring.
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <article
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 relative group hover:shadow-xl transition"
            >
              {/* Quote symbol */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg" aria-hidden="true">
                  &ldquo;
                </span>
              </div>

              {/* Stars */}
              <div className="flex items-center mb-4" aria-label={`${t.rating} star rating`}>
                {[...Array(t.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-current text-yellow-500"
                    aria-hidden="true"
                  />
                ))}
              </div>

              {/* Testimonial Content */}
              <blockquote className="text-gray-700 mb-6 leading-relaxed">
                {t.content}
              </blockquote>

              {/* Author Info */}
              <footer className="flex items-center">
                <div
                  className={`w-12 h-12 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white font-bold text-sm mr-4 select-none`}
                >
                  {t.avatar}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{t.name}</p>
                  <p className="text-sm text-gray-600">
                    {t.role} at {t.company}
                  </p>
                </div>
              </footer>
            </article>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-16 text-center">
          <div className="flex flex-wrap items-center justify-center gap-6 opacity-70">
            {trustBadges.map((badge, i) => (
              <div key={i} className="flex items-center">
                <div
                  className={`w-6 h-6 ${badge.color} rounded-full flex items-center justify-center mr-2 select-none`}
                  aria-hidden="true"
                >
                  <span className="text-white text-xs">✓</span>
                </div>
                <span className="text-sm text-gray-600">{badge.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
