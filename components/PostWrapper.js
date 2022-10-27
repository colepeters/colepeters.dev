import Head from 'next/head'

import Text from './Text'

export default function PostWrapper({ title, date, description, children }) {
  return (
    <>
      <Head>
        <title>Cole Peters — {title}</title>
        <meta name='description' content={description} />
        <meta property='og:title' content={title} />
        <meta property='og:type' content='article' />
        <meta property='og:description' content={description} />
        <meta property='og:locale' content='en_CA' />
      </Head>
      <article>
        <Text as='h1' mb={[4, null, 5]}>
          {title}
        </Text>
        <Text fontWeight='semibold' textAlign='center'>
          <time dateTime={date}>{date.replaceAll('-', '/')}</time>
        </Text>
        {children}
      </article>
    </>
  )
}
