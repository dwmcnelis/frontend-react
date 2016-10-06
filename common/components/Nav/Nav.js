import React from 'react'
import IndexLink from 'react-router/lib/IndexLink'
import Link from 'react-router/lib/Link'
// import styles from './styles'
// import styleSheet from './styles'
// const classes = this.context.styleManager.render(styleSheet);
const classes = {link: 'link', activeLink: 'activeLink'}
const Nav = () => {
  return (
    <div>
      <IndexLink to='/' className={classes.link} >
        Home
      </IndexLink>
      <Link to='/posts' className={classes.link}> Feed
      </Link>
      <a href='https://github.com/dwmcnelis/frontend-react' className={classes.link} target='_blank'>GitHub</a>
    </div>
  )
}

export default Nav
