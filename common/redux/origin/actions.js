import { ORIGIN_SET } from './types'

export function setOrigin(protocol, host) {
  return {
    type: ORIGIN_SET,
    payload: {protocol, host}
  }
}
