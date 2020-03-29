import isObject from 'lodash/isObject'
import isArray from 'lodash/isArray'
import isEmpty from 'lodash/isEmpty'
import _ from 'lodash'

import Signal from '../../../../core/signal'

// @flow
class StorageArea {
  get:Function
  getBytesInUse:Function
  set:Function
  remove:Function
  clear:Function
  onChanged:Signal
  mockData:Object

  constructor () {
    /**
     * @private
     * @type {Object}
     */
    this.mockData = {}
  }

  /**
   * Retrieves one or more items from the storage area.
   *
   * @param keys A single key to get, list of keys to get, or a dictionary specifying default values
   * (see description of the object). An empty list or object will return an empty result object.
   * Pass in null to get the entire contents of storage.
   * @param {Function} callback Callback with storage items, or on failure (in which case
   * runtime.lastError will be set).
   * The callback parameter should be a function that looks like this:
   * function(object items) {...};
   */
  get (keys:string | string[] | Object, callback:?Function):void {
    if (isArray(keys)) {
      callback(_.pick(this.mockData, keys))
    } else if (isEmpty(keys) && (isArray(keys) || isObject(keys))) {
      callback({}) // eslint-disable-line standard/no-callback-literal
    } else if (isObject(keys)) {
      const requestedData = _.pick(this.mockData, Object.keys(keys))

      Object.entries(keys).forEach(([key, defaultValue]) => {
        requestedData[key] = _.defaultTo(requestedData[key], defaultValue)
      })

      callback(requestedData)
    } else if (keys === null) {
      callback(this.mockData)
    } else {
      callback(this.mockData[keys])
    }
  }

  getBytesInUse (keys:string | string[], callback:?Function):void {
    callback()
    return undefined
  }

  set (items:Object, callback:?Function):Function {
    Object.assign(this.mockData, items)

    if (callback) {
      callback()
    }

    return _.noop
  }

  remove (keys:string | string[], callback:Function):void {
    callback()
    return undefined
  }

  clear (callback:?Function):void {
    this.mockData = {}

    if (callback) {
      callback()
    }
  }
}

export default StorageArea
