"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Award, Users, Target, Heart } from "lucide-react"
import { Reveal } from "@/components/ui/reveal"
import { GlassCard } from "@/components/ui/glass-card"

const stats = [
  { icon: Users, value: "500+", label: "Professionals Helped" },
  { icon: Award, value: "20+", label: "Years Corporate Experience" },
  { icon: Target, value: "15+", label: "Years Soft Skills Training" },
  { icon: Heart, value: "100%", label: "Dedicated to Your Success" }
]

export function AboutHero() {
  return (
    <section className="pt-20 sm:pt-24 md:pt-32 pb-12 sm:pb-16 md:pb-24 bg-gradient-to-br from-lavender-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-20 items-center">
          {/* Portrait Side */}
          <Reveal>
            <div className="relative">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
                <div className="aspect-[4/5] bg-gradient-to-br from-amethyst-100 via-white to-rose-100 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl relative max-w-full">
                  <Image
                    src="/assets/photos/main3.jpeg"
                    alt="Anita D&apos;Souza - Life & Success Coach"
                    fill
                    className="object-cover"
                    priority
                    quality={90}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                  />
                </div>
                
                {/* Floating Quote */}
                <GlassCard className="absolute -right-4 sm:-right-6 top-8 max-w-xs p-4 sm:p-6 hidden lg:block">
                  <p className="text-xs sm:text-sm italic text-slate-700 mb-2 sm:mb-3">
                    &quot;At The Comeback Code, every client is more than a learner—they&apos;re a story of resilience, determination, and transformation.&quot;
                  </p>
                  <div className="text-xs font-semibold text-amethyst-600">— Anita J. D&apos;Souza</div>
                </GlassCard>
              </motion.div>
            </div>
          </Reveal>

          {/* Content Side */}
          <Reveal delay={0.3}>
            <div className="space-y-6 sm:space-y-8">
              <div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-playfair font-bold text-slate-800 mb-4 sm:mb-6 leading-tight px-2 sm:px-0">
                  Empowering Professionals to <span className="text-gradient break-words">Shine Again</span>
                </h1>
                <div className="space-y-4 sm:space-y-6 text-base sm:text-lg text-slate-600 leading-relaxed px-2 sm:px-0">
                  <p>
                    Life doesn&apos;t always go as planned, and career journeys can take unexpected turns. 
                    Whether it&apos;s a sabbatical, career break, or a challenging phase, many professionals 
                    feel invisible, stuck, or unsure about their next step.
                  </p>
                  <p>
                    That&apos;s where The Comeback Code comes in. We help you rediscover your confidence, 
                    sharpen your skills, and reclaim your professional power. Through personalized coaching, 
                    practical strategies, and guidance rooted in real-world experience, we equip you with 
                    the tools to not just return to the workforce—but to thrive and stand out.
                  </p>
                  <p>
                    Our programs focus on in-demand soft skills like communication, emotional intelligence, 
                    adaptability, leadership, and teamwork. We don&apos;t just teach skills; we help you apply 
                    them in real-life situations, gain visibility, and create the career growth you deserve.
                  </p>
                </div>
              </div>

              {/* Core Values */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 px-2 sm:px-0">
                <div className="space-y-2">
                  <h3 className="font-semibold text-base sm:text-lg text-slate-800">Confidence</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Building unshakeable self-belief and professional presence that opens doors.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-base sm:text-lg text-slate-800">Growth</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Developing essential soft skills that drive career advancement and success.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Stats Section */}
        <Reveal delay={0.6}>
          <div className="mt-12 sm:mt-16 md:mt-20 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <GlassCard className="text-center p-4 sm:p-6">
                    <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-amethyst-100 mb-3 sm:mb-4">
                      <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 text-amethyst-600" />
                    </div>
                    <div className="text-2xl sm:text-3xl font-bold text-amethyst-600 mb-1 sm:mb-2">
                      {stat.value}
                    </div>
                    <div className="text-xs sm:text-sm text-slate-600 font-medium leading-tight px-1">
                      {stat.label}
                    </div>
                  </GlassCard>
                </motion.div>
              )
            })}
          </div>
        </Reveal>
      </div>
    </section>
  )
} 