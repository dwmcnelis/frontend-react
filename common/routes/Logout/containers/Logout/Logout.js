import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import Helmet from 'react-helmet'
import { auth } from '../../../../redux/auth/actions'

class Logout extends React.Component {
  componentWillMount() {
    this.props.dispatch(auth({username: null, password: null}))
    this.props.history.replace('/')
  }

  componentWillUpdate(nextProps, nextState) {
    this.props.dispatch(auth({username: null, password: null}))
    this.props.history.replace('/')
  }

  render () {
    return (
      <div>
        <Helmet title='Logout' />
      </div>
    )
  }
}

Logout.PropTypes = {
  state: PropTypes.object.isRequired
}

export default connect(
  (state) => ({
    state: state
  })
)(Logout)
