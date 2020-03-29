// @flow

import {
  Alarms,
  Runtime,
  Storage,
  BrowserAction
} from './apis'

/**
 * Web Extensions API for Chrome.
 */
class Chrome {
  alarms:Alarms
  runtime:Runtime
  storage:Storage
  browserAction:BrowserAction

  constructor () {
    this.alarms = new Alarms()
    this.storage = new Storage()
    this.runtime = new Runtime()
    this.browserAction = new BrowserAction()
  }
}

export default Chrome
export {
  BrowserAction
}
