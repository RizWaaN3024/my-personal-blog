import {
    generateSlugFromFilename,
    getAllMDXFilenames,
    getPostBySlug as getMDXPostBySlug,
    parseFrontmatter,
    readMDXFile
} from "./mdx"
import { BlogMetadata, BlogPost } from '../types/blog';

export async function getAllPosts() {
    const filenames = getAllMDXFilenames();

    const posts = [];

    for (const filename of filenames) {

        const rawContent = readMDXFile(filename);
        const { metadata } = parseFrontmatter(rawContent);

        metadata.slug = generateSlugFromFilename(filename);

        if (metadata.published) {
            posts.push(metadata);
        }
    }

    return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
    try {
        const post = await getMDXPostBySlug(slug);

        if (post?.metadata?.published) {
            return post;
        }

        return null;
    } catch (error) {
        console.log(`Post not found ${slug}`, error);
        return null;
    }
}

export async function getPostByTag(tag: string): Promise<BlogMetadata[]> {
    const allPosts = await getAllPosts();

    const filteredPosts = allPosts.filter(post => post.tags.includes(tag));
    console.log(`Found ${filteredPosts.length} with the tag: ${tag}`);
    return filteredPosts;
}