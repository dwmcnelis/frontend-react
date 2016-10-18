import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import Button from 'material-ui/Button'
import TextField from 'material-ui/TextField'
import TextFieldInput from 'material-ui/TextField/TextFieldInput'
import CircularProgress from 'material-ui/Progress/CircularProgress'
import Row from '../../../../components/row'
import Col from '../../../../components/col'
import Helmet from 'react-helmet'
import styles from './styles'
import { auth } from '../../../../redux/auth/actions'

class Login extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = (event) => {
    //console.log('handleSubmit: props',this.props)
    let email = this.state.email
    this.state.email =  ''
    let password = this.state.password
    this.state.password = ''
    console.log('handleSubmit: email: ', email)
    console.log('handleSubmit: password: ', password)
    this.props.dispatch(auth({username: email, password: password})).then(() => {
      //console.log('handleSubmit: dispatch: then: props', this.props)
      //console.log('handleSubmit: dispatch: then: state', this.state)
      if (this.props.state.auth.expires > 0) {
        const routing = this.props.state.routing || {}
        const before = routing.locationBeforeTransitions || {}
        const query = before.query || {}
        const redirect = query.redirect || '/'
        this.props.history.replace(redirect)
      }
    }).catch(e => console.log(e))
    return true
  }

  handleEmailChange = (event) => {
    console.log('handleEmailChange: ')
    this.setState({email: event.target.value});
    return true
  }

  handlePasswordChange = (event) => {
    console.log('handlePasswordChange: ')
    this.setState({password: event.target.value});
    return true
  }

  handleKeyPress = (event) => {
    console.log('handleKeyPress: ')
    if (event.charCode == 13) {
      return this.handleSubmit(event)
    }
    return true
  }

  render () {
    let {
      requesting,
      error,
      user,
      expires
    } = this.props

    return (
      <div>
        <div>
          <Row key={'toolbar'} style={styles.bar} >
            <Col style={styles.sidebar} >
            Login
            </Col>
          </Row>
          <Helmet title='Login' />
          {requesting &&
            <div>
              <CircularProgress size={48} />
            </div>}
          {!requesting &&
            <Row center={'xs'} >
            <Col lg={4} md={5} sm={7} xs={10}>
              <form onSubmit={this.handleSubmit}>
                <TextField >
                  <TextFieldInput onChange={this.handleEmailChange} onKeyPress={this.handleKeyPress} value={this.state.email} />
                </TextField>
                <TextField >
                  <TextFieldInput type='password' onChange={this.handlePasswordChange} onKeyPress={this.handleKeyPress} value={this.state.password} />
                </TextField>
                <Button raised onClick={this.handleSubmit} onKeyPress={this.handleSubmit}>Login</Button>
                {error && (
                  <p>Bad login information</p>
                )}
              </form>
            </Col>
            </Row>}
        </div>
      </div>
    )
  }
}

Login.PropTypes = {
  state: PropTypes.object.isRequired,
  requesting: PropTypes.bool,
  error: PropTypes.object,
  user: PropTypes.object,
  expires: PropTypes.number,
  email: PropTypes.string,
  password: PropTypes.string
}

export default connect(
  (state) => ({
    state: state,
    requesting: state.auth.requesting,
    error: state.auth.error,
    user: state.auth.user,
    expires: state.auth.expires,
    email: null,
    password: null
  })
)(Login)

