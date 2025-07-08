import { generateSlugFromFilename, getAllMDXFilenames, parseFrontmatter, readMDXFile } from "./mdx"

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