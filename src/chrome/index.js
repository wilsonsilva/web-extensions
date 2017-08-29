// @flow

import {
  Storage,
  BrowserAction
} from './apis'

/**
 * Web Extensions API for Chrome.
 */
class Chrome {
  storage:Storage
  browserAction:BrowserAction

  constructor() {
    this.storage = new Storage()
    this.browserAction = new BrowserAction()
  }
}

export default Chrome
export {
  BrowserAction
}
