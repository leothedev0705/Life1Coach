"use client"

import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"
import { Reveal } from "@/components/ui/reveal"
import { GlassCard } from "@/components/ui/glass-card"

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

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-12 sm:py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-slate-800 mb-4 sm:mb-6 px-2">
              Transformations & <span className="text-gradient">Feedback</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto px-4">
              Over the years, Anita has worked with thousands of learners, professionals, and individuals seeking confidence, clarity, and career direction. Here are some experiences shared by people who have benefited from her coaching and training.
            </p>
          </div>
        </Reveal>

        {/* Testimonials Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.name} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -8 }}
                className="h-full"
              >
                <GlassCard className="h-full flex flex-col p-4 sm:p-6">
                  {/* Quote Icon */}
                  <div className="mb-3 sm:mb-4">
                    <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-amethyst-400" />
                  </div>

                  {/* Testimonial Text */}
                  <blockquote className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4 sm:mb-6 flex-grow italic">
                    &quot;{testimonial.text}&quot;
                  </blockquote>

                  {/* Achievement */}
                  <div className="mb-3 sm:mb-4 p-2 sm:p-3 bg-amethyst-50 rounded-xl sm:rounded-2xl">
                    <div className="text-xs sm:text-sm font-semibold text-amethyst-700">
                      🎯 {testimonial.achievement}
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="mb-3 sm:mb-4">
                    <StarRating rating={testimonial.rating} />
                  </div>

                  {/* Author */}
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-amethyst-100 to-rose-100 rounded-full flex items-center justify-center text-xl sm:text-2xl flex-shrink-0">
                      {testimonial.image}
                    </div>
                    <div className="min-w-0">
                      <div className="font-semibold text-sm sm:text-base text-slate-800 truncate">
                        {testimonial.name}
                      </div>
                      <div className="text-xs sm:text-sm text-slate-600 truncate">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            </Reveal>
          ))}
        </div>

        {/* Bottom Stats */}
        <Reveal delay={0.6}>
          <div className="mt-10 sm:mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 max-w-4xl mx-auto px-4">
            <div className="text-center">
              <motion.div 
                className="text-2xl sm:text-3xl md:text-4xl font-bold text-amethyst-600 mb-1 sm:mb-2"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                500+
              </motion.div>
              <div className="text-xs sm:text-sm text-slate-600">Happy Clients</div>
            </div>
            <div className="text-center">
              <motion.div 
                className="text-2xl sm:text-3xl md:text-4xl font-bold text-amethyst-600 mb-1 sm:mb-2"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              >
                98%
              </motion.div>
              <div className="text-xs sm:text-sm text-slate-600">Success Rate</div>
            </div>
            <div className="text-center">
              <motion.div 
                className="text-2xl sm:text-3xl md:text-4xl font-bold text-amethyst-600 mb-1 sm:mb-2"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              >
                4.9/5
              </motion.div>
              <div className="text-xs sm:text-sm text-slate-600">Average Rating</div>
            </div>
            <div className="text-center">
              <motion.div 
                className="text-2xl sm:text-3xl md:text-4xl font-bold text-amethyst-600 mb-1 sm:mb-2"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
              >
                12+
              </motion.div>
              <div className="text-xs sm:text-sm text-slate-600">Years Experience</div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
} 