import { LOAD_POST_REQUESTED, LOAD_POST_FULFILLED, LOAD_POST_REJECTED } from './types'
import { authReset } from '../auth/actions'

export function loadPost (slug) {
  return (dispatch, getState, { axios }) => {
    const { protocol, host } = getState().origin
    dispatch({ type: LOAD_POST_REQUESTED })
    return axios.get(`${protocol}://${host}/api/v0/posts/${slug}`)
      .then(response => {
        dispatch({
          type: LOAD_POST_FULFILLED,
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
          type: LOAD_POST_REJECTED,
          payload: error.message,
          error: true
        })
      })
  }
}
