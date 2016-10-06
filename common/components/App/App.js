import React from 'react'
import Helmet from 'react-helmet'
import Nav from '../Nav'
// import { createStyleManager } from 'jss-theme-reactor/styleManager'
import { createThemeProvider } from 'jss-theme-reactor/ThemeProvider'
import { createMuiTheme } from 'material-ui/styles/theme'
import { jss } from '../../../common/styles/jss'
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import { browserHistory } from 'react-router'

const MuiThemeProvider = createThemeProvider(createMuiTheme, () => jss)

const goHome = function () {
  browserHistory.push('/')
}
const classes = {footer: 'footer', footerLink: 'footerLink'}

const App = ({ children }) => {
  return (
    <MuiThemeProvider>
      <div>
        <Helmet title='ClientBuzz' titleTemplate='%s - React' />
        <AppBar primary>
          <div style={{display: 'inline-block'}}><IconButton href={'/'}>|||</IconButton><span>ClientBuzz</span><span style={{float: 'right'}}><a href={'/'}>logout</a></span></div>
        </AppBar>
        <br />
        <br />
        <br />
        <Nav />
        {children}
        <footer className={classes.footer}>
          Copyright © 2016 <a href='https://github.com/dwmcnelis' target='_blank' className={classes.footerLink}>David McNelis</a>
        </footer>
      </div>
    </MuiThemeProvider>
  )
}

export default App
