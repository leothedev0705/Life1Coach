"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { User, Users, Building2 } from "lucide-react"
import { Reveal } from "@/components/ui/reveal"
import { GlassCard } from "@/components/ui/glass-card"
import { Button } from "@/components/ui/button"

const programs = [
  {
    title: "1-on-1 Transformation",
    subtitle: "Personal Coaching",
    icon: User,
    price: "Rs. 10k (Regular - 4 sessions) / Rs. 16k (VIP - 8 sessions)",
    description: "Personalized coaching sessions designed to unlock your unique potential and accelerate your personal growth journey.",
    color: "amethyst",
    slug: "one-on-one-transformation",
    popular: true
  },
  {
    title: "Corporate Workshops",
    subtitle: "Team Development",
    icon: Building2,
    price: "Custom (INR)",
    description: "Transform your organization with powerful workshops focused on leadership development and team synergy.",
    color: "amethyst",
    slug: "corporate-workshops"
  }
]

export function ProgramsPreview() {
  return (
    <section className="py-16 md:py-24 bg-lavender-50">
      <div className="container mx-auto px-4 lg:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-playfair font-bold text-slate-800 mb-6">
              Signature <span className="text-gradient">Programs</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Choose the perfect pathway for your transformation journey. 
              Each program is carefully designed to deliver extraordinary results.
            </p>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12">
          {programs.map((program, index) => {
            const IconComponent = program.icon
            return (
              <Reveal key={program.title} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="relative h-full"
                >
                  {program.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                      <div className="bg-gradient-to-r from-amethyst-500 to-rose-400 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <Link href={`/programs/${program.slug}`}>
                    <GlassCard 
                      className="h-full flex flex-col relative overflow-hidden cursor-pointer"
                      gradient={program.popular}
                    >
                      {/* Header */}
                      <div className="text-center mb-6">
                        <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4 ${
                          program.color === 'amethyst' ? 'bg-amethyst-100' : 'bg-rose-100'
                        }`}>
                          <IconComponent className={`w-8 h-8 ${
                            program.color === 'amethyst' ? 'text-amethyst-600' : 'text-rose-600'
                          }`} />
                        </div>
                        <h3 className="text-2xl font-playfair font-bold text-slate-800 mb-2">
                          {program.title}
                        </h3>
                        <p className="text-lg text-slate-600 mb-4">{program.subtitle}</p>
                        <div className={`text-2xl font-bold mb-2 ${
                          program.color === 'amethyst' ? 'text-amethyst-600' : 'text-rose-600'
                        }`}>
                          {program.price}
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-slate-600 mb-6 text-center leading-relaxed flex-grow">
                        {program.description}
                      </p>

                      {/* Learn More */}
                      <div className="text-center">
                        <span className={`inline-flex items-center text-sm font-medium ${
                          program.color === 'amethyst' ? 'text-amethyst-600' : 'text-rose-600'
                        }`}>
                          Learn More →
                        </span>
                      </div>
                    </GlassCard>
                  </Link>
                </motion.div>
              </Reveal>
            )
          })}
        </div>

        {/* View All Programs CTA */}
        <Reveal delay={0.4}>
          <div className="text-center">
            <Link href="/programs">
              <Button variant="gradient" size="xl">
                View All Programs
              </Button>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
} 