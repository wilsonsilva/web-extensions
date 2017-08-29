import BrowserAction from '../index'

let browserAction = null

beforeEach(() => {
  browserAction = new BrowserAction()
})

describe('#setBadgeText', () => {
  describe('when no tabId is supplied', () => {
    it('sets the badge text for the browser action', () => {
      browserAction.setBadgeText({ text: 'hello' })
      expect(browserAction.mockData.badge.text).toEqual('hello')
    })
  })

  describe.skip('when a tabId is supplied', () => {
  })
})

describe('#setBadgeBackgroundColor', () => {
  describe('when no tabId is supplied', () => {
    it('sets the background color for the badge', () => {
      browserAction.setBadgeBackgroundColor({ color: 'red' })
      expect(browserAction.mockData.badge.backgroundColor).toEqual('red')
    })
  })

  describe.skip('when a tabId is supplied', () => {
  })
})

describe('#setTitle', () => {
  describe('when no tabId is supplied', () => {
    it('sets the title of the browser action', () => {
      browserAction.setTitle({ title: 'hello' })
      expect(browserAction.mockData.tooltip.title).toEqual('hello')
    })
  })

  describe.skip('when a tabId is supplied', () => {
  })
})

describe('.AVAILABLE_SINCE_VERSION', () => {
  it('exposes a Signal', () => {
    expect(BrowserAction.AVAILABLE_SINCE_VERSION).toEqual(16)
  })
})
