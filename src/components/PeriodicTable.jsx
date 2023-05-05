import styles from './PeriodicTable.module.scss'
import elements from '@/data/elements'
import Segment from './Segment'
import Link from 'next/link'
import useCookie from '@/utilities/useCookie'
import ElementGroup from './ElementGroup'

function generateTable({
  symbol,
  selectedElement,
  setSelectedElement,
  mini,
  interactive,
}) {
  var table = [
    [1, 'spacer', 2],
    [[3, 4], 'spacer', [5, 10]],
    [[11, 12], 'spacer', [13, 18]],
    [[19, 36]],
    [[37, 54]],
    [
      [55, 56],
      <Spacer label="57-71" highlight key="l0" mini={mini} />,
      [72, 86],
    ],
    [
      [87, 88],
      <Spacer label="89-103" highlight key="l1" mini={mini} />,
      [104, 118],
    ],
    ['spacer', [57, 71]],
    ['spacer', [89, 103]],
  ]
  var spacerKey = 0

  table = table.map(row => {
    var newRow = []
    row.forEach(cell => {
      if (typeof cell === 'number') {
        newRow.push(
          <Element
            atomicNumber={cell}
            symbol={symbol}
            active={cell === selectedElement}
            onClick={() => {
              setSelectedElement(cell)
            }}
            key={cell}
            mini={mini}
            interactive={interactive}
          />,
        )
      } else if (Array.isArray(cell)) {
        for (let i = cell[0]; i <= cell[1]; i++) {
          newRow.push(
            <Element
              atomicNumber={i}
              symbol={symbol}
              active={i === selectedElement}
              onClick={() => {
                setSelectedElement(i)
              }}
              key={i}
              mini={mini}
              interactive={interactive}
            />,
          )
        }
      } else {
        newRow.push(cell)
      }
    })

    if (newRow.length < 18 && newRow.find(cell => cell === 'spacer')) {
      newRow[newRow.findIndex(cell => cell === 'spacer')] = (l => {
        var arr = []
        for (let i = 0; i < l; i++) {
          arr.push(<Spacer key={'s' + spacerKey} mini={mini} />)
          spacerKey++
        }
        return arr
      })(18 - newRow.length + 1) // extra `1` is for the placeholder `'spacer'`
    }

    return newRow.flat()
  })

  return table.flat()
}

function Element({
  atomicNumber,
  symbol,
  active,
  mini,
  interactive,
  ...props
}) {
  const element = elements[atomicNumber - 1]

  return (
    <button
      className={styles.cell + (active ? ' ' + styles.active : '')}
      disabled={!interactive}
      {...props}
    >
      {mini ? (
        <></>
      ) : (
        <>
          <span className={styles.atomicNumber}>{element.atomicNumber}</span>
          {symbol === 'symbol' ? (
            <span className={styles.symbol}>{element.symbol}</span>
          ) : symbol === 'name' ? (
            <span className={styles.name}>{element.name}</span>
          ) : null}
          <span className={styles.atomicMass}>{element.atomicMass}</span>
        </>
      )}
    </button>
  )
}

function Spacer({ label, className, highlight, mini, ...props }) {
  return (
    <div
      className={
        styles.spacer +
        (className ? ' ' + className : '') +
        (highlight ? ' ' + styles.highlight : '')
      }
      {...props}
    >
      {mini ? null : label}
    </div>
  )
}

function ElementDisplay({ atomicNumber, className }) {
  const element = elements[atomicNumber - 1]

  function Data({ dataKey, value }) {
    return (
      <>
        <div className={styles.dataKey}>{dataKey}</div>
        <div className={styles.value}>{value}</div>
      </>
    )
  }

  return (
    <div className={styles.elementDisplay + (className ? ' ' + className : '')}>
      <div className={styles.left}>
        <div className={styles.symbol}>{element.symbol}</div>
      </div>
      <div className={styles.right}>
        <Data dataKey="序数" value={element.atomicNumber} />
        <Data dataKey="名称" value={element.name} />
        <Data dataKey="英文名称" value={element.englishName} />
        <Data dataKey="族" value={<ElementGroup n={element.group} />} />
        <Data dataKey="周期" value={element.period} />
        <Data dataKey="相对原子质量" value={element.atomicMass} />
      </div>
    </div>
  )
}

function PeriodicTable({ className, mini, interactive = true }) {
  const [selectedElement, setSelectedElement] = useCookie('ptEl', 1, val => {
    return parseInt(val, 10)
  })

  const [selectedSymbol, setSelectedSymbol] = useCookie('ptSymbol', 'symbol')

  return (
    <>
      <div
        className={
          styles.table +
          (className ? ' ' + className : '') +
          (mini ? ' ' + styles.mini : '')
        }
      >
        {generateTable({
          symbol: selectedSymbol,
          selectedElement,
          setSelectedElement,
          mini,
          interactive,
        })}
      </div>
      {mini ? (
        <></>
      ) : (
        <div className={styles.controls}>
          <div className={styles.options}>
            <Segment onChange={setSelectedSymbol}>
              <Segment.Button
                value="symbol"
                selected={selectedSymbol === 'symbol'}
              >
                元素符号
              </Segment.Button>
              <Segment.Button value="name" selected={selectedSymbol === 'name'}>
                元素名称
              </Segment.Button>
            </Segment>
          </div>
          <ElementDisplay
            atomicNumber={selectedElement}
            className={styles.display}
          />
          <div className={styles.actions}>
            <Link href={'/elements/' + elements[selectedElement - 1].symbol}>
              阅读文档
            </Link>
          </div>
        </div>
      )}
    </>
  )
}

export default PeriodicTable
