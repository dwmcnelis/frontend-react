import { LOAD_POSTS_REQUESTED, LOAD_POSTS_FULFILLED, LOAD_POSTS_REJECTED } from './types'
import { authReset } from '../auth/actions'

export function loadPosts () {
  return (dispatch, getState, { axios }) => {
    const { protocol, host } = getState().origin
    dispatch({ type: LOAD_POSTS_REQUESTED })
    return axios.get(`${protocol}://${host}/api/v0/posts`)
      .then(response => {
        dispatch({
          type: LOAD_POSTS_FULFILLED,
          payload: response.data,
          meta: {
            fetched: Date.now()
          }
        })
      })
      .catch(error => {
        if (error.response && error.response.status === 401) {
          dispatch(authReset())
        }
        dispatch({
          type: LOAD_POSTS_REJECTED,
          payload: error.message,
          error: true
        })
      })
  }
}
