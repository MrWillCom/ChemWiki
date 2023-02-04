import './Home.module.scss'
import MDX from './Home.mdx'
import Markdown from '../components/Markdown'

function HomePage() {
  return (
    <Markdown>
      <MDX />
    </Markdown>
  )
}

export default HomePage
