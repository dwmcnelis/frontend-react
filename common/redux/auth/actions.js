import { AUTH_SET, AUTH_RESET, AUTH_REQUESTED, AUTH_FULFILLED, AUTH_REJECTED } from './types'

export function authSet (user, expires) {
  return {
    type: AUTH_SET,
    payload: {user, expires}
  }
}

export function authReset () {
  return {
    type: AUTH_RESET,
    payload: null
  }
}

export function auth (credentials = {username: null, password: null}) {
  console.log('auth: credentials: ',credentials)
  return (dispatch, getState, { axios }) => {
    const { protocol, host } = getState().origin
    dispatch({ type: AUTH_REQUESTED })
    return axios.post(`${protocol}://${host}/api/v1/authorize`, credentials)
      .then(response => {
        dispatch({
          type: AUTH_FULFILLED,
          payload: response.data,
          meta: {
            fetched: Date.now()
          }
        })
      })
      .catch(error => {
        dispatch({
          type: AUTH_REJECTED,
          payload: error.message,
          error: true
        })
      })
  }
}
