import styles from './ChapterTOC.module.scss'
import { Card, CardBody, CardHeader, CardFooter } from '@/components/Card'
import Link from 'next/link'

function ChapterTOC({ toc, compact, className, ...props }) {
  return (
    <div className={(compact ? styles.compact : '') + (className ? ' ' + className: '')} {...props}>
      {toc.map(group => (
        <Card key={group.title} className={styles.card}>
          <CardHeader className={styles.cardHeader}>{group.title}</CardHeader>
          <CardBody className={styles.cardBody}>
            <ul className={styles.linkList}>
              {group.children.map(item => (
                <li key={item.href}>
                  <Link href={'/definitions' + item.href}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </CardBody>
          {group.description && !compact ? (
            <CardFooter>{group.description}</CardFooter>
          ) : null}
        </Card>
      ))}
    </div>
  )
}

export default ChapterTOC
