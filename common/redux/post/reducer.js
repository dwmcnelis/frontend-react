import { LOAD_POST_REQUESTED, LOAD_POST_FULFILLED, LOAD_POST_REJECTED } from './types'
import { postState } from './state'

export default function post (state = postState.post, action) {
  switch (action.type) {
    case LOAD_POST_REQUESTED:
      return {...state, requesting: true, error: null, fetched: null}
    case LOAD_POST_FULFILLED:
      return {...state, requesting: false, error: null, fetched: action.meta.fetched, title: action.payload.title, content: action.payload.content}
    case LOAD_POST_REJECTED:
      return {...state, requesting: false, error: action.payload, fetched: null, title: '', content: ''}
    default:
      return state
  }
}
