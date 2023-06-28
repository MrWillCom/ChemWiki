import rehypeKatex from './src/modules/rehype-katex/index.js'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import nextMDX from '@next/mdx'

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    // If you use remark-gfm, you'll need to use next.config.mjs
    // as the package is ESM only
    // https://github.com/remarkjs/remark-gfm#install
    remarkPlugins: [remarkGfm, remarkMath],
    rehypePlugins: [rehypeKatex],
    // If you use `MDXProvider`, uncomment the following line.
    // providerImportSource: "@mdx-js/react",
  },
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/definition/:slug*',
        destination: '/definitions/:slug*',
        permanent: true,
      },
      {
        source: '/substances/sulfur',
        destination: '/elements/S',
        permanent: true,
      },
      {
        source: '/substances/chlorine',
        destination: '/elements/Cl',
        permanent: true,
      },
      {
        source: '/substances/bromine',
        destination: '/elements/Br',
        permanent: true,
      },
    ]
  },
}

export default withMDX(nextConfig)
