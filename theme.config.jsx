import { useRouter } from "next/router"

export default {
  logo: <span>ChemWiki</span>,
  project: {
    link: 'https://github.com/MrWillCom/ChemWiki',
  },

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
