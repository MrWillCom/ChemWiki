import styles from './Container.module.scss'

function Container({ size, children }) {
  return <div className={`${styles.container} ${styles[size]}`}>{children}</div>
}

export default Container
