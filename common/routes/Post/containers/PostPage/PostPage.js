import { provideHooks } from 'redial'
import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { loadPost } from '../../actions'
import Helmet from 'react-helmet'
import NotFound from '../../../../components/NotFound'
import { selectCurrentPost } from '../../reducer'
import styles from './styles'

const redial = {
  fetch: ({ dispatch, params: { slug } }) => dispatch(loadPost(slug))
}

const mapStateToProps = state => selectCurrentPost(state)

const PostPage = ({ title, content, isLoading, error }) => {
  if (!error) {
    return (
      <div>
        <Helmet title={title} />
        {isLoading &&
          <div>
            <h2 style={styles.loading}>Loading....</h2>
          </div>}
        {!isLoading &&
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

PostPage.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  isLoading: PropTypes.bool,
  error: PropTypes.object
}

export default provideHooks(redial)(connect(mapStateToProps)(PostPage))
