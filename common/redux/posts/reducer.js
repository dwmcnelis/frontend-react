import { LOAD_POSTS_REQUESTED, LOAD_POSTS_FULFILLED, LOAD_POSTS_REJECTED } from './types'
import { postsState } from './state'

export default function posts (state = postsState.posts, action) {
  switch (action.type) {
    case LOAD_POSTS_REQUESTED:
      return {...state, requesting: true, error: false, fetched: false}
    case LOAD_POSTS_FULFILLED:
      return {...state, requesting: false, error: false, fetched: action.meta.fetched, posts: action.payload}
    case LOAD_POSTS_REJECTED:
      return {...state, requesting: false, error: action.payload, fetched: false, posts: []}
    default:
      return state
  }
}
