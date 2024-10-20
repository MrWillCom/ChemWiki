import { useRouter } from 'next/router'
import { useConfig } from 'nextra-theme-docs'

export default {
  docsRepositoryBase: 'https://github.com/MrWillCom/ChemWiki/tree/main',
  head() {
    const { asPath, defaultLocale, locale } = useRouter()
    const { frontMatter, title } = useConfig()
    const url =
      'https://chemwiki.mrwillcom.com' +
      (defaultLocale === locale ? asPath : `/${locale}${asPath}`)

    return (
      <>
        <title>{title + ' · ChemWiki'}</title>
        <meta property="og:url" content={url} />
        <meta property="og:title" content={title + ' · ChemWiki'} />
        <meta
          property="og:description"
          content={frontMatter.description || '中学化学知识库'}
        />
      </>
    )
  },
  logo: <span>ChemWiki</span>,
  project: {
    link: 'https://github.com/MrWillCom/ChemWiki',
  },
  search: {
    emptyResult: (
      <div className="nx-mt-4 nx-flex nx-justify-center nx-items-center nx-text-gray-500 nx-font-semibold nx-text-s nx-select-none">
        没有结果
      </div>
    ),
    loading: '加载中...',
    placeholder: '搜索',
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
  },
  themeSwitch: {
    useOptions() {
      return {
        light: '浅色',
        dark: '深色',
        system: '跟随系统',
      }
    },
  },
  toc: {
    title: null,
    backToTop: '返回顶部',
  },
  editLink: {
    content: '编辑本页面 ↗',
  },
  feedback: {
    content: '有问题？前往反馈 ↗',
  },
  footer: {
    content: (
      <span>
        {new Date().getFullYear() === 2022
          ? '2022'
          : '2022 - ' + new Date().getFullYear()}{' '}
        · By all{' '}
        <a href="https://github.com/MrWillCom/ChemWiki" target="_blank">
          ChemWiki
        </a>{' '}
        contributors with ❤️.
      </span>
    ),
  },
}
