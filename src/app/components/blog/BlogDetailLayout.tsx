import { BlogPost } from '@/app/types/blog'
import { ArrowLeft, Calendar, Clock, Tag } from 'lucide-react';
import moment from 'moment';
import { MDXRemote } from 'next-mdx-remote';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

interface BlogDetailLayoutProps {
    post: BlogPost;
}

const mdxComponents = {
    h1: ({ children }: any) => (
        <h1 className="text-3xl lg:text-4xl font-bold mb-6 text-slate-900 dark:text-white">
            {children}
        </h1>
    ),
    h2: ({ children }: any) => (
        <h2 className="text-2xl lg:text-3xl font-semibold mb-4 mt-8 text-slate-800 dark:text-slate-100">
            {children}
        </h2>
    ),
    h3: ({ children }: any) => (
        <h3 className="text-xl lg:text-2xl font-medium mb-3 mt-6 text-slate-700 dark:text-slate-200">
            {children}
        </h3>
    ),
    p: ({ children }: any) => (
        <p className="text-base lg:text-lg leading-relaxed mb-4 text-slate-600 dark:text-slate-300">
            {children}
        </p>
    ),
    ul: ({ children }: any) => (
        <ul className="list-disc pl-6 mb-4 space-y-2 text-slate-600 dark:text-slate-300">
            {children}
        </ul>
    ),
    ol: ({ children }: any) => (
        <ol className="list-decimal pl-6 mb-4 space-y-2 text-slate-600 dark:text-slate-300">
            {children}
        </ol>
    ),
    blockquote: ({ children }: any) => (
        <blockquote className="border-l-4 border-primary pl-6 py-2 mb-6 italic text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-800/50 rounded-r-lg">
            {children}
        </blockquote>
    ),
    code: ({ children }: any) => (
        <code className="bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded text-sm font-mono text-slate-800 dark:text-slate-200">
            {children}
        </code>
    ),
    pre: ({ children }: any) => (
        <pre className="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto mb-6 text-sm">
            {children}
        </pre>
    ),
    img: ({ src, alt }: any) => (
        <div className="my-8">
            <Image
                src={src}
                alt={alt}
                width={800}
                height={400}
                className={"rounded-lg w-full h-auto"}
            />
        </div>
    )
};

const BlogDetailLayout: React.FC<BlogDetailLayoutProps> = ({ post }) => {
    const { metadata, compiledContent } = post;

    const wordsPerMinute = 200;
    const wordCount = post.content.split(' ').length;
    const readingTime = Math.ceil(wordCount / wordsPerMinute);

    return (
        <div className="min-h-screen bg-white dark:bg-slate-900">
            {/* Navigation Bar */}
            <nav className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-700">
                <div className="container mx-auto px-4 py-4">
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-300 hover:text-primary transition-colors"
                    >
                        <ArrowLeft size={20} />
                        <span>Back to Blog</span>
                    </Link>
                </div>
            </nav>

            {/* Hero Section */}
            <header className="py-12 lg:py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        {/* Metadata */}
                        <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-slate-500 dark:text-slate-400">
                            <div className="flex items-center gap-2">
                                <Calendar size={16} />
                                <time dateTime={metadata.date}>
                                    {moment(metadata.date).format('MMMM D, YYYY')}
                                </time>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock size={16} />
                                <span>{readingTime} min read</span>
                            </div>
                        </div>

                        {/* Title */}
                        <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-slate-900 dark:text-white leading-tight">
                            {metadata.title}
                        </h1>

                        {/* Description */}
                        {metadata.description && (
                            <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
                                {metadata.description}
                            </p>
                        )}

                        {/* Tags */}
                        {metadata.tags && metadata.tags.length > 0 && (
                            <div className="flex flex-wrap gap-2 mb-8">
                                {metadata.tags.map((tag) => (
                                    <Link
                                        key={tag}
                                        href={`/blog/tag/${tag}`}
                                        className="inline-flex items-center gap-1 px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full text-sm hover:bg-primary hover:text-white transition-colors"
                                    >
                                        <Tag size={14} />
                                        {tag}
                                    </Link>
                                ))}
                            </div>
                        )}

                        {/* Hero Image */}
                        <div className="aspect-video relative rounded-xl overflow-hidden mb-12">
                            <Image
                                src="/test-blog.webp"
                                alt={metadata.title}
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="pb-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        {/* Article Content */}
                        <article className="prose prose-lg prose-slate dark:prose-invert max-w-none">
                            <MDXRemote {...compiledContent} components={mdxComponents} />
                        </article>

                        {/* Article Footer */}
                        <footer className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-700">
                            <div className="flex flex-wrap justify-between items-center gap-4">
                                <div className="flex flex-wrap gap-2">
                                    {metadata.tags.map((tag) => (
                                        <Link
                                            key={tag}
                                            href={`/blog/tag/${tag}`}
                                            className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full text-sm hover:bg-primary hover:text-white transition-colors"
                                        >
                                            #{tag}
                                        </Link>
                                    ))}
                                </div>

                                {/* Share buttons could go here */}
                                <div className="text-sm text-slate-500 dark:text-slate-400">
                                    Published on {moment(metadata.date).format('MMMM D, YYYY')}
                                </div>
                            </div>
                        </footer>
                    </div>
                </div>
            </main>

            {/* Related Posts Section */}
            {/* <RelatedPosts currentSlug={metadata.slug} tags={metadata.tags} /> */}
        </div>
    )
}

export default BlogDetailLayout
