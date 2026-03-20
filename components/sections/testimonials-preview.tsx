"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Star, Quote } from "lucide-react"
import { Reveal } from "@/components/ui/reveal"
import { GlassCard } from "@/components/ui/glass-card"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    name: "Aparna",
    role: "Software Engineer",
    image: "👩‍💻",
    rating: 5,
    text: "Working with Anita helped me gain clarity about my goals and overcome the self-doubt that was holding me back. Her questions made me reflect deeply, and I started seeing my strengths more clearly. I now feel more confident about the direction I want to take in my life.",
    achievement: "The coaching sessions helped me understand myself in a completely new way."
  },
  {
    name: "Delma",
    role: "Coach for Children with Disabilities",
    image: "👩‍🏫",
    rating: 5,
    text: "Anita created a safe space where I could openly discuss my fears and challenges. Her calm approach and insightful questions helped me build confidence and take practical steps toward improving my personal and professional life.",
    achievement: "I felt heard, supported, and guided."
  },
  {
    name: "Impact Through Training",
    role: "20+ Years Experience",
    image: "🏆",
    rating: 5,
    text: "Before starting her coaching journey, Anita spent over 20 years working in training and human resource development. She trained more than 25,000 learners in communication and professional skills, designed structured soft-skills training programs, and conducted training for young professionals entering the workforce.",
    achievement: "Trained 25,000+ Learners"
  }
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center space-x-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-5 h-5 ${
            i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
          }`}
        />
      ))}
    </div>
  )
}

export function TestimonialsPreview() {
  return (
    <section className="py-16 md:py-24 bg-white">
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

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12">
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.name} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -8 }}
                className="h-full"
              >
                <GlassCard className="h-full flex flex-col">
                  {/* Quote Icon */}
                  <div className="mb-4">
                    <Quote className="w-8 h-8 text-amethyst-400" />
                  </div>

                  {/* Testimonial Text */}
                  <blockquote className="text-slate-700 leading-relaxed mb-6 flex-grow italic">
                    &quot;{testimonial.text}&quot;
                  </blockquote>

                  {/* Achievement */}
                  <div className="mb-4 p-3 bg-amethyst-50 rounded-2xl">
                    <div className="text-sm font-semibold text-amethyst-700">
                      🎯 {testimonial.achievement}
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="mb-4">
                    <StarRating rating={testimonial.rating} />
                  </div>

                  {/* Author */}
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-amethyst-100 to-rose-100 rounded-full flex items-center justify-center text-2xl">
                      {testimonial.image}
                    </div>
                    <div>
                      <div className="font-semibold text-slate-800">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-slate-600">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            </Reveal>
          ))}
        </div>

        {/* CTA */}
        <Reveal delay={0.4}>
          <div className="text-center">
            <GlassCard className="max-w-2xl mx-auto text-center">
              <h3 className="text-2xl font-playfair font-bold text-slate-800 mb-4">
                Ready to Write Your Success Story?
              </h3>
              <p className="text-slate-600 mb-6">
                Join hundreds of successful individuals who have transformed their lives 
                through our proven coaching programs.
              </p>
              <Link href="/contact">
                <Button variant="gradient" size="lg">
                  Start Your Transformation
                </Button>
              </Link>
            </GlassCard>
          </div>
        </Reveal>
      </div>
    </section>
  )
} 