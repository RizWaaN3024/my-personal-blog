import { Github, Instagram, Linkedin, Mail, Twitter } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <div className="py-16 lg:py-25 border-t border-gray-800">
            <div className="lg:container mx-auto px-4 relative">
                {/* <p className="h-fit w-fit max-w-full absolute m-auto z-[-1] top-0 left-0 right-0 bottom-0 text-center text-border-thick text-[18vw] md:text-[13vw] opacity-5 text-white">Rizwaan Ansari</p> */}
                <div className="flex flex-col gap-6 items-center">
                    <h2 className="text-lg md:text-xl italic text-slate-300 dark:text-neutral-400 hover:text-white text-center">&quot;Still loading... please wait while I figure out life&quot;</h2>
                    <div className="flex gap-6">
                        <Link href={"https://github.com/RizWaaN3024"}>
                            <Github className="text-slate-300 hover:text-white size-6 md:size-8" />
                        </Link>
                        <Link href={"https://www.linkedin.com/in/rizwaan-dev/"}>
                            <Linkedin className="text-slate-300 hover:text-white size-6 md:size-8" />
                        </Link>
                        <Link href={"mailto:rizwaan.ansari@proton.me"} target={"_blank"}>
                            <Mail className="text-slate-300 hover:text-white size-6 md:size-8" />
                        </Link>
                        <Link href={"https://x.com/Re3zU9"}>
                            <Twitter className="text-slate-300 hover:text-white size-6 md:size-8" />
                        </Link>
                        <Link href={"/"}>
                            <Instagram className="text-slate-300 hover:text-white size-6 md:size-8" />
                        </Link>
                    </div>
                    <div>
                        <p className="text-base md:text-lg text-slate-300 dark:text-neutral-400 hover:text-white">&copy;2025 • Made with ❤️ by Rizwaan</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
