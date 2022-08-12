import fs from 'fs'
import matter from 'gray-matter'
import { join } from 'path'

export function getPosts() {
  const files = fs.readdirSync(join(process.cwd(), 'pages/posts'))

  const posts = files
    .map((file) => {
      const fileContent = fs.readFileSync(
        join(process.cwd(), 'pages/posts', file),
        'utf-8'
      )
      const { data } = matter(fileContent)
      const slug = '/posts/' + file.replace(/.mdx$/, '')
      return {
        slug,
        title: data.title,
        date: data.date,
        excerpt: data.excerpt,
      }
    })
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))

  return posts
}
