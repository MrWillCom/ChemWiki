import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="zh-CN">
      <Head>
        <meta name="color-scheme" content="light dark" />
      </Head>
      <body mode="ios">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
