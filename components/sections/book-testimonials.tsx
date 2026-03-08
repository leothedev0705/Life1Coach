"use client"

import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"
import { Reveal } from "@/components/ui/reveal"
import { GlassCard } from "@/components/ui/glass-card"

const testimonials = [
  {
    text: "This book completely transformed my perspective on what's possible. Anita's framework helped me break through barriers I didn't even know existed. Within 6 months, I doubled my income and found the confidence to start my dream business.",
    author: "Priya Sharma",
    role: "Entrepreneur & Business Owner",
    rating: 5,
    verified: true
  },
  {
    text: "I've read countless self-help books, but none delivered results like this one. The exercises are practical, the insights are profound, and the transformation is real. This book doesn't just inspire—it creates lasting change.",
    author: "Anjali Iyer",
    role: "Executive Director",
    rating: 5,
    verified: true
  },
  {
    text: "After feeling stuck for years, this book gave me the clarity and tools I needed to redesign my life. The step-by-step approach made transformation feel achievable rather than overwhelming. Best investment I've ever made.",
    author: "Dr. Kavita Rao",
    role: "Medical Professional",
    rating: 5,
    verified: true
  },
  {
    text: "Anita's writing style is engaging and her strategies are backed by real science. This isn't fluffy motivation—it's a practical blueprint for creating the life you want. Every chapter builds on the last perfectly.",
    author: "Sunita Das",
    role: "Technology Leader",
    rating: 5,
    verified: true
  },
  {
    text: "As someone who struggled with self-doubt my entire career, this book was a game-changer. The confidence-building techniques alone are worth the price. I finally feel ready to pursue the leadership role I've always wanted.",
    author: "Sneha Gupta",
    role: "Marketing Manager",
    rating: 5,
    verified: true
  },
  {
    text: "This book should be required reading for anyone serious about personal growth. Anita takes complex psychological concepts and makes them accessible and actionable. The results speak for themselves—my life is unrecognizable in the best way.",
    author: "Rekha Nair",
    role: "Financial Advisor",
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
              What Readers Are <span className="text-gradient">Saying</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Real transformations from real people who applied the breakthrough strategies 
              in this life-changing book.
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