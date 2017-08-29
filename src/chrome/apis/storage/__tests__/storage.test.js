import Storage from '../index'
import StorageArea from '../types/storage_area'
import Signal from '../../../../signal'

let storage = null

beforeEach(() => {
  storage = new Storage()
})

describe('#sync', () => {
  it('exposes an instance of StorageArea', () => {
    expect(storage.sync).toBeInstanceOf(StorageArea)
  })
})

describe('#local', () => {
  it('exposes an instance of StorageArea', () => {
    expect(storage.local).toBeInstanceOf(StorageArea)
  })
})

describe('#managed', () => {
  it('exposes an instance of StorageArea', () => {
    expect(storage.managed).toBeInstanceOf(StorageArea)
  })
})

describe('#onChanged', () => {
  it('exposes a Signal', () => {
    expect(storage.onChanged).toBeInstanceOf(Signal)
  })
})
