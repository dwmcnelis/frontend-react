import React from 'react'
import { Link } from 'react-router'
import FlatButton from 'material-ui/FlatButton'
import styles from './styles'

const PostListItem = ({ post }) => (
  <FlatButton containerElement={<Link to={`/post/${post.slug}`} />} label={post.title} style={styles.root} labelStyle={styles.label} />
)

export default PostListItem
