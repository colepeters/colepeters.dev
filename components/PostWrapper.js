import Head from 'next/head'

export default function PostWrapper({ title, description, children }) {
  return (
    <>
      <Head>
        <title>Cole Peters — {title}</title>
        <meta name='description' content={description} />
      </Head>
      {children}
    </>
  )
}
