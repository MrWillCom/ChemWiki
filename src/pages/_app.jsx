import '@/styles/globals.scss'
import NavBar from '@/components/NavBar'
import 'lxgw-wenkai-webfont/style.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
    </>
  )
}
