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
      className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/assets/photos/main.jpg"
          alt="The Comeback Code - Empowering Professionals"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-amethyst-600/80 via-amethyst-500/70 to-rose-400/80" />
        {/* Floating Shapes */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            y: [0, 30, 0],
            rotate: [0, -180, -360],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-20 right-20 w-48 h-48 bg-white/10 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            y: [0, -15, 0],
            x: [0, 15, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 right-1/4 w-24 h-24 bg-white/10 rounded-full blur-lg"
        />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 py-20 sm:py-24">
        <Reveal>
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-playfair font-bold text-slate-800 mb-4 sm:mb-6 px-2"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-gradient break-words">The Comeback Code</span>
            <br />
            <span className="text-slate-700 break-words">Empowering Professionals</span>
          </motion.h1>
        </Reveal>

        <Reveal delay={0.4}>
          <motion.p 
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-600 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <span className="block sm:inline">Confidence</span> <span className="hidden sm:inline">|</span> <span className="block sm:inline">Growth</span> <span className="hidden sm:inline">|</span> <span className="block sm:inline">Success</span>
            <br />
            <span className="text-sm sm:text-base lg:text-lg text-slate-500 mt-2 block px-2">
              Rediscover your professional power and excel in your career comeback journey.
            </span>
          </motion.p>
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

        {/* Floating Stats */}
        <Reveal delay={1.0}>
          <motion.div 
            className="mt-12 sm:mt-16 grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-2xl mx-auto px-4"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <div className="text-center">
              <motion.div 
                className="text-2xl sm:text-3xl md:text-4xl font-bold text-cc-blue-royal mb-1 sm:mb-2"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                500+
              </motion.div>
              <div className="text-xs sm:text-sm text-cc-slate font-medium">Professionals Helped</div>
            </div>
            <div className="text-center">
              <motion.div 
                className="text-2xl sm:text-3xl md:text-4xl font-bold text-cc-blue-royal mb-1 sm:mb-2"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              >
                20+
              </motion.div>
              <div className="text-xs sm:text-sm text-cc-slate font-medium">Years Experience</div>
            </div>
            <div className="text-center col-span-2 md:col-span-1">
              <motion.div 
                className="text-2xl sm:text-3xl md:text-4xl font-bold text-cc-blue-royal mb-1 sm:mb-2"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              >
                15+
              </motion.div>
              <div className="text-xs sm:text-sm text-cc-slate font-medium">Years Training</div>
            </div>
          </motion.div>
        </Reveal>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-cc-blue-royal rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-cc-blue-royal rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  )
} 