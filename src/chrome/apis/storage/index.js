// @flow

import Signal from '../../../core/signal'
import StorageArea from './types/storage_area'

/**
 * Use the chrome.storage API to store, retrieve, and track changes to user data.
 */
class Storage {
  sync:StorageArea
  local:StorageArea
  managed:StorageArea
  onChanged:Signal

  constructor() {
    this.sync = new StorageArea()
    this.local = new StorageArea()
    this.managed = new StorageArea()
    this.onChanged = new Signal()
  }

  static get AVAILABLE_SINCE_VERSION():number {
    return 20
  }
}

export default Storage
