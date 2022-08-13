import fs from 'fs'
import matter from 'gray-matter'
import { bundleMDX } from 'mdx-bundler'
import path from 'path'
import remarkGfm from 'remark-gfm'
import remarkMdxImages from 'remark-mdx-images'

const postsDirectory = path.join(process.cwd(), 'posts')

export async function getPostData(slug) {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`)
  const source = fs.readFileSync(fullPath, 'utf-8')

  const { code, frontmatter } = await bundleMDX({
    source,
    mdxOptions(options) {
      options.remarkPlugins = [
        ...(options.remarkPlugins ?? []),
        remarkGfm,
        remarkMdxImages,
      ]
      return options
    },
    esbuildOptions(options) {
      options.loader = {
        ...options.loader,
        '.jpg': 'dataurl',
      }
      return options
    },
  })

  return {
    slug,
    frontmatter,
    code,
  }
}

export function getSortedPostsData() {
  const filenames = fs.readdirSync(postsDirectory)
  const allPostsData = filenames.map((filename) => {
    const slug = filename.replace(/\.mdx$/, '')
    const fullPath = path.join(postsDirectory, filename)
    const fileContents = fs.readFileSync(fullPath, 'utf-8')
    const { data } = matter(fileContents)
    return {
      slug,
      title: data.title,
      date: data.date,
      excerpt: data.excerpt,
    }
  })

  return allPostsData.sort((post1, post2) => (post1.date < post2.date ? 1 : -1))
}

export function getAllPostSlugs() {
  const filenames = fs.readdirSync(postsDirectory)
  return filenames.map((filename) => ({
    params: {
      slug: filename.replace(/\.mdx$/, ''),
    },
  }))
}
