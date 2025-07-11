import { MDXRemoteSerializeResult } from "next-mdx-remote";


export interface BlogMetadata {
    title: string;
    date: string;
    tags: string[];
    description?: string;
    published: boolean;
    slug: string;
    featuredImage: string;
}

export interface BlogPost {
    metadata: BlogMetadata;
    content: string;
    compiledContent?: MDXRemoteSerializeResult;
}

export interface BlogSummary {
    title: string;
    date: string;
    description?: string;
    slug: string;
    tags: string[];
}