
const NODE_ENV = 'NODE_ENV'

const PRODUCTION = 'production'
const DEVELOPMENT = 'development'
const TEST = 'test'

export function isNode () {
  return typeof process === 'object' && process + '' === '[object process]'
}

export function isBrowser () {
  return !isNode()
}

function getNodeEnv () {
  return process.env
}

function getNodeEnvByKey (key) {
  if (!key) throw new Error('Key cannot be null/undefined')
  return getNodeEnv()[key]
}

export function getEnv () {
  const mode = getNodeEnvByKey(NODE_ENV)
  if (mode !== undefined && mode !== null) {
    return mode
  } else {
    process.env[NODE_ENV] = TEST
    return process.env[NODE_ENV]
  }
}

export function isProduction () {
  return getEnv() === PRODUCTION
}

export function isDevelopment () {
  return getEnv() === DEVELOPMENT
}

export function isTest () {
  return getEnv() === TEST
}
