import { useRouter } from "next/router"

export default {
  logo: <span>ChemWiki</span>,
  project: {
    link: 'https://github.com/MrWillCom/ChemWiki',
  },
  head: <>
    <link rel="stylesheet" href="https://unpkg.com/katex@0.16.4/dist/katex.min.css" />
  </>,

  useNextSeoProps() {
    const { route } = useRouter()
    if (route !== '/') {
      return {
        titleTemplate: '%s · ChemWiki'
      }
    } else {
      return {
        titleTemplate: 'ChemWiki'
      }
    }
  },
}
