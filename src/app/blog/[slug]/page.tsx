import React from 'react';
import BlogDetailLayout from '@/app/components/blog/BlogDetailLayout';
import { getAllPosts, getPostBySlug } from '@/app/lib/posts';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

interface BlogDetailPageProps {
    params: {
        slug: string;
    };
}

// Generate MetaData
export async function generteMetadata({ params }: BlogDetailPageProps): Promise<Metadata> {
    const post = await getPostBySlug(params.slug);

    if (!post) {
        return {
            title: 'Page not found',
            description: 'The requested blog post could not be found'
        }
    }

    return {
        title: post.metadata.title,
        description: post.metadata.description,
        openGraph: {
            title: post.metadata.title,
            description: post.metadata.description,
            type: 'article',
            publishedTime: post.metadata.date,
            tags: post.metadata.tags
        },
        twitter: {
            card: 'summary_large_image',
            title: post.metadata.title,
            description: post.metadata.description
        }
    }
}

export async function generateStaticParams() {
    const posts = await getAllPosts();

    return posts.map((post) => ({
        slug: post.slug
    }));
}

const page = async ({ params }: BlogDetailPageProps) => {
    const post = await getPostBySlug(params.slug);

    if (!post) {
        notFound();
    }

    return (
        <BlogDetailLayout post={post} />
    )
}

export default page
