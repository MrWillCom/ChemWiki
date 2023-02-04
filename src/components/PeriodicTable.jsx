import styles from './PeriodicTable.module.scss'
import elements from '../data/elements'

function generateTable() {
  var table = [
    [1, 'spacer', 2],
    [[3, 4], 'spacer', [5, 10]],
    [[11, 12], 'spacer', [13, 18]],
    [[19, 36]],
    [[37, 54]],
    [[55, 56], <Spacer label="57-71" noBorder />, [72, 86]],
    [[87, 88], <Spacer label="89-103" noBorder />, [104, 118]],
    ['spacer', [57, 71]],
    ['spacer', [89, 103]],
  ]

  table = table.map(row => {
    var newRow = []
    row.forEach(cell => {
      if (typeof cell === 'number') {
        newRow.push(<Element atomicNumber={cell} />)
      } else if (Array.isArray(cell)) {
        for (let i = cell[0]; i <= cell[1]; i++) {
          newRow.push(<Element atomicNumber={i} />)
        }
      } else {
        newRow.push(cell)
      }
    })

    if (newRow.length < 18 && newRow.find(cell => cell === 'spacer')) {
      newRow[newRow.findIndex(cell => cell === 'spacer')] = (l => {
        var arr = []
        for (let i = 0; i < l; i++) {
          arr.push(<Spacer />)
        }
        return arr
      })(18 - newRow.length + 1) // extra `1` is for the placeholder `'spacer'`
    }

    return newRow.flat()
  })

  return table
}

function Row({ children }) {
  return <div className={styles.row}>{children}</div>
}

function Element({ atomicNumber }) {
  return (
    <div className={styles.cell}>
      {elements[atomicNumber - 1].symbol} {elements[atomicNumber - 1].name}
    </div>
  )
}

function Spacer({ label }) {
  return <div className={styles.spacer}>{label}</div>
}

function PeriodicTable() {
  const table = generateTable()

  return (
    <div className={styles.table}>
      {table.map(row => (
        <Row>{row}</Row>
      ))}
    </div>
  )
}

export default PeriodicTable
