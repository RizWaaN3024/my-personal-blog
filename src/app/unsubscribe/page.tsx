'use client';

import { JSX, useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import axios from 'axios';

export default function UnsubscribePage(): JSX.Element {
    const searchParams = useSearchParams();
    const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');
    const [message, setMessage] = useState<string>('');

    useEffect(() => {
        const token = searchParams.get('token');

        if (!token) {
            setStatus('error');
            setMessage('Invalid unsubscribe link');
            return;
        }

        const unsubscribe = async (): Promise<void> => {
            try {
                const response = await axios.post('/api/unsubscribe', { token });
                
                setStatus('success');
                setMessage(response.data.message);
            } catch (error) {
                setStatus('error');
                if (axios.isAxiosError(error) && error.response) {
                    setMessage(error.response.data?.error || 'An error occurred');
                } else {
                    setMessage('Network error. Please try again.');
                }
            }
        };

        unsubscribe();
    }, [searchParams]);

    return (
        <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-black via-gray-900 to-black">
            <div className="max-w-md w-full bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] text-center">
                <h1 className="text-3xl font-bold mb-8 text-white">Unsubscribe</h1>

                {status === 'loading' && (
                    <div className="text-gray-300">
                        <div className="animate-spin rounded-full h-8 w-8 border-2 border-white/30 border-t-blue-400 mx-auto mb-4"></div>
                        <p className="text-lg">Processing your request...</p>
                    </div>
                )}

                {status === 'success' && (
                    <div>
                        <div 
                            className="text-6xl mb-6 text-green-400" 
                            style={{textShadow: '0 0 10px #10b981'}}
                        >
                            ✓
                        </div>
                        <p className="text-xl text-white mb-2">{message}</p>
                        <p className="text-sm text-gray-300 mt-4">
                            We&apos;re sorry to see you go. You can always resubscribe later.
                        </p>
                    </div>
                )}

                {status === 'error' && (
                    <div>
                        <div 
                            className="text-6xl mb-6 text-red-400" 
                            style={{textShadow: '0 0 10px #ef4444'}}
                        >
                            ✗
                        </div>
                        <p className="text-xl text-white">{message}</p>
                    </div>
                )}

                <Link
                    href="/"
                    className="inline-block mt-8 bg-blue-600/20 backdrop-blur-sm border border-blue-600/30 text-white py-3 px-6 rounded-xl hover:bg-blue-600/30 hover:-translate-y-0.5 hover:shadow-[0_12px_24px_0_rgba(59,130,246,0.2)] transition-all duration-300 font-medium"
                >
                    Back to Blog
                </Link>
            </div>
        </div>
    );
}