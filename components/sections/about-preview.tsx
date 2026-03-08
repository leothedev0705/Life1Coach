"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Reveal } from "@/components/ui/reveal"
import { GlassCard } from "@/components/ui/glass-card"

export function AboutPreview() {
  return (
    <section className="py-12 sm:py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-slate-800 mb-4 sm:mb-6 px-2">
              Meet <span className="text-gradient">Anita D&apos;Souza</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto px-4">
              Your trusted partner in transformation, helping ambitious individuals 
              unlock their potential and create extraordinary lives.
            </p>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-20 items-center">
          {/* Portrait Side */}
          <Reveal delay={0.2}>
            <div className="relative">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
                <div className="aspect-[4/5] bg-gradient-to-br from-amethyst-100 to-rose-100 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl relative max-w-full">
                  <Image
                    src="/assets/photos/anita_portrait_about.jpg"
                    alt="Anita D&apos;Souza - Life & Success Coach"
                    fill
                    className="object-cover"
                    priority
                    quality={90}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                  />
                </div>
                
                {/* Floating Elements - Hidden on mobile */}
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="hidden sm:block absolute -top-4 -right-4 w-12 sm:w-16 h-12 sm:h-16 bg-amethyst-500/20 rounded-full blur-sm"
                />
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="hidden sm:block absolute -bottom-6 -left-6 w-16 sm:w-24 h-16 sm:h-24 bg-rose-400/20 rounded-full blur-md"
                />
              </motion.div>
            </div>
          </Reveal>

          {/* Content Side */}
          <Reveal delay={0.4}>
            <div className="space-y-6 sm:space-y-8">
              <div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-playfair font-semibold text-slate-800 mb-4 sm:mb-6 px-2 sm:px-0">
                  Transforming Lives Through Purpose-Driven Coaching
                </h3>
                <div className="space-y-3 sm:space-y-4 text-base sm:text-lg text-slate-600 leading-relaxed px-2 sm:px-0">
                  <p>
                    With over a decade of experience in personal development, I&apos;ve dedicated 
                    my life to helping extraordinary individuals like you break through 
                    limitations and create lives of purpose, passion, and prosperity.
                  </p>
                  <p>
                    My approach combines proven psychological principles with intuitive 
                    coaching methods, creating a unique framework that addresses both 
                    your inner world and external goals.
                  </p>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-6">
                <div className="text-center">
                  <motion.div 
                    className="text-2xl sm:text-3xl font-bold text-amethyst-600 mb-1 sm:mb-2"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    12+
                  </motion.div>
                  <div className="text-xs sm:text-sm text-slate-600">Years Coaching</div>
                </div>
                <div className="text-center">
                  <motion.div 
                    className="text-2xl sm:text-3xl font-bold text-amethyst-600 mb-1 sm:mb-2"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    500+
                  </motion.div>
                  <div className="text-xs sm:text-sm text-slate-600">Lives Impacted</div>
                </div>
                <div className="text-center">
                  <motion.div 
                    className="text-2xl sm:text-3xl font-bold text-amethyst-600 mb-1 sm:mb-2"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    98%
                  </motion.div>
                  <div className="text-xs sm:text-sm text-slate-600">Success Rate</div>
                </div>
              </div>

              {/* CTA */}
              <div className="pt-4 sm:pt-6">
                <Link href="/about" className="block w-full sm:w-auto">
                  <Button variant="gradient" size="lg" className="w-full sm:w-auto min-h-[48px]">
                    My Story
                  </Button>
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
} 