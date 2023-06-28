import styles from './index.module.scss'
import Container from '@/components/Container'
import Main from '@/components/Main'
import ChapterTOC from '@/components/ChapterTOC'

import { definitions as toc } from '@/data/toc'

function DefinitionsPage() {
  return (
    <Main>
      <Container size="lg">
        <ChapterTOC toc={toc} className={styles.toc} />
      </Container>
    </Main>
  )
}

export default DefinitionsPage
