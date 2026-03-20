"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { Reveal } from "@/components/ui/reveal"
import { GlassCard } from "@/components/ui/glass-card"

function AnimatedCounter({ end, duration = 2000, suffix = "" }: { 
  end: number; 
  duration?: number; 
  suffix?: string;
}) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime: number
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      
      setCount(Math.floor(progress * end))
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [end, duration])

  return <span>{count}{suffix}</span>
}

export function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-playfair font-bold text-slate-800 mb-6">
              Meet <span className="text-gradient">Anita D&apos;Souza</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Your trusted partner in transformation, helping ambitious individuals 
              unlock their potential and create extraordinary lives.
            </p>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Portrait Side */}
          <Reveal delay={0.2}>
            <div className="relative">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
                <div className="aspect-[4/5] bg-gradient-to-br from-amethyst-100 to-rose-100 rounded-3xl overflow-hidden shadow-2xl">
                  {/* Placeholder for portrait */}
                  <div className="w-full h-full bg-gradient-to-br from-amethyst-200 to-rose-200 flex items-center justify-center">
                    <div className="text-6xl text-amethyst-400">👩‍💼</div>
                  </div>
                </div>
                
                {/* Floating Elements */}
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -top-4 -right-4 w-16 h-16 bg-amethyst-500/20 rounded-full blur-sm"
                />
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -bottom-6 -left-6 w-24 h-24 bg-rose-400/20 rounded-full blur-md"
                />
              </motion.div>
            </div>
          </Reveal>

          {/* Content Side */}
          <Reveal delay={0.4}>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl md:text-3xl font-playfair font-semibold text-slate-800 mb-6">
                  Transforming Lives Through Purpose-Driven Coaching
                </h3>
                <div className="space-y-4 text-lg text-slate-600 leading-relaxed">
                  <p>
                    With over <strong>20 years of corporate experience</strong> spanning customer service, training, and human resources leadership, I bring deep insight into how professionals grow, communicate, and succeed in the workplace.
                  </p>
                  <p>
                    My work has focused on developing the <strong>human side of professional success</strong> — communication, emotional intelligence, confidence, and leadership presence. During my 15-year career as a soft skills trainer, I trained <strong>25,000+ software programming students and early-career professionals</strong> through NIIT’s GNIIT program.
                  </p>
                  <p className="font-semibold text-slate-800 mt-6 md:mt-8">Areas of Expertise</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li><strong>Corporate Training:</strong> Communication, presentation skills, teamwork, and personal effectiveness.</li>
                    <li><strong>Life Coaching:</strong> Emotional intelligence, mindset transformation, overcoming limiting beliefs.</li>
                    <li><strong>Career Comebacks:</strong> Career reinvention after a break, professional identity rebuilding, interview confidence.</li>
                  </ul>
                  <p className="font-semibold text-slate-800 mt-6 md:mt-8">Trainer Development & HR Leadership</p>
                  <p>
                    As an HR leader and training professional, I played a key role in building and managing HR and T&D functions for a 500+ employee organization. I hold an MBA in Human Resources, with postgraduate research on Emotional and Spiritual Intelligence (EQ & SQ).
                  </p>
                  <p>
                    I am also the author of <strong>“Shine Beyond the Shadows: 5 Soft Skills to Help You Stand Out,”</strong> a guide focused on helping individuals develop emotional intelligence and workplace confidence.
                  </p>
                </div>
              </div>

              {/* Credentials */}
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-amethyst-50 rounded-2xl">
                  <div className="text-xs text-amethyst-600 font-semibold mb-1">CERTIFIED</div>
                  <div className="text-sm font-medium text-slate-700">Life by Design Life Coach</div>
                </div>
                <div className="text-center p-4 bg-rose-50 rounded-2xl">
                  <div className="text-xs text-rose-600 font-semibold mb-1">AUTHOR</div>
                  <div className="text-sm font-medium text-slate-700">Shine Beyond the Shadows</div>
                </div>
              </div>

              {/* Animated Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <motion.div 
                    className="text-3xl md:text-4xl font-bold text-amethyst-600 mb-2"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <AnimatedCounter end={20} suffix="+" />
                  </motion.div>
                  <div className="text-sm text-slate-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <motion.div 
                    className="text-3xl md:text-4xl font-bold text-amethyst-600 mb-2"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <AnimatedCounter end={25} suffix="k+" />
                  </motion.div>
                  <div className="text-sm text-slate-600">Learners Trained</div>
                </div>
                <div className="text-center">
                  <motion.div 
                    className="text-3xl md:text-4xl font-bold text-amethyst-600 mb-2"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <AnimatedCounter end={98} suffix="%" />
                  </motion.div>
                  <div className="text-sm text-slate-600">Success Rate</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
} 