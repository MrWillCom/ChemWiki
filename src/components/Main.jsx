import styles from './Main.module.scss'

function Main({ children, className, ...props }) {
  return (
    <main
      className={styles.main + (className ? ' ' + className : '')}
      {...props}
    >
      {children}
    </main>
  )
}

export default Main
