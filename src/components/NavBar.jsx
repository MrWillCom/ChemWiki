import styles from './NavBar.module.scss'
import Link from 'next/link'
import { useRouter } from 'next/router'

function NavigationItem({ className, children, match, ...props }) {
  const router = useRouter()

  return (
    <Link
      className={
        styles.navItem +
        (match && router.asPath.match(match) ? ' ' + styles.active : '') +
        (className ? ' ' + className : '')
      }
      {...props}
    >
      {children}
    </Link>
  )
}

function NavBar() {
  return (
    <nav className={styles.nav}>
      <NavigationItem href="/" match={/^\/$/}>
        ChemWiki
      </NavigationItem>
      <NavigationItem href="/definitions" match={/^\/definitions/}>
        定义
      </NavigationItem>
      <NavigationItem href="/elements" match={/^\/elements/}>
        元素
      </NavigationItem>
      <NavigationItem href="/substances" match={/^\/substances/}>
        物质
      </NavigationItem>
      <NavigationItem href="/experiments" match={/^\/experiments/}>
        实验
      </NavigationItem>
      <NavigationItem href="/appendix" match={/^\/appendix/}>
        附录
      </NavigationItem>
    </nav>
  )
}

export default NavBar
