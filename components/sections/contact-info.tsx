"use client"

import { motion } from "framer-motion"
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Facebook, 
  Instagram, 
  Linkedin, 
  Twitter,
  Calendar,
  MessageCircle
} from "lucide-react"
import { GlassCard } from "@/components/ui/glass-card"
import { Reveal } from "@/components/ui/reveal"
import { Button } from "@/components/ui/button"

const contactMethods = [
  {
    icon: Mail,
    title: "Email",
    value: "anita@comebackhub.com",
    description: "Best for direct inquiries",
    href: "mailto:anita@comebackhub.com"
  },
  {
    icon: Phone,
    title: "WhatsApp",
    value: "+91 7208409448",
    description: "Available for quick response",
    href: "https://wa.me/917208409448"
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Mumbai, MH",
    description: "Virtual sessions worldwide",
    href: "#"
  }
]

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" }
]

const officeHours = [
  { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM" },
  { day: "Saturday", hours: "10:00 AM - 2:00 PM" },
  { day: "Sunday", hours: "Closed" }
]

export function ContactInfo() {
  return (
    <div className="space-y-8">
      {/* Contact Methods */}
      <Reveal>
        <GlassCard>
          <h3 className="text-2xl font-playfair font-bold text-slate-800 mb-6">
            Get in Touch
          </h3>
          
          <div className="space-y-6">
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon
              return (
                <motion.a
                  key={method.title}
                  href={method.href}
                  whileHover={{ x: 4 }}
                  className="flex items-start space-x-4 p-4 rounded-xl hover:bg-amethyst-50/50 transition-colors group"
                >
                  <div className="w-12 h-12 bg-amethyst-100 rounded-xl flex items-center justify-center group-hover:bg-amethyst-200 transition-colors">
                    <IconComponent className="w-6 h-6 text-amethyst-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-slate-800 mb-1">
                      {method.title}
                    </h4>
                    <p className="text-amethyst-600 font-medium mb-1">
                      {method.value}
                    </p>
                    <p className="text-sm text-slate-600">
                      {method.description}
                    </p>
                  </div>
                </motion.a>
              )
            })}
          </div>
        </GlassCard>
      </Reveal>

      {/* Office Hours */}
      <Reveal delay={0.2}>
        <GlassCard>
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-rose-100 rounded-xl flex items-center justify-center">
              <Clock className="w-6 h-6 text-rose-600" />
            </div>
            <h3 className="text-2xl font-playfair font-bold text-slate-800">
              Office Hours
            </h3>
          </div>
          
          <div className="space-y-3">
            {officeHours.map((schedule, index) => (
              <div key={index} className="flex justify-between items-center py-2 border-b border-slate-100 last:border-b-0">
                <span className="text-slate-700 font-medium">{schedule.day}</span>
                <span className="text-slate-600">{schedule.hours}</span>
              </div>
            ))}
          </div>
          
          <div className="mt-6 p-4 bg-amethyst-50 rounded-xl">
            <p className="text-sm text-amethyst-700">
              ⚡ Need urgent support? Text me for faster response times.
            </p>
          </div>
        </GlassCard>
      </Reveal>

      {/* Quick Actions */}
      <Reveal delay={0.4}>
        <GlassCard>
          <h3 className="text-2xl font-playfair font-bold text-slate-800 mb-6">
            Quick Actions
          </h3>
          
          <div className="space-y-4">
            <Button variant="gradient" className="w-full justify-center">
              <Calendar className="w-5 h-5 mr-2" />
              Schedule Free Consultation
            </Button>
            
            <Button variant="outline" className="w-full justify-center">
              <MessageCircle className="w-5 h-5 mr-2" />
              Join Our Community
            </Button>
          </div>
        </GlassCard>
      </Reveal>

      {/* Social Media */}
      <Reveal delay={0.6}>
        <GlassCard>
          <h3 className="text-2xl font-playfair font-bold text-slate-800 mb-6">
            Follow the Journey
          </h3>
          
          <div className="grid grid-cols-4 gap-4">
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-slate-600 hover:bg-amethyst-100 hover:text-amethyst-600 transition-colors"
                  aria-label={social.label}
                >
                  <IconComponent className="w-5 h-5" />
                </motion.a>
              )
            })}
          </div>
          
          <p className="text-sm text-slate-600 mt-4 text-center">
            Daily inspiration and behind-the-scenes content
          </p>
        </GlassCard>
      </Reveal>
    </div>
  )
} 