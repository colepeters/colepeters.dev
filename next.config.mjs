import rehypeHighlight from 'rehype-highlight'
import remarkFrontmatter from 'remark-frontmatter'
import remarkGFM from 'remark-gfm'

/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects() {
    return [
      {
        source: '/posts/:path*',
        destination: 'https://normalflow.pub/posts/:path*',
        permanent: true
      },
      {
        source: '/',
        destination: 'https://normalflow.pub',
        permanent: true,
      },
    ]
  },
  compiler: {
    styledComponents: true,
  },
  experimental: {
    images: {
      allowFutureImage: true,
    },
  },
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.mdx?$/,
      use: [
        options.defaultLoaders.babel,
        {
          loader: '@mdx-js/loader',
          options: {
            providerImportSource: '@mdx-js/react',
            remarkPlugins: [remarkFrontmatter, remarkGFM],
            rehypePlugins: [rehypeHighlight],
          },
        },
      ],
    })

    return config
  },
}

export default nextConfig
