import styles from './Callout.module.scss'

function Callout({ children, className, type, ...props }) {
  return (
    <div
      className={
        styles.callout +
        // TODO: Add type styles
        (type ? ' ' + styles[type] : '') +
        (className ? ' ' + className : '')
      }
      {...props}
    >
      {children}
    </div>
  )
}

export default Callout
