import styles from './NavBar.module.scss'
import Link from 'next/link'

function NavigationItem({ className, children, ...props }) {
  return (
    <Link
      className={styles.navItem + (className ? ' ' + className : '')}
      {...props}
    >
      {children}
    </Link>
  )
}

function NavBar() {
  return (
    <nav className={styles.nav}>
      <NavigationItem href="/">ChemWiki</NavigationItem>
      <NavigationItem href="/definitions">定义</NavigationItem>
      <NavigationItem href="/elements">元素</NavigationItem>
      <NavigationItem href="/substances">物质</NavigationItem>
      <NavigationItem href="/experiments">实验</NavigationItem>
      <NavigationItem href="/appendix">附录</NavigationItem>
    </nav>
  )
}

export default NavBar
