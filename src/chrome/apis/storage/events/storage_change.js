// @flow

class StorageChange {
  oldValue:?any
  newValue:?any

  constructor(oldValue:any, newValue:any) {
    this.oldValue = oldValue
    this.newValue = newValue
  }
}

export default StorageChange
