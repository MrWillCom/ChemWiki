import './Home.module.scss'
import Content from './Home.mdx'
import Markdown from '../components/Markdown'
import Container from '../components/Container'

function HomePage() {
  return (
    <Container>
      <Markdown>
        <Content />
      </Markdown>
    </Container>
  )
}

export default HomePage
