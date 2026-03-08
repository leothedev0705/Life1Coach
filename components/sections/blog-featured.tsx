"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import { Reveal } from "@/components/ui/reveal"
import { GlassCard } from "@/components/ui/glass-card"
import { Button } from "@/components/ui/button"

import { allPosts } from 'contentlayer/generated'
import { compareDesc } from 'date-fns'
import Image from 'next/image'

export function BlogFeatured() {
  const posts = allPosts.sort((a, b) => compareDesc(new Date(a.publishDate), new Date(b.publishDate)))
  
  const featuredPost = posts.find(post => post.featured) || posts[0]
  const recentPosts = posts.filter(post => post.slug !== featuredPost.slug).slice(0, 3)

  if (!featuredPost) return null
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-playfair font-bold text-slate-800 mb-6">
              Featured <span className="text-gradient">Articles</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Deep insights, practical strategies, and transformational wisdom to accelerate 
              your personal and professional growth journey.
            </p>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Featured Post */}
          <Reveal delay={0.2}>
            <motion.div 
              whileHover={{ y: -8 }}
              className="lg:row-span-2"
            >
              <Link href={`/blog/${featuredPost.slug}`}>
                <GlassCard className="h-full flex flex-col cursor-pointer group overflow-hidden">
                  {/* Featured Badge */}
                  <div className="absolute top-6 left-6 z-10">
                    <span className="bg-gradient-to-r from-amethyst-500 to-rose-400 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                      Featured Article
                    </span>
                  </div>

                  {/* Image */}
                  <div className="relative h-80 rounded-2xl mb-6 overflow-hidden">
                    <Image 
                      src={featuredPost.coverImage}
                      alt={featuredPost.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  <div className="flex-1 flex flex-col">
                    {/* Meta */}
                    <div className="flex items-center space-x-4 mb-4">
                      <span className="px-3 py-1 bg-amethyst-100 text-amethyst-700 text-sm font-medium rounded-full">
                        {featuredPost.tags[0] || 'Uncategorized'}
                      </span>
                      <div className="flex items-center text-sm text-slate-500">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(featuredPost.publishDate).toLocaleDateString('en-US', { 
                          month: 'short', 
                          day: 'numeric' 
                        })}
                      </div>
                      <div className="flex items-center text-sm text-slate-500">
                        <Clock className="w-4 h-4 mr-1" />
                        {featuredPost.readingTime.text}
                      </div>
                    </div>

                    {/* Title & Excerpt */}
                    <h3 className="text-2xl lg:text-3xl font-playfair font-bold text-slate-800 mb-4 group-hover:text-amethyst-600 transition-colors leading-tight">
                      {featuredPost.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed mb-6 flex-grow">
                      {featuredPost.excerpt}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {featuredPost.tags.map((tag) => (
                        <span 
                          key={tag}
                          className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded-lg"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                      <span className="text-amethyst-600 font-medium group-hover:text-amethyst-700 transition-colors">
                        Read Full Article
                      </span>
                      <ArrowRight className="w-5 h-5 text-amethyst-600 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </GlassCard>
              </Link>
            </motion.div>
          </Reveal>

          {/* Recent Posts */}
          <div className="space-y-8">
            {recentPosts.map((post, index) => (
              <Reveal key={post.slug} delay={0.3 + index * 0.1}>
                <motion.div whileHover={{ y: -4 }}>
                  <Link href={`/blog/${post.slug}`}>
                    <GlassCard className="cursor-pointer group">
                      <div className="flex space-x-4">
                        {/* Image */}
                        <div className="w-24 h-24 relative rounded-xl flex-shrink-0 overflow-hidden">
                          <Image 
                            src={post.coverImage}
                            alt={post.title}
                            fill
                            className="object-cover"
                          />
                        </div>

                        {/* Content */}
                        <div className="flex-1">
                          {/* Meta */}
                          <div className="flex items-center space-x-3 mb-2">
                            <span className="px-2 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded">
                              {post.tags[0] || 'Uncategorized'}
                            </span>
                            <div className="flex items-center text-xs text-slate-500">
                              <Calendar className="w-3 h-3 mr-1" />
                              {new Date(post.publishDate).toLocaleDateString('en-US', { 
                                month: 'short', 
                                day: 'numeric' 
                              })}
                            </div>
                            <div className="flex items-center text-xs text-slate-500">
                              <Clock className="w-3 h-3 mr-1" />
                              {post.readingTime.text}
                            </div>
                          </div>

                          {/* Title */}
                          <h3 className="font-playfair font-bold text-slate-800 mb-2 group-hover:text-amethyst-600 transition-colors leading-tight">
                            {post.title}
                          </h3>

                          {/* Excerpt */}
                          <p className="text-sm text-slate-600 leading-relaxed">
                            {post.excerpt}
                          </p>
                        </div>
                      </div>
                    </GlassCard>
                  </Link>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* View All CTA */}
        <Reveal delay={0.8}>
          <div className="text-center mt-16">
            <Button variant="outline" size="lg">
              View All Articles
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
} 