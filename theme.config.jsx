import { useRouter } from "next/router"
import { useConfig } from 'nextra-theme-docs'

export default {
  docsRepositoryBase: 'https://github.com/MrWillCom/ChemWiki/tree/main',
  head: () => {
    const { asPath } = useRouter()
    const { frontMatter, title } = useConfig()
    return <>
      <meta property="og:url" content={`https://chemwiki.mrwillcom.com${asPath}`} />
      <meta property="og:title" content={title + ' · ChemWiki'} />
      <meta property="og:description" content={frontMatter.description || '中学化学知识库'} />
    </>
  },
  logo: <span>ChemWiki</span>,
  project: {
    link: 'https://github.com/MrWillCom/ChemWiki',
  },
  search: {
    emptyResult: <div className="nx-mt-4 nx-flex nx-justify-center nx-items-center nx-text-gray-500 nx-font-semibold nx-text-s nx-select-none">没有结果</div>,
    loading: '加载中...',
    placeholder: '搜索',
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
  },
  toc: {
    title: null,
  },
  editLink: {
    text: '编辑本页面 ↗',
  },
  feedback: {
    content: '有问题？前往反馈 ↗',
  },
  footer: {
    text: <span>{new Date().getFullYear() === 2022 ? '2022' : '2022 - ' + new Date().getFullYear()} · By all <a href="https://github.com/MrWillCom/ChemWiki" target="_blank">ChemWiki</a> contributors with ❤️.</span>,
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
