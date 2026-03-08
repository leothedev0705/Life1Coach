"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { User, Users, Building2, Filter } from "lucide-react"
import { Reveal } from "@/components/ui/reveal"
import { GlassCard } from "@/components/ui/glass-card"
import { Button } from "@/components/ui/button"

const categories = ["all", "personal", "group", "corporate"]

const programs = [
  {
    title: "1:1 Regular Coaching",
    slug: "regular-coaching",
    excerpt: "Personalized soft skills training (4 sessions) focused on confidence and career comeback.",
    category: "personal",
    duration: "4 sessions",
    price: "Rs. 10k",
    features: [
      "Discovery & goal setting",
      "Confidence building blocks",
      "Communication excellence",
      "Career comeback strategy"
    ],
    icon: User,
    popular: false
  },
  {
    title: "1:1 VIP Transformation",
    slug: "vip-transformation",
    excerpt: "Deep-dive intensive (8 sessions) for total professional and personal transformation.",
    category: "personal",
    duration: "8 sessions",
    price: "Rs. 16k",
    features: [
      "Everything in Regular package",
      "Advanced leadership skills",
      "Emotional intelligence mastery",
      "24/7 priority WhatsApp support",
      "Personalized branding kit",
      "Mock interviews & networking"
    ],
    icon: User,
    popular: true
  },
  {
    title: "Communication Excellence Workshop",
    slug: "communication-workshop",
    excerpt: "Master essential communication skills including presentation, negotiation, and professional writing.",
    category: "group",
    duration: "4-6 weeks",
    price: "from Rs. 5k",
    features: [
      "Public speaking mastery",
      "Active listening skills",
      "Professional writing",
      "Presentation design",
      "Negotiation techniques",
      "Cross-cultural communication"
    ],
    icon: Users,
    popular: false
  },
  {
    title: "Corporate Soft Skills Training",
    slug: "corporate-training",
    excerpt: "Customized soft skills training programs for organizations looking to develop their workforce.",
    category: "corporate",
    duration: "Custom",
    price: "Custom (INR)",
    features: [
      "Tailored curriculum design",
      "On-site or virtual delivery",
      "Team assessments",
      "Performance metrics",
      "Leadership development"
    ],
    icon: Building2,
    popular: false
  }
]

export function ProgramsGrid() {
  const [activeCategory, setActiveCategory] = useState("all")
  
  const filteredPrograms = programs.filter(program => 
    activeCategory === "all" || program.category === activeCategory
  )

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Category Filter */}
        <Reveal>
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-2xl font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-cc-blue-royal text-cc-white shadow-lg"
                    : "bg-cc-sand text-cc-slate hover:bg-cc-gold-light"
                }`}
              >
                <span className="flex items-center space-x-2">
                  <Filter className="w-4 h-4" />
                  <span className="capitalize">
                    {category === "all" ? "All Programs" : `${category} Coaching`}
                  </span>
                </span>
              </button>
            ))}
          </div>
        </Reveal>

        {/* Programs Grid */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {filteredPrograms.map((program, index) => {
            const IconComponent = program.icon
            return (
              <Reveal key={program.slug} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="relative h-full"
                >
                  {program.popular && (
                    <div className="absolute -top-4 left-6 z-10">
                      <div className="royal-gradient text-cc-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <Link href={`/programs/${program.slug}`}>
                    <GlassCard 
                      className="h-full flex flex-col cursor-pointer group"
                      gradient={program.popular}
                    >
                      {/* Header */}
                      <div className="flex items-start space-x-4 mb-6">
                        <div className="w-16 h-16 bg-cc-sky rounded-2xl flex items-center justify-center flex-shrink-0">
                          <IconComponent className="w-8 h-8 text-cc-blue-royal" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-playfair font-bold text-cc-charcoal mb-2 group-hover:text-cc-blue-royal transition-colors">
                            {program.title}
                          </h3>
                          <div className="flex items-center space-x-4 text-sm text-cc-slate">
                            <span>{program.duration}</span>
                            <span>•</span>
                            <span className="font-medium text-cc-blue-royal">{program.price}</span>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-cc-slate mb-6 leading-relaxed flex-grow">
                        {program.excerpt}
                      </p>

                      {/* Features */}
                      <div className="mb-6">
                        <h4 className="font-semibold text-cc-charcoal mb-3">What&apos;s Included:</h4>
                        <ul className="space-y-2">
                          {program.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center text-sm text-cc-slate">
                              <div className="w-1.5 h-1.5 bg-cc-blue-royal rounded-full mr-3" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* CTA */}
                      <div className="flex items-center justify-between pt-4 border-t border-cc-sand">
                        <span className="text-sm font-medium text-cc-blue-royal">
                          Learn More →
                        </span>
                        <div className="px-3 py-1 bg-cc-sand text-cc-slate text-xs font-medium rounded-full capitalize">
                          {program.category}
                        </div>
                      </div>
                    </GlassCard>
                  </Link>
                </motion.div>
              </Reveal>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <Reveal delay={0.6}>
          <div className="text-center mt-16">
            <GlassCard className="max-w-2xl mx-auto text-center">
              <h3 className="text-2xl font-playfair font-bold text-slate-800 mb-4">
                Not Sure Which Program Is Right for You?
              </h3>
              <p className="text-slate-600 mb-6">
                Book a free 30-minute discovery call to discuss your goals and find 
                the perfect pathway for your transformation journey.
              </p>
              <Link href="/contact">
                <Button variant="gradient" size="lg">
                  Schedule Free Consultation
                </Button>
              </Link>
            </GlassCard>
          </div>
        </Reveal>
      </div>
    </section>
  )
} 