import StorageChange from '../storage_change'

const oldValue = 'old'
const newValue = 'new'
const storageChange = new StorageChange(oldValue, newValue)

describe('#oldValue', () => {
  it('exposes the storage change old value', () => {
    expect(storageChange.oldValue).toEqual(oldValue)
  })
})

describe('#newValue', () => {
  it('exposes the storage change new value', () => {
    expect(storageChange.newValue).toEqual(newValue)
  })
})
