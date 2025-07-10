import moment from 'moment'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const HeroGridSection = () => {
    return (
        <section className="py-16 lg:py-25">
            <div className="lg:container mx-auto px-4">
                <div className="grid grid-cols-2 gap-6">
                    <div className="col-span-1">
                        <div className="grid grid-cols-1 gap-5">
                            <div className="col-span-1">
                                <Link href={"/"}>
                                    <div className="aspect-[606/318] w-[606px] max-w-full relative hover:opacity-90">
                                        <Image
                                            src={"/test-blog.webp"}
                                            alt="test-blog"
                                            fill
                                            loading={"lazy"}
                                            className="rounded-md w-full h-full object-cover"
                                        />
                                    </div>
                                </Link>
                            </div>
                            <div className="col-span-1 flex flex-col gap-2">
                                <Link href={"/"}>
                                    <h2 className="text-xl lg:text-3xl font-bold leading-snug hover:underline hover:text-primary">
                                        GrafanaCON 2025
                                    </h2>
                                </Link>
                                <Link href={"/"}>
                                    <p className="text-md leading-snug text-slate-300 dark:text-neutral-400">
                                        This year was my first time in Seattle — and what a way to experience the city. Beautiful weather, great coffee, and an engaged tech crowd. GrafanaCON 2025 brought together developers, engineers, and hobbyists to explore what’s possible with open sou...
                                    </p>
                                </Link>
                                <div className="text-sm font-semibold text-slate-500 dark:text-neutral-400">
                                    <time dateTime={new Date().toISOString()}>{moment().format('MMMM D YYYY')}</time>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1 flex flex-col gap-6">
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
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroGridSection
