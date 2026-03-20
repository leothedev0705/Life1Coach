"use client"

import { motion } from "framer-motion"
import { User, Users, Building2, Clock, Target, Heart } from "lucide-react"
import { Reveal } from "@/components/ui/reveal"
import { GlassCard } from "@/components/ui/glass-card"
import { Button } from "@/components/ui/button"
import { scrollToSection } from "@/lib/utils"

const programs = [
  {
    title: "Career Comeback Masterclass",
    subtitle: "Free Masterclass",
    icon: Users,
    price: "Free",
    description: "A 90 minute live masterclass designed for women who are considering restarting their careers after a break.",
    features: [
      "Why many women lose confidence after a career break",
      "The biggest mistakes people make when trying to restart their careers",
      "The 90-Day Career Comeback Roadmap"
    ],
    color: "amethyst",
    popular: false,
    ctaText: "Register for Masterclass"
  },
  {
    title: "Silver Program",
    subtitle: "The Dignified Comeback",
    icon: User,
    price: "Custom",
    description: "A foundational program designed to help women rebuild confidence and gain clarity about restarting their professional journey.",
    features: [
      "Professional identity rebuilding",
      "Communication confidence",
      "Career direction clarity"
    ],
    color: "rose",
    popular: false,
    ctaText: "Join the Program"
  },
  {
    title: "Gold Program",
    subtitle: "Career Comeback Accelerator",
    icon: Target,
    price: "Custom",
    description: "A structured program for women who are ready to actively restart their careers and position themselves professionally.",
    features: [
      "Resume reinvention",
      "LinkedIn profile positioning",
      "Interview preparation and confidence"
    ],
    color: "amethyst",
    popular: true,
    ctaText: "Apply Now"
  },
  {
    title: "Diamond Program",
    subtitle: "Career Comeback Leadership Track",
    icon: Building2,
    price: "Custom",
    description: "An advanced program designed for women who want to grow into leadership roles and mentor others in their professional journeys.",
    features: [
      "Executive presence",
      "Leadership mindset",
      "Mentoring and influence"
    ],
    color: "rose",
    popular: false,
    ctaText: "Application Required"
  },
  {
    title: "90-Day Career Comeback Coaching",
    subtitle: "Premium Coaching",
    icon: Heart,
    price: "Custom",
    description: "A personalized coaching program for women who want focused guidance and accountability while restarting their careers.",
    features: [
      "Career strategy development",
      "Confidence and mindset coaching",
      "Interview preparation and positioning"
    ],
    color: "amethyst",
    popular: false,
    ctaText: "Apply for Coaching"
  },
  {
    title: "Confidence & Clarity Coaching",
    subtitle: "Personal Coaching",
    icon: User,
    price: ["Rs. 10,000 (4 Sessions)", "Rs. 16,000 (8 Sessions)"],
    description: "Coaching sessions designed for individuals seeking support with confidence, communication, and life direction.",
    features: [
      "Confidence building",
      "Communication skills",
      "Life direction and clarity"
    ],
    color: "rose",
    popular: false,
    ctaText: "Book a Session"
  },
  {
    title: "Corporate Training",
    subtitle: "Organizations",
    icon: Building2,
    price: "Custom",
    description: "Customized training programs for organizations focused on workplace effectiveness and professional development.",
    features: [
      "Communication Skills",
      "Emotional Intelligence",
      "Leadership Development"
    ],
    color: "amethyst",
    popular: false,
    ctaText: "Request Corporate Proposal"
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
                        {Array.isArray(program.price) ? (
                          program.price.map((p, i) => <div key={i}>{p}</div>)
                        ) : (
                          program.price
                        )}
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
                      {program.ctaText}
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