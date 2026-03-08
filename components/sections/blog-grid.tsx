"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Calendar, Clock, ArrowRight, Search } from "lucide-react"
import { Reveal } from "@/components/ui/reveal"
import { GlassCard } from "@/components/ui/glass-card"
import { Button } from "@/components/ui/button"

const categories = ["all", "mindset", "leadership", "productivity", "personal-growth", "success"]

import { allPosts } from 'contentlayer/generated'
import { compareDesc } from 'date-fns'

export function BlogGrid() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  
  const posts = allPosts.sort((a, b) => compareDesc(new Date(a.publishDate), new Date(b.publishDate)))

  const filteredPosts = posts.filter(post => {
    const matchesCategory = activeCategory === "all" || post.tags.some(tag => tag.toLowerCase() === activeCategory.toLowerCase())
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  return (
    <section className="py-16 md:py-24 bg-lavender-50">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Search and Filter */}
        <Reveal>
          <div className="max-w-4xl mx-auto mb-16">
            {/* Search */}
            <div className="relative mb-8">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="w-5 h-5 text-slate-400" />
              </div>
              <input
                type="text"
                placeholder="Search articles, topics, or tags..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/80 backdrop-blur-sm border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-amethyst-500/20 focus:border-amethyst-300 text-slate-700 placeholder-slate-400"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-3 rounded-2xl font-medium transition-all duration-300 ${
                    activeCategory === category
                      ? "bg-amethyst-500 text-white shadow-lg"
                      : "bg-white/80 text-slate-600 hover:bg-white"
                  }`}
                >
                  {category === "all" ? "All Articles" : category.replace("-", " ").replace(/\b\w/g, l => l.toUpperCase())}
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Results Count */}
        {(searchQuery || activeCategory !== "all") && (
          <Reveal>
            <div className="text-center mb-8">
              <p className="text-slate-600">
                {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''} found
                {searchQuery && ` for "${searchQuery}"`}
                {activeCategory !== "all" && ` in ${activeCategory.replace("-", " ")}`}
              </p>
            </div>
          </Reveal>
        )}

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {filteredPosts.map((post, index) => (
            <Reveal key={post.slug} delay={index * 0.1}>
              <motion.div 
                whileHover={{ y: -8 }}
                className="h-full"
              >
                <Link href={`/blog/${post.slug}`}>
                  <GlassCard className="h-full flex flex-col cursor-pointer group">
                    {/* Article Image */}
                    <div className="h-48 relative rounded-2xl mb-6 overflow-hidden">
                      <Image 
                        src={post.coverImage}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>

                    <div className="flex-1 flex flex-col">
                      {/* Meta */}
                      <div className="flex items-center space-x-3 mb-4">
                        <span className="px-3 py-1 bg-amethyst-100 text-amethyst-700 text-sm font-medium rounded-full capitalize">
                          {post.tags[0] || 'Uncategorized'}
                        </span>
                        <div className="flex items-center text-sm text-slate-500">
                          <Calendar className="w-4 h-4 mr-1" />
                          {new Date(post.publishDate).toLocaleDateString('en-US', { 
                            month: 'short', 
                            day: 'numeric' 
                          })}
                        </div>
                        <div className="flex items-center text-sm text-slate-500">
                          <Clock className="w-4 h-4 mr-1" />
                          {post.readingTime.text}
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-playfair font-bold text-slate-800 mb-3 group-hover:text-amethyst-600 transition-colors leading-tight">
                        {post.title}
                      </h3>

                      {/* Excerpt */}
                      <p className="text-slate-600 leading-relaxed mb-6 flex-grow">
                        {post.excerpt}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {post.tags.slice(0, 3).map((tag) => (
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
                          Read Article
                        </span>
                        <ArrowRight className="w-5 h-5 text-amethyst-600 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </GlassCard>
                </Link>
              </motion.div>
            </Reveal>
          ))}
        </div>

        {/* No Results */}
        {filteredPosts.length === 0 && (
          <Reveal>
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-slate-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Search className="w-12 h-12 text-slate-400" />
              </div>
              <h3 className="text-2xl font-playfair font-bold text-slate-800 mb-4">
                No Articles Found
              </h3>
              <p className="text-slate-600 mb-8">
                Try adjusting your search terms or browse all articles.
              </p>
              <Button 
                variant="outline" 
                onClick={() => {
                  setSearchQuery("")
                  setActiveCategory("all")
                }}
              >
                Clear Filters
              </Button>
            </div>
          </Reveal>
        )}

        {/* Load More */}
        {filteredPosts.length > 0 && (
          <Reveal delay={0.6}>
            <div className="text-center mt-16">
              <Button variant="outline" size="lg">
                Load More Articles
              </Button>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  )
} 