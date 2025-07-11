import { Github, Linkedin, Mail, Twitter } from "lucide-react"
import Link from "next/link"

const Navbar = () => {
    return (
        <nav className="border-b-[0.5px] border-gray-800">
            <div className="lg:container mx-auto px-4">
                <div className="py-5 flex items-center justify-between">
                    <Link href={"/"}>
                        <h1 className="font-semibold text-2xl md:text-3xl lg:text-4xl">Rizwaan.dev</h1>
                    </Link>
                    <div className="flex items-center gap-3 sm:gap-5 md:gap-8">
                        <Link href={"https://github.com/RizWaaN3024"}>
                            <Github className="text-slate-300 hover:text-white max-[435px]:size-5 size-6 md:size-8" />
                        </Link>
                        <Link href={"https://www.linkedin.com/in/rizwaan-dev/"}>
                            <Linkedin className="text-slate-300 hover:text-white max-[435px]:size-5 size-6 md:size-8" />
                        </Link>
                        <Link href={"mailto:rizwaan.ansari@proton.me"} target={"_blank"}>
                            <Mail className="text-slate-300 hover:text-white max-[435px]:size-5 size-6 md:size-8" />
                        </Link>
                        <Link href={"https://x.com/Re3zU9"}>
                            <Twitter className="text-slate-300 hover:text-white max-[435px]:size-5 size-6 md:size-8" />
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
