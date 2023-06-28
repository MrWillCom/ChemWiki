import styles from './ChapterTOC.module.scss'
import { Card, CardBody, CardHeader, CardFooter } from '@/components/Card'
import Link from 'next/link'

function ChapterTOC({ toc, className, ...props }) {
  return (
    <div className={className} {...props}>
      {toc.map(group => (
        <Card key={group.title}>
          <CardHeader>{group.title}</CardHeader>
          <CardBody>
            <ul className={styles.linkList}>
              {group.children.map(item => (
                <li key={item.href}>
                  <Link href={'/definitions' + item.href}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </CardBody>
          {group.description ? (
            <CardFooter>{group.description}</CardFooter>
          ) : null}
        </Card>
      ))}
    </div>
  )
}

export default ChapterTOC
