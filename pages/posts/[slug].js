import { getMDXComponent } from 'mdx-bundler/client'
import Head from 'next/head'
import { useMemo } from 'react'

import { getAllPostSlugs, getPostData } from '../../lib/api'

export default function Post({ postData }) {
  const { code, frontmatter } = postData
  const Component = useMemo(() => getMDXComponent(code), [code])

  return (
    <>
      <Head>
        <title>Cole Peters — {frontmatter.title}</title>
        <meta name='description' content={frontmatter.excerpt} />
      </Head>
      <article>
        <Component />
      </article>
    </>
  )
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.slug)

  return {
    props: {
      postData,
    },
  }
}

export function getStaticPaths() {
  const paths = getAllPostSlugs()

  return {
    paths,
    fallback: false,
  }
}
