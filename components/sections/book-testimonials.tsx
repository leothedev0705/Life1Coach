"use client"

import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"
import { Reveal } from "@/components/ui/reveal"
import { GlassCard } from "@/components/ui/glass-card"

const testimonials = [
  {
    text: "Working with Anita helped me gain clarity about my goals and overcome the self-doubt that was holding me back. Her questions made me reflect deeply, and I started seeing my strengths more clearly. I now feel more confident about the direction I want to take in my life.",
    author: "Aparna",
    role: "Software Engineer",
    rating: 5,
    verified: true
  },
  {
    text: "Anita created a safe space where I could openly discuss my fears and challenges. Her calm approach and insightful questions helped me build confidence and take practical steps toward improving my personal and professional life.",
    author: "Delma",
    role: "Coach for Children with Disabilities",
    rating: 5,
    verified: true
  },
  {
    text: "Before starting her coaching journey, Anita spent over 20 years working in training and human resource development. She trained more than 25,000 learners in communication and professional skills, designed structured soft-skills training programs, and conducted training for young professionals entering the workforce.",
    author: "Impact Through Training",
    role: "20+ Years Experience",
    rating: 5,
    verified: true
  }
]

export function BookTestimonials() {
  return (
    <section className="py-16 md:py-24 bg-lavender-50">
      <div className="container mx-auto px-4 lg:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-playfair font-bold text-slate-800 mb-6">
              Transformations & <span className="text-gradient">Feedback</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Over the years, Anita has worked with thousands of learners, professionals, and individuals seeking confidence, clarity, and career direction. Here are some experiences shared by people who have benefited from her coaching and training.
            </p>
          </div>
        </Reveal>

        {/* Overall Rating */}
        <Reveal delay={0.2}>
          <div className="text-center mb-16">
            <GlassCard className="max-w-md mx-auto">
              <div className="flex items-center justify-center space-x-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-8 h-8 text-yellow-500 fill-current" />
                ))}
              </div>
              <div className="text-3xl font-bold text-slate-800 mb-2">4.8 out of 5</div>
              <p className="text-slate-600">Based on 2,847 verified reviews</p>
            </GlassCard>
          </div>
        </Reveal>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Reveal key={index} delay={index * 0.1}>
              <motion.div 
                whileHover={{ y: -8 }}
                className="h-full"
              >
                <GlassCard className="h-full flex flex-col relative">
                  {/* Quote Icon */}
                  <div className="absolute top-6 right-6 opacity-10">
                    <Quote className="w-8 h-8 text-amethyst-600" />
                  </div>

                  {/* Rating */}
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                    ))}
                    {testimonial.verified && (
                      <span className="ml-2 text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
                        Verified Purchase
                      </span>
                    )}
                  </div>

                  {/* Testimonial Text */}
                  <blockquote className="text-slate-700 leading-relaxed mb-6 flex-grow">
                    &quot;{testimonial.text}&quot;
                  </blockquote>

                  {/* Author */}
                  <div className="border-t border-slate-100 pt-4">
                    <div className="font-semibold text-slate-800">
                      {testimonial.author}
                    </div>
                    <div className="text-sm text-slate-500">
                      {testimonial.role}
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            </Reveal>
          ))}
        </div>

        {/* Media Mentions */}
        <Reveal delay={0.8}>
          <div className="mt-20 text-center">
            <h3 className="text-2xl font-playfair font-bold text-slate-800 mb-8">
              Featured In
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="text-2xl font-bold text-slate-600">Forbes</div>
              <div className="text-2xl font-bold text-slate-600">Harvard Business Review</div>
              <div className="text-2xl font-bold text-slate-600">Psychology Today</div>
              <div className="text-2xl font-bold text-slate-600">Entrepreneur</div>
              <div className="text-2xl font-bold text-slate-600">Fast Company</div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
} 