import Link from 'next/link'

import Box from '../components/Box'
import Text from '../components/Text'
import { getSortedPostsData } from '../lib/api'

export default function Home({ posts }) {
  return (
    <>
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
          <a href='https://github.com/colepeters'>GitHub</a> and{' '}
          <a href='https://twitter.com/tiltedspheres'>Twitter</a>.
        </Text>
      </Box>
      <Box as='section' my={5}>
        <Text as='h4' mt={0} mb={4}>
          Articles
        </Text>
        {posts.map((post) => (
          <Box mb={4} key={post.slug}>
            <Link href={`/posts/${post.slug}`}>
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
  const posts = getSortedPostsData()

  return {
    props: {
      posts,
    },
  }
}
