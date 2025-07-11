import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React from 'react'

const SubscribeSection = () => {
    return (
        <section className="py-16 lg:py-20">
            <div className="lg:container mx-auto px-6 lg:px-4">
                <div className='flex flex-col items-center'>
                    <h2 className="text-xl lg:text-3xl font-bold leading-snug hover:underline hover:text-primary">Subscribe or your code will have bugs 🐛</h2>
                    <p className='text-center pt-4 max-w-120'>Join developers who&apos;ve seriously considered becoming farmers after seeing a merge conflict</p>
                    <div className="max-w-140 w-full flex items-center mt-6 gap-6 relative">
                        <Input placeholder="your-email@definitely-not-spam.com" className="placeholder:text-slate-500 rounded-md"></Input>
                        <Button className="text-slate-800 cursor-pointer">Subscribe</Button>
                        <div className='absolute -right-1 -top-1'>
                            <div className='size-3 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 animate-pulse shadow-lg'></div>
                            <div className='absolute inset-0 size-3 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 animate-ping opacity-40'></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SubscribeSection
