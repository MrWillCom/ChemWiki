import styles from './Card.module.scss'

function Card({ children, className, ...props }) {
  return (
    <div
      className={styles.card + (className ? ' ' + className : '')}
      {...props}
    >
      {children}
    </div>
  )
}

function CardBody({ children, className, ...props }) {
  return (
    <div
      className={styles.cardBody + (className ? ' ' + className : '')}
      {...props}
    >
      {children}
    </div>
  )
}

function CardHeader({ children, className, ...props }) {
  return (
    <div
      className={styles.cardHeader + (className ? ' ' + className : '')}
      {...props}
    >
      {children}
    </div>
  )
}

function CardFooter({ children, className, ...props }) {
  return (
    <div
      className={styles.cardFooter + (className ? ' ' + className : '')}
      {...props}
    >
      {children}
    </div>
  )
}

export default Card
export { Card, CardBody, CardHeader, CardFooter }
