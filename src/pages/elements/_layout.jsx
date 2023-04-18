import Main from '@/components/Main'
import Container from '@/components/Container'
import elements from '@/data/elements'
import styles from './_layout.module.scss'

function ElementPageLayout({ symbol, children }) {
  const data = elements.find(x => x.symbol === symbol)

  function DataItem({ label, value, className, ...props }) {
    return (
      <div
        className={styles.dataItem + (className ? ' ' + className : '')}
        {...props}
      >
        <label>{label}</label>
        <output>{value}</output>
      </div>
    )
  }

  return (
    <Main>
      <Container size="lg" className={styles.splitView}>
        <aside className={styles.aside}>
          <div className={styles.basics}>
            <h1 className={styles.title}>{data.symbol}</h1>
            <div className={styles.data}>
              <DataItem label="名称" value={data.name} />
              <DataItem label="英文名称" value={data.englishName} />
              <DataItem label="序数" value={data.atomicNumber} />
              <DataItem label="族" value={data.group} />
              <DataItem label="周期" value={data.period} />
              <DataItem label="相对原子质量" value={data.atomicMass} />
            </div>
          </div>
        </aside>
        <div className={styles.content}>{children}</div>
      </Container>
    </Main>
  )
}

export default ElementPageLayout