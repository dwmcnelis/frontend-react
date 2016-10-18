import { provideHooks } from 'redial'
import React, { PropTypes } from 'react'
import { loadPosts } from '../../../../redux/posts/actions'
import { connect } from 'react-redux'
import PostItem from '../../components/PostItem'
import Button from 'material-ui/Button'
import CircularProgress from 'material-ui/Progress/CircularProgress'
import Row from '../../../../components/row'
import Col from '../../../../components/col'
import Helmet from 'react-helmet'
import styles from './styles'

const redial = {
  fetch: ({ dispatch }) => {
    return dispatch(loadPosts())
  }
}

class PostIndex extends React.Component {

  render () {
    const {
      requesting,
      posts
    } = this.props

    return (
      <div>
        <div>
          <Row key={'toolbar'} style={styles.bar} >
            <Col style={styles.sidebar} >
            Posts
            </Col>
            <Col xs style={styles.bar} >
              <Button raised style={styles.barButton} >Edit</Button>
              <Button raised style={styles.barButton} >Publish</Button>
            </Col>
          </Row>
          <Helmet title='Posts' />
          {requesting &&
            <div>
              <CircularProgress size={48} />
            </div>}
          {!requesting &&
            posts.map(post =>
              <Row className={'yellowy'} key={`row-${post.id}`} >
                <Col className={'cyany'} xs={12} >
                  <PostItem key={`post-list-item-${post.id}`} post={post} />
                </Col>
              </Row>
              )}
          <Row key={'buttons1'} className={'yellowy'}>
            <Button>Default</Button>
            <Button primary>Primary</Button>
            <Button accent>Accent</Button>
            <Button disabled>Disabled</Button>
          </Row>
          <Row key={'buttons2'} className={'yellowy'}>
            <Button raised>Raised Default</Button>
            <Button raised primary>Raised Primary</Button>
            <Button raised accent>Raised Accent</Button>
            <Button raised disabled>Raised Disabled</Button>
          </Row>
        </div>
      </div>
    )
  }
}

PostIndex.PropTypes = {
  state: PropTypes.object.isRequired,
  requesting: PropTypes.bool,
  error: PropTypes.object,
  fetched: PropTypes.number,
  posts: PropTypes.array.isRequired
}

export default provideHooks(redial)(connect(
  (state) => ({
    state: state,
    requesting: state.posts.requesting,
    error: state.posts.error,
    fetched: state.posts.fetched,
    posts: state.posts.posts
  })
)(PostIndex))
