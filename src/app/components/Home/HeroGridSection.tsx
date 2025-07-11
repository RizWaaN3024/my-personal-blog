import { getPostBySlug } from '@/app/lib/posts'
import moment from 'moment'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const HeroGridSection = async () => {
    const featuredPost = await getPostBySlug('docker-basics');
    if (!featuredPost) {
        return (
            <div><h2>No Featured Post</h2></div>
        )
    }
    console.log(featuredPost);
    return (
        <section className="py-16 lg:py-25">
            <div className="lg:container mx-auto px-6 lg:px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="col-span-1">
                        <div className="grid grid-cols-1 gap-5">
                            <div className="col-span-1">
                                <Link href={`/blog/${featuredPost.metadata.slug}`}>
                                    <div className="aspect-[606/318] lg:w-[606px] max-w-full relative hover:opacity-90">
                                        {featuredPost.metadata.featuredImage ? (
                                            <Image
                                                src={featuredPost.metadata.featuredImage}
                                                alt={featuredPost.metadata.title}
                                                fill
                                                loading="lazy"
                                                className="rounded-md w-full h-full object-cover"
                                            />
                                        ) : (
                                            <div className="w-full h-full bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 rounded-md flex items-center justify-center">
                                                <h3 className="text-white text-xl font-bold text-center px-4">
                                                    {featuredPost.metadata.title}
                                                </h3>
                                            </div>
                                        )}
                                    </div>
                                </Link>
                            </div>
                            <div className="col-span-1 flex flex-col gap-2">
                                <Link href={`/blog/${featuredPost.metadata.slug}`}>
                                    <h2 className="text-xl lg:text-3xl font-bold leading-snug hover:underline hover:text-primary">
                                        {featuredPost?.metadata?.title}
                                    </h2>
                                </Link>
                                {featuredPost.metadata.tags && featuredPost.metadata.tags.length > 0 && (
                                    <div className="flex flex-wrap gap-2 mb-2">
                                        {featuredPost.metadata.tags.slice(0, 3).map((tag) => (
                                            <span
                                                key={tag}
                                                className="px-2 py-1 bg-slate-600 text-primary text-xs rounded-full"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                )}
                                <Link href={`/blog/${featuredPost.metadata.slug}`}>
                                    <p className="text-md leading-snug text-slate-300 dark:text-neutral-400">
                                        {featuredPost.metadata.description?.length && featuredPost.metadata.description.length > 150
                                            ? `${featuredPost.metadata.description.substring(0, 150)}...`
                                            : featuredPost.metadata.description
                                        }
                                    </p>
                                </Link>
                                <div className="text-sm font-semibold text-slate-500 dark:text-neutral-400">
                                    <time dateTime={featuredPost?.metadata?.date}>{moment().format('MMMM D YYYY')}</time>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="col-span-1 flex flex-col gap-6">
                        {Array(3).fill(null).map((_, idx) => {
                            return (
                                <div key={idx} className="grid md:grid-cols-2 gap-5 items-start">
                                    <div className="col-span-1">
                                        <Link href={"/"} aria-label='Blog-item'>
                                        <div className="relative pt-[52.5%]">
                                            <Image 
                                                src={"/test-blog.webp"}
                                                alt="test-blog"
                                                fill
                                                loading={"lazy"}
                                                className="rounded-md"
                                            />
                                        </div>
                                        </Link>
                                    </div>
                                    <div className="col-span-1 flex flex-col gap-2">
                                        <h2 className="text-lg font-semibold leading-tight text-slate-300 dark:text-neutral-50">
                                            <Link href={"/"} className="hover:text-primary dark:hover:text-primary hover:underline">
                                                Making DevSecOps Work by Balancing Speed, Security & Scale
                                            </Link>
                                        </h2>
                                        <Link href={"/"}>
                                            <p className="text-md leading-snug text-slate-300 dark:text-neutral-400">Building and shipping software quickly is necessity in today competitive landscape. However, accel…</p>
                                        </Link>
                                        <div className="text-sm font-semibold text-slate-500 dark:text-neutral-400">
                                            <time dateTime={new Date().toISOString()}>{moment().format('MMMM D YYYY')}</time>
                                        </div>
                                    </div>
                                </div>
                                
                            )
                        })}
                    </div> */}
                    <div className="col-span-1 flex flex-col gap-6">
                        {/* Minimal Coming Soon with Animation */}
                        <div className="flex flex-col items-center justify-center py-16 space-y-6">
                            {/* Animated Icon */}
                            <div className="relative">
                                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center animate-pulse shadow-lg">
                                    <svg className="w-8 h-8 text-white animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                    </svg>
                                </div>
                                {/* Brighter glow effect */}
                                <div className="absolute inset-0 w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full opacity-40 animate-ping"></div>
                            </div>

                            {/* Brighter Text Content */}
                            <div className="text-center space-y-3">
                                <h3 className="text-xl font-bold text-slate-300 dark:text-white">
                                    More blogs coming soon
                                </h3>
                                <p className="text-base font-medium text-slate-400 dark:text-slate-200">
                                    Stay tuned for more content
                                </p>
                            </div>

                            {/* Brighter animated dots */}
                            <div className="flex space-x-1">
                                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse shadow-sm"></div>
                                <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse shadow-sm" style={{ animationDelay: '0.2s' }}></div>
                                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse shadow-sm" style={{ animationDelay: '0.4s' }}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroGridSection
