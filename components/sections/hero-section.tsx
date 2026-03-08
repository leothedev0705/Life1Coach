"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Reveal } from "@/components/ui/reveal"

export function HeroSection() {
  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-lavender-50"
    >
      {/* Professional Background Pattern */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: 'url("/assets/photos/coaching_hero_workspace.png")' }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-cc-blue-royal/5 via-transparent to-amethyst-500/5" />
        
        {/* Subtle geometric shapes */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-20 left-20 w-64 h-64 bg-cc-blue-royal/5 rounded-full blur-3xl hidden lg:block"
        />
        <motion.div
          animate={{
            y: [0, 30, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-20 right-20 w-96 h-96 bg-amethyst-500/5 rounded-full blur-3xl hidden lg:block"
        />
      </div>

          {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20 sm:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center text-left">
          <div>
            <Reveal>
              <motion.h1 
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-playfair font-bold mb-4 sm:mb-6 leading-tight"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span className="text-gradient break-words drop-shadow-sm">The Comeback Code</span>
                <br />
                <span className="text-slate-900 break-words drop-shadow-sm">Empowering Professionals</span>
              </motion.h1>
            </Reveal>

            <Reveal delay={0.4}>
              <motion.div 
                className="mb-6 sm:mb-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <p className="text-lg sm:text-xl md:text-2xl font-semibold text-slate-800 mb-4 tracking-wide">
                  Confidence <span className="text-cc-blue-royal mx-2">|</span> Growth <span className="text-cc-blue-royal mx-2">|</span> Success
                </p>
                <p className="text-base sm:text-lg md:text-xl text-slate-700 leading-relaxed font-medium">
                  Rediscover your professional power and excel in your career comeback journey with personalized soft skills training.
                </p>
              </motion.div>
            </Reveal>

            <Reveal delay={0.6}>
              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-start items-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <Link href="/programs" className="w-full sm:w-auto">
                  <Button 
                    variant="gradient" 
                    size="xl"
                    className="group w-full sm:w-auto min-h-[48px] text-sm sm:text-base"
                  >
                    <span className="mr-2 break-words">Start Your Journey</span>
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </Button>
                </Link>
                <Link href="/about" className="w-full sm:w-auto">
                  <Button 
                    variant="glass" 
                    size="xl"
                    className="w-full sm:w-auto min-h-[48px] text-sm sm:text-base"
                  >
                    Meet Anita
                  </Button>
                </Link>
              </motion.div>
            </Reveal>

            {/* Stats */}
            <Reveal delay={1.0}>
              <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-6">
                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 border border-slate-200/50 shadow-sm">
                  <div className="text-2xl font-bold text-cc-blue-royal">500+</div>
                  <div className="text-xs text-slate-600 font-semibold uppercase tracking-wider">Clients</div>
                </div>
                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 border border-slate-200/50 shadow-sm">
                  <div className="text-2xl font-bold text-cc-blue-royal">20+</div>
                  <div className="text-xs text-slate-600 font-semibold uppercase tracking-wider">Years Exp</div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Portrait Side */}
          <Reveal delay={0.8}>
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 1.2 }}
                className="relative z-10"
              >
                <div className="aspect-[4/5] relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white">
                  <Image
                    src="/assets/photos/anita_portrait_main.jpg"
                    alt="Anita D'Souza - Career Comeback Coach"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
                </div>
                
                {/* Floating Elements */}
                <motion.div
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 hidden md:block"
                >
                  <p className="text-amethyst-600 font-bold text-lg leading-tight">Expert Soft Skills<br /><span className="text-slate-800 text-sm font-medium">Training & Coaching</span></p>
                </motion.div>
              </motion.div>

              {/* Decorative rings */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-cc-blue-royal/10 rounded-full -z-10" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] border border-cc-blue-royal/5 rounded-full -z-10" />
            </div>
          </Reveal>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-cc-blue-royal/60 rounded-full flex justify-center backdrop-blur-sm bg-white/20">
          <motion.div
            className="w-1.5 h-3 bg-cc-blue-royal rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  )
} 