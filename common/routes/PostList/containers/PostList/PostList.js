import { provideHooks } from 'redial'
import React, { PropTypes } from 'react'
import { loadPosts } from '../../actions'
import { connect } from 'react-redux'
import PostListItem from '../../components/PostListItem'
// import FlatButton from 'material-ui/FlatButton'
// import RaisedButton from 'material-ui/RaisedButton'
import Button from 'material-ui/Button'
import Grid from '../../../../components/grid'
import Row from '../../../../components/row'
import Col from '../../../../components/col'
import Helmet from 'react-helmet'
import { selectPosts } from '../../reducer'
import styles from './styles'

const redial = {
  fetch: ({ dispatch }) => dispatch(loadPosts())
}

const mapStateToProps = state => ({
  posts: selectPosts(state)
})
// const classes = {button: 'button'}

const PostListPage = ({ posts }) => (
  <Grid>
    <div>
      <Helmet title='Posts' />
      {posts.isLoading &&
        <div>
          <h2 style={styles.title}>Loading....</h2>
        </div>}
      {!posts.isLoading &&
        posts.data.map((post, i) =>
          <Row key={`row-${post.id}`}  start={'xs'}>
            <Col key={1} className={'orangey'} xs={1} >
              {post.id}
            </Col>
            <Col key={2} className={'cyany'} xs={5} >
            <PostListItem key={`post-list-item-${post.id}`} post={post} />
            </Col>
            <Col key={3} className={'orangey'} xs={4} >
            extra
            </Col>
            <Col key={4} tagName={'div'} className={'cyany'} xs={2} >
            stuff
            </Col>
          </Row>
          )}
      <Row key={'buttons1'} start={'xs'}>
        <Button>Default</Button>
        <Button primary>Primary</Button>
        <Button accent>Accent</Button>
        <Button disabled>Disabled</Button>
      </Row>
      <Row key={'buttons2'} start={'xs'}>
        <Button raised>Raised Default</Button>
        <Button raised primary>Raised Primary</Button>
        <Button raised accent>Raised Accent</Button>
        <Button raised disabled>Raised Disabled</Button>
      </Row>
    </div>
  </Grid>

)

PostListPage.PropTypes = {
  posts: PropTypes.array.isRequired
}

export default provideHooks(redial)(connect(mapStateToProps)(PostListPage))
