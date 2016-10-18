import { LOAD_CLIENTS_REQUESTED, LOAD_CLIENTS_FULFILLED, LOAD_CLIENTS_REJECTED } from './types'
import { authReset } from '../auth/actions'

export function loadClients () {
  return (dispatch, getState, { axios }) => {
    const { protocol, host } = getState().origin
    dispatch({ type: LOAD_CLIENTS_REQUESTED })
    return axios.get(`${protocol}://${host}/api/v1/clients`)
      .then(response => {
        dispatch({
          type: LOAD_CLIENTS_FULFILLED,
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
          type: LOAD_CLIENTS_REJECTED,
          payload: error.message,
          error: true
        })
      })
  }
}

