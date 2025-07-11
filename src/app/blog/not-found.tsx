import Link from 'next/link';
import { ArrowLeft, FileX } from 'lucide-react';

export default function BlogNotFound() {
    return (
        <div className="min-h-screen bg-white dark:bg-slate-900 flex items-center justify-center">
            <div className="max-w-md mx-auto text-center px-4">
                <div className="mb-8">
                    <FileX size={64} className="mx-auto text-slate-400 dark:text-slate-600 mb-4" />
                    <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-2">
                        Post Not Found
                    </h1>
                    <p className="text-slate-600 dark:text-slate-300 mb-8">
                        The blog post you're looking for doesn't exist or has been moved.
                    </p>
                </div>

                <div className="space-y-4">
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                    >
                        <ArrowLeft size={20} />
                        Back to Blog
                    </Link>

                    <div className="text-sm text-slate-500 dark:text-slate-400">
                        <Link href="/" className="hover:text-primary transition-colors">
                            Return to Homepage
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}