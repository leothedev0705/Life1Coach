"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import { Reveal } from "@/components/ui/reveal"
import { GlassCard } from "@/components/ui/glass-card"
import { Button } from "@/components/ui/button"

import { allPosts } from 'contentlayer/generated'
import { compareDesc } from 'date-fns'

export function BlogPreview() {
  const posts = allPosts
    .sort((a, b) => compareDesc(new Date(a.publishDate), new Date(b.publishDate)))
    .slice(0, 3)

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-playfair font-bold text-slate-800 mb-6">
              Latest <span className="text-gradient">Insights</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Practical wisdom, actionable strategies, and inspiring stories 
              to fuel your personal growth journey.
            </p>
          </div>
        </Reveal>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12">
          {posts.map((post, index) => (
            <Reveal key={post.slug} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -8 }}
                className="h-full"
              >
                <Link href={post.url}>
                  <GlassCard className="h-full flex flex-col cursor-pointer group">
                    {/* Cover Image */}
                    <div className="aspect-video relative rounded-2xl mb-6 overflow-hidden">
                      <Image 
                        src={post.coverImage}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>

                    {/* Meta Info */}
                    <div className="flex items-center space-x-4 text-sm text-slate-500 mb-4">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(post.publishDate).toLocaleDateString('en-US', { 
                          month: 'short', 
                          day: 'numeric',
                          year: 'numeric'
                        })}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.readingTime.text}</span>
                      </div>
                    </div>

                    {/* Title & Excerpt */}
                    <h3 className="text-xl font-playfair font-bold text-slate-800 mb-3 group-hover:text-amethyst-600 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed mb-6 flex-grow line-clamp-3">
                      {post.excerpt}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags?.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-amethyst-50 text-amethyst-700 text-xs font-medium rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Read More */}
                    <div className="flex items-center text-amethyst-600 font-medium group-hover:translate-x-2 transition-transform">
                      <span>Read More</span>
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  </GlassCard>
                </Link>
              </motion.div>
            </Reveal>
          ))}
        </div>

        {/* More Insights CTA */}
        <Reveal delay={0.4}>
          <div className="text-center">
            <Link href="/blog">
              <Button variant="gradient" size="xl">
                More Insights
              </Button>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
} 