import styles from './Container.module.scss'

function Container({
  children,
  className,
  size,
  marginX,
  marginY,
  paddingX,
  paddingY,
  ...props
}) {
  return (
    <div
      className={
        styles.container +
        (size === 'lg' ? ' ' + styles.lg : '') +
        (className ? ' ' + className : '')
      }
      style={{
        '--margin-x': typeof marginX === 'number' ? marginX + 'px' : marginX,
        '--margin-y': typeof marginY === 'number' ? marginY + 'px' : marginY,
        '--padding-x':
          typeof paddingX === 'number' ? paddingX + 'px' : paddingX,
        '--padding-y':
          typeof paddingY === 'number' ? paddingY + 'px' : paddingY,
      }}
      {...props}
    >
      {children}
    </div>
  )
}

export default Container
