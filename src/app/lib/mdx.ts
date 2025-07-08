import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { BlogMetadata, BlogPost } from '../types/blog';
import { serialize } from 'next-mdx-remote/serialize';

const POSTS_DIRECTORY = path.join(process.cwd(), 'content', 'posts');

// Step 1- We have to read MDX files
export function readMDXFile(filename: string): string {
    try {
        const fullPath = path.join(POSTS_DIRECTORY, filename);

        const fileContent = fs.readFileSync(fullPath, 'utf8');

        console.log(`Successfully Read File ${filename}`);
        return fileContent;
    } catch (error) {
        console.error(`Error reading file ${filename}`, error);
        throw new Error(`Failed to read MDX file ${filename}`);
    }
}

/**
 * Step 2: We have to now Parse FrontMatter
 * Purpose: To seperate the metaData from MDX content using gray-matter 
 * */ 
export function parseFrontmatter(rawContent: string): { metadata: BlogMetadata, content: string} {
    try {
        const { data, content } = matter(rawContent);

        if (!data.title) {
            throw new Error("Title is required in front matter");
        }
        if (!data.date) {
            throw new Error("Date is required in front matter");
        }

        const metadata: BlogMetadata = {
            title: data.title,
            date: data.date,
            tags: Array.isArray(data.tags) ? data.tags : [],
            description: data.description || "",
            published: data.published !== false,
            slug: data.slug || ""
        };

        console.log(`Successfully parsed Front matter for: ${metadata.title}`);
        return { metadata, content };
    } catch (error) {
        console.log(`Error parsing Front Matter`, error);
        throw new Error(`Failed to parse FrontMatter`);
    }
}

/**
 * Step 3: Compile MDX content
 * Purpose: Converts MDX content to renderable React components
 */
export async function compileMDXContent(content: string) {
    try {
        const compiledContent = await serialize(content, {
            mdxOptions: {
                remarkPlugins: [],
                rehypePlugins: [],
                format: 'mdx'
            }
        })

        console.log("Successfully compiled MDX content");
        return compiledContent;
    } catch (error) {
        console.log(`Error compiling MDX content`, error);
        throw new Error(`Failed to compile MDX content`);
    }
}

/**
 * Generate slug from filename
 * Purpose: Create URL friendly slug from filename
 */
export function generateSlugFromFilename(filename: string): string {
    return filename.replace(/\.mdx$/, '');
}

/**
 * Step 4: Get Complete Post by slug
 * Purpose: Combines all the above functions to get a complete blog post
 */
export async function getPostBySlug(slug: string): Promise<BlogPost> {
    try {

        const filename = `${slug}.mdx`;
        const rawContent = readMDXFile(filename);
        const { metadata, content } = parseFrontmatter(rawContent);

        metadata.slug = slug;

        const compiledContent = await compileMDXContent(content);

        const post: BlogPost = {
            metadata,
            content,
            compiledContent
        };

        return post;

    } catch (error) {
        console.log(`Error getting post by slug ${slug}`, error);
        throw new Error(`Failed to get post by slug: ${slug}`);
    }
}

/**
 * A function to get all the filenames for the blog listing page
 * Purpose: List all the filenames in the current directory
 * It will output an array of filenames
 */
export function getAllMDXFilenames(): string[] {
    try {
        const files = fs.readdirSync(POSTS_DIRECTORY);

        const mdxFiles = files.filter(file => file.endsWith('.mdx'));

        console.log(`Found ${mdxFiles.length} MDX files`);
        return mdxFiles;
    } catch (error) {
        console.log("Error reading posts directory", error);
        throw new Error("Failed to read posts directory");
    }
}