import { Link, useMatch, useResolvedPath } from 'react-router-dom'
import { Box } from '@primer/react'
import { UnderlineNav } from '@primer/react/drafts'

// https://primer.style/react/drafts/UnderlineNav2#with-react-router
function UnderlineNavItem({ to, children, ...rest }) {
  const resolved = useResolvedPath(to)
  const isCurrent = useMatch({ path: resolved.pathname, end: true })
  return (
    <UnderlineNav.Item
      as={Link}
      to={to}
      aria-current={isCurrent ? 'page' : undefined}
      {...rest}
    >
      {children}
    </UnderlineNav.Item>
  )
}

function NavBar() {
  return (
    <Box sx={{ width: '100%', position: 'fixed', top: 0, left: 0, right: 0,backdropFilter:'blur(16px)' }}>
      <UnderlineNav sx={{ maxWidth: 800, margin: 'auto' }}>
        <UnderlineNavItem to="/">ChemWiki</UnderlineNavItem>
        <UnderlineNavItem to="/definitions">定义</UnderlineNavItem>
        <UnderlineNavItem to="/elements">元素</UnderlineNavItem>
        <UnderlineNavItem to="/substances">物质</UnderlineNavItem>
        <UnderlineNavItem to="/experiments">实验</UnderlineNavItem>
        <UnderlineNavItem to="/appendix">附录</UnderlineNavItem>
      </UnderlineNav>
    </Box>
  )
}

export default NavBar
