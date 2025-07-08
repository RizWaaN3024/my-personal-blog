import React from 'react';
import { navLinks } from '../data/data';
import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="border-b-[0.5px] border-gray-800">
            <div className="lg:container mx-auto px-4">
                <div className="py-5 flex items-center justify-between">
                    <div>
                        <h1 className="font-semibold text-4xl">Rizwaan Ansari</h1>
                    </div>
                    <div className="flex items-center">
                        {navLinks.map((link, idx) => {
                            return (
                                <Link className="inline-flex py-4 px-8" href={link.href} key={`navLink-${idx}`} >{link.title}</Link>
                            )
                        })}
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
