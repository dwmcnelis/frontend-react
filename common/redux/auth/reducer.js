import { AUTH_SET, AUTH_RESET, AUTH_REQUESTED, AUTH_FULFILLED, AUTH_REJECTED } from './types'
import { authState } from './state'

export default function auth (state = authState.auth, action) {
  switch (action.type) {
    case AUTH_SET:
      return {...state, requesting: false, error: false, user: action.payload.user, expires: action.payload.expires, email: null, password: null}
    case AUTH_RESET:
      return {...state, requesting: false, error: false, user: {}, expires: 0, email: null, password: null}
    case AUTH_REQUESTED:
      return {...state, requesting: true, error: null, user: {}, expires: 0, email: null, password: null}
    case AUTH_FULFILLED:
      return {...state, requesting: false, error: false, user: action.payload.user, expires: action.payload.expires, email: null, password: null}
    case AUTH_REJECTED:
      return {...state, requesting: false, error: action.payload, user: {}, expires: 0, email: null, password: null}
    default:
      return state
  }
}
