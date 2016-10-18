import { provideHooks } from 'redial'
import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { loadPost } from '../../../../redux/post/actions'
import Helmet from 'react-helmet'
import NotFound from '../../../../components/NotFound'
import CircularProgress from 'material-ui/Progress/CircularProgress'
import styles from './styles'

const redial = {
  fetch: ({ dispatch, params: { slug } }) => {
    return dispatch(loadPost(slug))
  }
}

class PostShow extends React.Component {

  render () {
    const {
      requesting,
      error,
      title,
      content
    } = this.props

    if (!error) {
      return (
        <div>
          <Helmet title={title} />
          {requesting &&
            <div>
              <CircularProgress size={48} />
            </div>}
          {!requesting &&
            <div>
              <h2 style={styles.title}>{title}</h2>
              <p style={styles.content}>{content}</p>
            </div>}
        </div>
      )
    } else {
      // maybe check for different types of errors and display appropriately
      return <NotFound />
    }
  }
}

PostShow.propTypes = {
  state: PropTypes.object.isRequired,
  requesting: PropTypes.bool,
  error: PropTypes.object,
  fetched: PropTypes.number,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
}

export default provideHooks(redial)(connect(
  (state) => ({
    state: state,
    requesting: state.post.requesting,
    error: state.post.error,
    fetched: state.post.fetched,
    title: state.post.title,
    content: state.post.content
  })
)(PostShow))
