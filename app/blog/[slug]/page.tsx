import { allPosts } from 'contentlayer/generated'
import { notFound } from 'next/navigation'
import { NavBar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Reveal } from '@/components/ui/reveal'
import { Calendar, Clock, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { Mdx } from '@/components/mdx-content'

interface PostProps {
  params: {
    slug: string
  }
}

async function getPostFromParams(slug: string) {
  const post = allPosts.find((post) => post.slug === slug)

  if (!post) {
    return null
  }

  return post
}

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function PostPage({ params }: PostProps) {
  const post = await getPostFromParams(params.slug)

  if (!post) {
    notFound()
  }


  return (
    <main className="min-h-screen bg-white">
      <NavBar />
      <article className="pt-32 pb-16 md:pb-24">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <Reveal>
            <Link 
              href="/blog"
              className="inline-flex items-center text-amethyst-600 hover:text-amethyst-700 font-medium mb-8 group"
            >
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Blog
            </Link>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex flex-wrap gap-2 mb-6">
              {post.tags?.map((tag) => (
                <span 
                  key={tag}
                  className="px-3 py-1 bg-amethyst-50 text-amethyst-700 text-sm font-medium rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <h1 className="text-4xl md:text-6xl font-playfair font-bold text-slate-800 mb-8 leading-tight">
              {post.title}
            </h1>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="flex items-center space-x-6 text-slate-500 mb-12 border-b border-slate-100 pb-8">
              <div className="flex items-center">
                <Calendar className="w-5 h-5 mr-2" />
                <span>{new Date(post.publishDate).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric'
                })}</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                <span>{post.readingTime.text}</span>
              </div>
              <div className="flex items-center">
                <span className="font-medium text-slate-700">By {post.author}</span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="relative aspect-video rounded-3xl overflow-hidden mb-12 shadow-2xl">
              <Image
                src={post.coverImage}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </Reveal>

          <Reveal delay={0.5}>
            <div className="prose prose-lg prose-slate max-w-none prose-headings:font-playfair prose-headings:font-bold prose-a:text-amethyst-600">
              <Mdx code={post.body.code} />
            </div>
          </Reveal>
        </div>
      </article>
      <Footer />
    </main>
  )
}
