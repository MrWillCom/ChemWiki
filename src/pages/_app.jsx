import 'katex/dist/katex.min.css'

import '@/styles/globals.scss'
import NavBar from '@/components/NavBar'

export default function App({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
    </>
  )
}
