import combineReducers from './combineReducers'
import auth from './redux/auth/reducer'
import clients from './redux/clients/reducer'
import origin from './redux/origin/reducer'
import posts from './redux/posts/reducer'
import post from './redux/post/reducer'
import { routerReducer } from 'react-router-redux'

export default function createReducer () {
  return combineReducers({
    routing: routerReducer,
    auth,
    clients,
    origin,
    posts,
    post
  })
}
