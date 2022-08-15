import Head from 'next/head'

import Text from './Text'

export default function PostWrapper({ title, date, description, children }) {
  return (
    <>
      <Head>
        <title>Cole Peters — {title}</title>
        <meta name='description' content={description} />
      </Head>
      <article>
        <Text as='h1' mb={[4, null, 5]}>
          {title}
        </Text>
        <Text fontWeight='semibold'>
          <time dateTime={date}>{date.replaceAll('-', '/')}</time>
        </Text>
        {children}
      </article>
    </>
  )
}
