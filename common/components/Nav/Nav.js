import React from 'react'
import IndexLink from 'react-router/lib/IndexLink'
import Link from 'react-router/lib/Link'
import styles from './styles'

const Nav = () => (
  <div>
    <IndexLink to='/' style={styles.link} activeStyle={styles.activeLink}>
      Home
    </IndexLink>
    <Link to='/posts' style={styles.link} activeStyle={styles.activeLink}> Feed
    </Link>
    <a href='https://github.com/dwmcnelis/frontend-react' style={styles.link} target='_blank'>GitHub</a>
  </div>
)

export default Nav
