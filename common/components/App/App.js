import React from 'react'
import Helmet from 'react-helmet'
import Nav from '../Nav'
import styles from './styles'
import { MuiThemeProvider, getMuiTheme } from 'material-ui/styles'
import customTheme from '../../styles/customTheme'
import AppBar from 'material-ui/AppBar'
import { browserHistory } from 'react-router'

const goHome = function () {
  browserHistory.push('/')
}

const App = ({ children }) => (
  <MuiThemeProvider muiTheme={getMuiTheme(customTheme)}>
    <div>
      <AppBar title='ClientBuzz' style={styles.title} onLeftIconButtonTouchTap={goHome} />
      <Helmet title='ClientBuzz' titleTemplate='%s - React' />
      <Nav />
      {children}
      <footer style={styles.footer}>
        Copyright © 2016 <a href='https://github.com/dwmcnelis' target='_blank' style={styles.footerLink}>David McNelis</a>
      </footer>
    </div>
  </MuiThemeProvider>
)

export default App
