import { provideHooks } from 'redial'
import React, { PropTypes } from 'react'
import { loadPosts } from '../../actions'
import { connect } from 'react-redux'
import PostListItem from '../../components/PostListItem'
// import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'
import Helmet from 'react-helmet'
import { selectPosts } from '../../reducer'
import styles from './styles'

const redial = {
  fetch: ({ dispatch }) => dispatch(loadPosts())
}

const mapStateToProps = state => ({
  posts: selectPosts(state)
})

const PostListPage = ({ posts }) => (
  <div style={styles.root}>
    <Helmet title='Posts' />
    {posts.isLoading &&
      <div>
        <h2 style={styles.title}>Loading....</h2>
      </div>}
    {!posts.isLoading &&
      posts.data.map((post, i) => <PostListItem key={post.id} post={post} />)}
    <div>
      <RaisedButton label='Default' style={styles.button} />
      <RaisedButton label='Primary' primary={true} style={styles.button} />
      <RaisedButton label='Secondary' secondary={true} style={styles.button} />
      <RaisedButton label='Disabled' disabled={true} style={styles.button} />
      <br />
      <br />
      <RaisedButton label='Full width' fullWidth={true} />
    </div>
  </div>
)

PostListPage.PropTypes = {
  posts: PropTypes.array.isRequired
}

export default provideHooks(redial)(connect(mapStateToProps)(PostListPage))
