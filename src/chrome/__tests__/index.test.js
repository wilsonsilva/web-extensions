import Alarms from '../apis/alarms'
import Chrome from '../../chrome'
import BrowserAction from '../apis/browser_action'
import Storage from '../apis/storage'

let chrome = null

beforeEach(() => {
  chrome = new Chrome()
})

describe('#alarms', () => {
  it('exposes an instance of Alarms', () => {
    expect(chrome.alarms).toBeInstanceOf(Alarms)
  })
})

describe('#browserAction', () => {
  it('exposes an instance of BrowserAction', () => {
    expect(chrome.browserAction).toBeInstanceOf(BrowserAction)
  })
})

describe('#storage', () => {
  it('exposes an instance of Storage', () => {
    expect(chrome.storage).toBeInstanceOf(Storage)
  })
})
