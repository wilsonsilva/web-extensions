// @flow

import {
  Storage
} from './apis'

/**
 * Web Extensions API for Chrome.
 */
class Chrome {
  storage:Storage

  constructor() {
    this.storage = new Storage()
  }
}

export default Chrome
