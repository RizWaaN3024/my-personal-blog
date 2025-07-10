import moment from 'moment'
import Image from 'next/image'
import React from 'react'

const HeroGridSection = () => {
    return (
        <section className="py-25">
            <div className="lg:container mx-auto px-4">
                <div className="grid grid-cols-2">
                    <div className="col-span-1">
                        <div className="grid grid-cols-1 gap-5">
                            <div className="col-span-1">
                                <div className="aspect-[606/318] w-[606px] max-w-full relative hover:opacity-90">
                                    <Image
                                        src={"/test-blog.webp"}
                                        alt="test-blog"
                                        fill
                                        className="rounded-md w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                            <div className="col-span-1 flex flex-col gap-2">
                                <h2 className="text-xl lg:text-3xl font-bold leading-snug hover:underline hover:text-primary">GrafanaCON 2025</h2>
                                <p className="text-md leading-snug text-slate-300 dark:text-neutral-400">This year was my first time in Seattle — and what a way to experience the city. Beautiful weather, great coffee, and an engaged tech crowd. GrafanaCON 2025 brought together developers, engineers, and hobbyists to explore what’s possible with open sou...</p>
                                <div className="text-sm font-semibold text-slate-500 dark:text-neutral-400">
                                    <time dateTime={new Date().toISOString()}>{moment().format('MMMM D YYYY')}</time>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroGridSection
