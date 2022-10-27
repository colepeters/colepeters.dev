import Head from 'next/head'
import Link from 'next/link'

import Box from '../components/Box'
import Text from '../components/Text'
import { getPosts } from '../lib/api'

export default function Home({ posts }) {
  return (
    <>
      <Head>
        <title>Cole Peters — design engineer</title>
        <meta
          name='description'
          content='For the past 15 years, I’ve been working at the intersection of design and engineering, with an emphasis on design systems, user interfaces, and frontend architecture. This blog documents some of my experience in writing.'
        />
      </Head>
      <Box as='main' my={5}>
        <Text>
          Hi, I’m Cole,{' '}
          <a href='https://colepeters.com'>a multidisciplinary artist</a>, and a
          design engineer by trade.
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
        </Text>
      </Box>
      <Box as='section' my={5}>
        <Text as='h3' mt={0} mb={4}>
          Articles
        </Text>
        {posts.map((post) => (
          <Box mb={4} key={post.slug}>
            <Link href={post.slug}>
              <a style={{ textDecoration: 'none' }}>
                <Text
                  as='h4'
                  fontWeight='bold'
                  fontFamily='body'
                  mt={0}
                  mb={3}
                  style={{ maxWidth: 'none', letterSpacing: '-0.0125em' }}
                >
                  {post.title}
                </Text>
                <Text mt={2}>
                  <Text as='span'>‘{post.excerpt}’ &rarr;</Text>
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
