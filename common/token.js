import jwt from 'jsonwebtoken'

export function parseToken (token, secret) {
  let parsed = {valid: false, payload: {}}
  try {
    var decoded = jwt.verify(token, secret)
    parsed = {valid: true, payload: decoded}
  } catch(err) {
  }
  return parsed
}
