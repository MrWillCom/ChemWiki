import styles from './ArticleView.module.scss'
import Container from './Container'

function ArticleView({ aside, content, className, ...props }) {
  return (
    <Container
      size="lg"
      className={styles.splitView + (className ? ' ' + className : '')}
      {...props}
    >
      <aside className={styles.aside}>{aside}</aside>
      <div className={styles.content}>{content}</div>
    </Container>
  )
}

export default ArticleView
