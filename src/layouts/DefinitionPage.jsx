import Main from '@/components/Main'
import ArticleView from '@/components/ArticleView'
import { definitions as toc } from '@/data/toc'
import ChapterTOC from '@/components/ChapterTOC'

function DefinitionPageLayout({ children }) {
  return (
    <Main>
      <ArticleView aside={<ChapterTOC toc={toc} />} content={children} />
    </Main>
  )
}

export default DefinitionPageLayout
