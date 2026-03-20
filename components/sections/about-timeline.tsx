"use client"

import { motion } from "framer-motion"
import { Calendar, Award, Star } from "lucide-react"
import { Reveal } from "@/components/ui/reveal"
import { GlassCard } from "@/components/ui/glass-card"

const timelineEvents = [
  {
    year: "1993",
    title: "Corporate Career Begins",
    description: "Started corporate journey with 20+ years of experience spanning across office assistant, customer service, research analyst and supervisory roles.",
    icon: Star
  },
  {
    year: "1998",
    title: "Soft Skills Training Expertise", 
    description: "Began specializing in soft skills training and leadership development, facilitating GNIIT students in Effective Communication and Personality Development and then further moved into the role of corporate trainer with organisations she later joined.",
    icon: Award
  },
  {
    year: "2013",
    title: "Family Sabbatical",
    description: "Chose to focus on family for over a decade, experiencing the challenges of career breaks firsthand.",
    icon: Calendar
  },
  {
    year: "2024",
    title: "The Comeback Journey",
    description: "Faced the challenge of returning to professional life with confidence and clarity after career break.",
    icon: Star
  },
  {
    year: "2025",
    title: "Founded The Comeback Code",
    description: "Created The Comeback Code to help professionals rediscover their confidence and excel in their careers.",
    icon: Award
  }
]

export function AboutTimeline() {
  return (
    <section className="py-16 md:py-24 bg-lavender-50">
      <div className="container mx-auto px-4 lg:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-playfair font-bold text-slate-800 mb-6">
              Anita&apos;s <span className="text-gradient">Journey</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              From corporate success to family sabbatical and back to professional excellence—here&apos;s 
              how Anita&apos;s personal experience drives her mission to help professionals shine again.
            </p>
          </div>
        </Reveal>

        <div className="max-w-4xl mx-auto">
          {timelineEvents.map((event, index) => {
            const IconComponent = event.icon
            return (
              <Reveal key={event.year} delay={index * 0.2}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative mb-12 last:mb-0"
                >
                  {/* Timeline Line */}
                  {index < timelineEvents.length - 1 && (
                    <div className="absolute left-6 top-16 w-0.5 h-20 bg-gradient-to-b from-amethyst-300 to-rose-300 hidden md:block" />
                  )}
                  
                  <GlassCard className="relative">
                    <div className="flex items-start space-x-6">
                      {/* Year & Icon */}
                      <div className="flex-shrink-0 text-center">
                        <div className="w-12 h-12 bg-gradient-to-br from-amethyst-500 to-rose-400 rounded-xl flex items-center justify-center mb-3">
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <div className="text-2xl font-bold text-amethyst-600 font-playfair">
                          {event.year}
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1">
                        <h3 className="text-xl md:text-2xl font-playfair font-bold text-slate-800 mb-3">
                          {event.title}
                        </h3>
                        <p className="text-slate-600 leading-relaxed">
                          {event.description}
                        </p>
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
} 