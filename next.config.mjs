import nextra from 'nextra'

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx',
  latex: {
    renderer: 'katex',
    options: {
      macros: {
        '\\celsius': '\\degree\\rm{C}',
      },
    },
  },
})

export default withNextra()

// If you have other Next.js configurations, you can pass them as the parameter:
// module.exports = withNextra({ /* other next.js config */ })
