import React from 'react'
import { connect } from 'react-redux'
import Helmet from 'react-helmet'
import Nav from '../Nav'
// import { createStyleManager } from 'jss-theme-reactor/styleManager'
import { createThemeProvider } from 'jss-theme-reactor/ThemeProvider'
import { createMuiTheme } from 'material-ui/styles/theme'
import { jss } from '../../../common/styles/jss'
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import Button from 'material-ui/Button'
// import { browserHistory } from 'react-router'
import Code from '../Code'

const MuiThemeProvider = createThemeProvider(createMuiTheme, () => jss)

// const goHome = function () {
//   browserHistory.push('/')
// }
const classes = {footer: 'footer', footerLink: 'footerLink'}

class App extends React.Component {

  posts = () => this.props.history.push('/posts')

  clients = () => this.props.history.push('/clients')

  login = () => this.props.history.push('/login')

  logout = () => this.props.history.push('/logout')

  render () {
    const {
      children,
      state
    } = this.props
    const debug = true
    const styles = {}

    return (
      <MuiThemeProvider>
        <div>
          <Helmet title='ClientBuzz' titleTemplate='%s - React' />
          <AppBar primary>
            <div style={{display: 'inline-block'}}>
              <IconButton href={'/'}>|||</IconButton>
              <span>ClientBuzz&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <Button raised className={'barbutton'} onClick={this.posts}>Posts</Button>
              <Button raised className={'barbutton'} onClick={this.clients}>Clients</Button>
              <Button raised className={'barbutton'} onClick={this.login}>Login</Button>
              <Button raised className={'barbutton'} onClick={this.logout}>Logout</Button>
            </div>
          </AppBar>
          <br />
          <br />
          <br />
          {children}
          <br />
          {debug &&
            <div>
              <Code code={state} />
            </div>
          }

          <footer className={classes.footer}>
            Copyright © 2016 <a href='https://github.com/dwmcnelis' target='_blank' className={classes.footerLink}>David McNelis</a>
          </footer>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default connect(
    (state) => ({
      state: state
    })
)(App)
