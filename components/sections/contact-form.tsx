"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { GlassCard } from "@/components/ui/glass-card"
import { Reveal } from "@/components/ui/reveal"

interface FormData {
  name: string
  email: string
  phone: string
  subject: string
  message: string
  program: string
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    program: ""
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    console.log("Contact form submitted:", formData)
    
    setTimeout(() => {
      setIsSubmitted(true)
      setIsSubmitting(false)
      // Reset form after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false)
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
          program: ""
        })
      }, 5000)
    }, 1000)
  }

  if (isSubmitted) {
    return (
      <Reveal>
        <GlassCard className="text-center py-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
            <h3 className="text-2xl font-playfair font-bold text-slate-800 mb-4">
              Message Sent Successfully!
            </h3>
            <p className="text-slate-600 mb-6">
              Thank you for reaching out! I&apos;ll get back to you within 24 hours 
              with personalized guidance for your career comeback journey.
            </p>
            <div className="text-sm text-slate-500">
              Check your email for a confirmation and next steps.
            </div>
          </motion.div>
        </GlassCard>
      </Reveal>
    )
  }

  return (
    <Reveal>
      <GlassCard>
        <h2 className="text-3xl font-playfair font-bold text-slate-800 mb-8">
          Start Your Comeback Journey
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-cc-blue-royal focus:border-transparent outline-none transition-all"
                placeholder="Your full name"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-cc-blue-royal focus:border-transparent outline-none transition-all"
                placeholder="your@email.com"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-cc-blue-royal focus:border-transparent outline-none transition-all"
                placeholder="+91 72084-09448"
              />
            </div>
            
            <div>
              <label htmlFor="program" className="block text-sm font-medium text-slate-700 mb-2">
                Interested Program
              </label>
              <select
                id="program"
                name="program"
                value={formData.program}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-cc-blue-royal focus:border-transparent outline-none transition-all"
              >
                <option value="">Select a program</option>
                <option value="regular-coaching">1:1 Regular Coaching (4 Sessions)</option>
                <option value="vip-transformation">1:1 VIP Transformation (8 Sessions)</option>
                <option value="communication-workshop">Communication Excellence Workshop</option>
                <option value="corporate-training">Corporate Soft Skills Training</option>
                <option value="unsure">I&apos;m not sure yet</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">
              Subject *
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-cc-blue-royal focus:border-transparent outline-none transition-all"
              placeholder="What can I help you with?"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-cc-blue-royal focus:border-transparent outline-none transition-all resize-none"
              placeholder="Tell me about your career goals, challenges, and what you'd like to achieve in your comeback journey..."
            />
          </div>

          <Button 
            type="submit" 
            variant="gradient" 
            size="xl" 
            className="w-full"
            disabled={isSubmitting}
          >
            <span className="mr-2">
              {isSubmitting ? "Sending..." : "Send Message"}
            </span>
            <Send className="w-5 h-5" />
          </Button>
        </form>

        <div className="mt-6 text-sm text-slate-500 text-center">
          <p>🔒 Your information is secure and will never be shared.</p>
        </div>
      </GlassCard>
    </Reveal>
  )
} 