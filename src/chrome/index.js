// @flow

import {
  Alarms,
  Storage,
  BrowserAction
} from './apis'

/**
 * Web Extensions API for Chrome.
 */
class Chrome {
  alarms:Alarms
  storage:Storage
  browserAction:BrowserAction

  constructor() {
    this.alarms = new Alarms()
    this.storage = new Storage()
    this.browserAction = new BrowserAction()
  }
}

export default Chrome
export {
  BrowserAction
}
