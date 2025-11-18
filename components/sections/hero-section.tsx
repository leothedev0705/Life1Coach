"use client"

import { motion } from "framer-motion"
import Link from "next/link"
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
        {/* Subtle gradient overlay */}
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
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 py-20 sm:py-24">
        <Reveal>
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-playfair font-bold mb-4 sm:mb-6 px-2 leading-tight"
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
            className="mb-6 sm:mb-8 max-w-3xl mx-auto px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-slate-800 mb-4 tracking-wide">
              <span className="block sm:inline">Confidence</span> 
              <span className="hidden sm:inline mx-3 text-cc-blue-royal">|</span> 
              <span className="block sm:inline">Growth</span> 
              <span className="hidden sm:inline mx-3 text-cc-blue-royal">|</span> 
              <span className="block sm:inline">Success</span>
            </p>
            <p className="text-base sm:text-lg md:text-xl text-slate-700 leading-relaxed font-medium">
              Rediscover your professional power and excel in your career comeback journey.
            </p>
          </motion.div>
        </Reveal>

        <Reveal delay={0.6}>
          <motion.div
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4"
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
                <span className="mr-2 break-words">Start Your Comeback Journey</span>
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="hidden sm:inline"
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
                Learn More
              </Button>
            </Link>
          </motion.div>
        </Reveal>

        {/* Professional Stats */}
        <Reveal delay={1.0}>
          <motion.div 
            className="mt-12 sm:mt-16 grid grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-12 max-w-3xl mx-auto px-4"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <div className="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-lg border border-slate-200/50">
              <motion.div 
                className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-cc-blue-royal to-amethyst-600 bg-clip-text text-transparent mb-2"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                500+
              </motion.div>
              <div className="text-sm sm:text-base text-slate-700 font-semibold">Professionals Helped</div>
            </div>
            <div className="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-lg border border-slate-200/50">
              <motion.div 
                className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-cc-blue-royal to-amethyst-600 bg-clip-text text-transparent mb-2"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              >
                20+
              </motion.div>
              <div className="text-sm sm:text-base text-slate-700 font-semibold">Years Experience</div>
            </div>
            <div className="text-center col-span-2 md:col-span-1 bg-white/60 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-lg border border-slate-200/50">
              <motion.div 
                className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-cc-blue-royal to-amethyst-600 bg-clip-text text-transparent mb-2"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              >
                15+
              </motion.div>
              <div className="text-sm sm:text-base text-slate-700 font-semibold">Years Training</div>
            </div>
          </motion.div>
        </Reveal>
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