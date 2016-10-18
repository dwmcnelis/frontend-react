import { ORIGIN_SET } from './types'
import { originState } from './state'

export default function origin (state = originState.origin, action) {
  switch (action.type) {
    case ORIGIN_SET:
      return {...state, protocol: action.payload.protocol, host: action.payload.host}
    default:
      return state
  }
}
