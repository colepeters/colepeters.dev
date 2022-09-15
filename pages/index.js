import Head from 'next/head'
import Link from 'next/link'

import Box from '../components/Box'
import Text from '../components/Text'
import { getPosts } from '../lib/api'

export default function Home({ posts }) {
  return (
    <>
      <Head>
        <title>Cole Peters — frontend engineer</title>
        <meta
          name='description'
          content='For the past 15 years, I’ve been working at the intersection of design and engineering, with an emphasis on design systems, user interfaces, and frontend architecture. This blog documents some of my experience in writing.'
        />
      </Head>
      <Box as='main' my={5}>
        <Text>
          Hi, I’m Cole,{' '}
          <a href='https://colepeters.com'>a multidisciplinary artist</a>, and a
          frontend engineer by trade.
        </Text>
        <Text>
          For the past 15 years, I’ve been working at the intersection of design
          and engineering, with an emphasis on design systems, user interfaces,
          and frontend architecture. This blog documents some of my experience
          in writing.
        </Text>
        <Text>
          You can also find me on{' '}
          <a href='https://github.com/colepeters'>GitHub</a>,{' '}
          <a href='https://twitter.com/tiltedspheres'>Twitter</a>, and{' '}
          <a href='https://linkedin.com/in/tcptrs'>LinkedIn</a>.{' '}
          <em>
            (Psst: Looking to add a frontend engineer with deep design expertise
            to your team? I’m open for work!{' '}
            <a href='/cole-peters-cv.pdf' target='_blank'>
              Check out my CV
            </a>{' '}
            or{' '}
            <a href='https://colepeters.com/contact'>
              or send me an email via colepeters.dom
            </a>
            .
          </em>
        </Text>
      </Box>
      <Box as='section' my={5}>
        <Text as='h4' mt={0} mb={4}>
          Articles
        </Text>
        {posts.map((post) => (
          <Box mb={4} key={post.slug}>
            <Link href={post.slug}>
              <a style={{ textDecoration: 'none' }}>
                <Text
                  as='h5'
                  fontSize={2}
                  mt={0}
                  mb={2}
                  style={{ textDecoration: 'underline' }}
                >
                  {post.title}
                </Text>
                <Text fontSize={1} fontWeight='semibold'>
                  {post.date}
                </Text>
                <Text fontSize={1} mt={2}>
                  ‘{post.excerpt}’ &rarr;
                </Text>
              </a>
            </Link>
          </Box>
        ))}
      </Box>
    </>
  )
}

export function getStaticProps() {
  const posts = getPosts()

  return {
    props: {
      posts,
    },
  }
}
