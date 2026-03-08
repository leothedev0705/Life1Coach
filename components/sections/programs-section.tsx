"use client"

import { motion } from "framer-motion"
import { User, Users, Building2, Clock, Target, Heart } from "lucide-react"
import { Reveal } from "@/components/ui/reveal"
import { GlassCard } from "@/components/ui/glass-card"
import { Button } from "@/components/ui/button"
import { scrollToSection } from "@/lib/utils"

const programs = [
  {
    title: "1-on-1 Transformation",
    subtitle: "Personal Coaching",
    icon: User,
    price: "Rs. 10k (Regular) / Rs. 16k (VIP)",
    description: "Personalized coaching sessions designed to unlock your unique potential and accelerate your personal growth journey.",
    features: [
      "Regular Package: 4 sessions (Rs. 10k)",
      "VIP Package: 8 sessions (Rs. 16k)",
      "Personalized action plans",
      "24/7 WhatsApp support",
      "Progress tracking tools"
    ],
    color: "amethyst",
    popular: true
  },
  {
    title: "Corporate Workshops",
    subtitle: "Team Development",
    icon: Building2,
    price: "Custom (INR)",
    description: "Transform your organization with powerful workshops focused on leadership development and team synergy.",
    features: [
      "Custom program design",
      "On-site or virtual delivery",
      "Leadership assessments",
      "Team building activities",
      "Ongoing support"
    ],
    color: "amethyst",
    popular: false
  }
]

export function ProgramsSection() {
  return (
    <section id="programs" className="py-12 sm:py-16 md:py-24 bg-lavender-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-slate-800 mb-4 sm:mb-6 px-2">
              Signature <span className="text-gradient">Programs</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto px-4">
              Choose the perfect pathway for your transformation journey. 
              Each program is carefully designed to deliver extraordinary results.
            </p>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {programs.map((program, index) => {
            const IconComponent = program.icon
            return (
              <Reveal key={program.title} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="relative h-full"
                >
                  {program.popular && (
                    <div className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2 z-10">
                      <div className="bg-gradient-to-r from-amethyst-500 to-rose-400 text-white px-4 sm:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold shadow-lg whitespace-nowrap">
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <GlassCard 
                    className="h-full flex flex-col relative overflow-hidden pt-6 sm:pt-4"
                    gradient={program.popular}
                  >
                    {/* Header */}
                    <div className="text-center mb-4 sm:mb-6">
                      <div className={`inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl mb-3 sm:mb-4 ${
                        program.color === 'amethyst' ? 'bg-amethyst-100' : 'bg-rose-100'
                      }`}>
                        <IconComponent className={`w-6 h-6 sm:w-8 sm:h-8 ${
                          program.color === 'amethyst' ? 'text-amethyst-600' : 'text-rose-600'
                        }`} />
                      </div>
                      <h3 className="text-xl sm:text-2xl font-playfair font-bold text-slate-800 mb-1 sm:mb-2 px-2">
                        {program.title}
                      </h3>
                      <p className="text-base sm:text-lg text-slate-600 mb-3 sm:mb-4">{program.subtitle}</p>
                      <div className={`text-2xl sm:text-3xl font-bold mb-2 ${
                        program.color === 'amethyst' ? 'text-amethyst-600' : 'text-rose-600'
                      }`}>
                        {program.price}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-sm sm:text-base text-slate-600 mb-4 sm:mb-6 text-center leading-relaxed px-2">
                      {program.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8 flex-grow px-2">
                      {program.features.map((feature, featureIndex) => (
                        <motion.li
                          key={featureIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: featureIndex * 0.1 }}
                          className="flex items-start space-x-2 sm:space-x-3"
                        >
                          <div className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full mt-1.5 sm:mt-2 flex-shrink-0 ${
                            program.color === 'amethyst' ? 'bg-amethyst-500' : 'bg-rose-500'
                          }`} />
                          <span className="text-sm sm:text-base text-slate-700 leading-relaxed">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>

                    {/* CTA Button */}
                    <Button
                      variant={program.popular ? "gradient" : "default"}
                      size="lg"
                      className="w-full min-h-[48px]"
                      onClick={() => scrollToSection("contact")}
                    >
                      Get Started
                    </Button>
                  </GlassCard>
                </motion.div>
              </Reveal>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <Reveal delay={0.4}>
          <div className="text-center mt-10 sm:mt-12 md:mt-16 px-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-flex flex-col sm:flex-row items-center gap-2 text-amethyst-600 cursor-pointer"
              onClick={() => scrollToSection("contact")}
            >
              <Heart className="w-5 h-5 flex-shrink-0" />
              <span className="font-medium text-sm sm:text-base text-center">Not sure which program is right for you? Let&apos;s chat!</span>
            </motion.div>
          </div>
        </Reveal>
      </div>
    </section>
  )
} 