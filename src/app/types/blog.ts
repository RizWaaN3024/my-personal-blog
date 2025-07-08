

export interface BlogMetadata {
    title: string;
    date: string;
    tags: string[];
    description?: string;
    published: boolean;
    slug: string;
}

export interface BlogPost {
    metadata: BlogMetadata;
    content: string;
    compiledContent?: unknown;
}

export interface BlogSummary {
    title: string;
    date: string;
    description?: string;
    slug: string;
    tags: string[];
}