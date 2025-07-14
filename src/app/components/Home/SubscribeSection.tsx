"use client";
import React from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import z from 'zod'
import { useForm } from 'react-hook-form';
import { Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const subscribeFormSchema = z.object({
    email: z.email({ error: "Please enter a valid email" })
});

type formSchemaType = z.infer<typeof subscribeFormSchema>;

const SubscribeSection = () => {
    const handleSubscribeFormSubmit = (data: any) => {
        alert(JSON.stringify(data, null, 4))
    }
    const { 
        handleSubmit, 
        control,
        formState:{ errors }
    } = useForm<formSchemaType>({
        resolver: zodResolver(subscribeFormSchema),
        defaultValues: {
            email: ""
        }
    });
    return (
        <section className="py-16 lg:py-20">
            <div className="lg:container mx-auto px-6 lg:px-4">
                <div className='flex flex-col items-center'>
                    <h2 className="text-xl lg:text-3xl font-bold leading-snug hover:underline hover:text-primary text-center">Subscribe or your code will have bugs 🐛</h2>
                    <p className='text-center pt-4 max-w-120'>Join developers who&apos;ve seriously considered becoming farmers after seeing a merge conflict</p>
                    <div className="max-w-140 w-full flex max-md:flex-col items-center mt-6 gap-8 md:gap-6 relative">
                        <Controller 
                            name={"email"}
                            control={control}
                            render={({ field }) => (
                                <Input 
                                {...field}
                                placeholder="your-email@definitely-not-spam.com" 
                                className="placeholder:text-slate-500 rounded-md" />
                            )}
                        />
                        <Button className="text-slate-800 w-full max-[639px]:max-w-35 sm:max-w-100 md:max-w-35 cursor-pointer relative" onClick={handleSubmit(handleSubscribeFormSubmit)}>Subscribe
                            <div className='absolute -right-1 -top-1'>
                                <div className='size-3 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 animate-pulse shadow-lg'></div>
                                <div className='absolute inset-0 size-3 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 animate-ping opacity-40'></div>
                            </div>
                        </Button>
                        {errors?.email && <p className="absolute top-[30%] md:top-[100%] left-2 text-sm text-red-500 mt-2">{errors?.email?.message}</p>}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SubscribeSection
