import remarkMath from "remark-math";
import rehypeMathjax from "rehype-mathjax";
import nextra from "nextra";

const withNextra = nextra({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.jsx",
  mdxOptions: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeMathjax],
  },
});

export default withNextra();

// If you have other Next.js configurations, you can pass them as the parameter:
// module.exports = withNextra({ /* other next.js config */ })
