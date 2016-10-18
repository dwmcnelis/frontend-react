import { LOAD_CLIENTS_REQUESTED, LOAD_CLIENTS_FULFILLED, LOAD_CLIENTS_REJECTED } from './types'
import { clientsState } from './state'

export default function clients (state = clientsState.clients, action) {
  switch (action.type) {
    case LOAD_CLIENTS_REQUESTED:
      return {...state, requesting: true, error: false, fetched: false}
    case LOAD_CLIENTS_FULFILLED:
      const byId = action.payload.clients.reduce((map, obj) => {
        map[obj.id] = obj
        return map
      }, {})
      return {...state, requesting: false, error: false, fetched: action.meta.fetched, clients: byId}
    case LOAD_CLIENTS_REJECTED:
      return {...state, requesting: false, error: action.payload, fetched: false, clients: {}}
    default:
      return state
  }
}
