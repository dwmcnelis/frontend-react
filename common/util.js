/**
 * Create callback closure.
 * @param {Object} instance - The object instance.
 * @param {String} funcName - The name of the callback function.
 */
export const callback = function (instance, funcName) {
  return function () {
    instance[funcName].apply(instance, arguments)
  }
}

export default {
  callback: callback
}
