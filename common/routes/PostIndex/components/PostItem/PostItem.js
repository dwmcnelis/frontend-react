import React from 'react'
// import { Link } from 'react-router'
// import FlatButton from 'material-ui/FlatButton'
import Button from 'material-ui/Button'
// import styles from './styles'
// const classes = {button: 'button', label: 'label'}

const PostItem = ({ post }) => (
  <Button href={`/post/${post.slug}`} >{post.title}</Button>
)

export default PostItem
