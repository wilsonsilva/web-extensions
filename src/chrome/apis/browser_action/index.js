// @flow

/**
 * Use browser actions to put icons in the main Google Chrome toolbar, to the right of the address bar.
 * In addition to its icon, a browser action can also have a tooltip, a badge, and a popup.
 */
class BrowserAction {
  mockData: Object

  constructor () {
    this.mockData = {
      badge: { text: '', backgroundColor: null },
      tooltip: { title: '', tabId: null },
      icon: {},
      popup: {}
    }
  }

  /**
   * Sets the title of the browser action. This shows up in the tooltip.
   *
   * @param {string} details.title The string the browser action should display when moused over.
   *
   * @param {integer=} details.tabId Limits the change to when a particular tab is selected. Automatically
   * resets when the tab is closed.
   */
  setTitle (details: Object): void {
    this.mockData.tooltip.title = details.title
    this.mockData.tooltip.tabId = details.tabId
  }

  // getTitle(details:Object, callback:Function) {
  // }

  // setIcon(details:object, callback:Function) {
  // }

  // setPopup(details:object) {
  // }

  // getPopup(details:object, callback:Function) {
  // }

  /**
   * Sets the badge text for the browser action. The badge is displayed on top of the icon.
   *
   * @param {string} details.text Any number of characters can be passed, but only about four can fit in the space.
   *
   * @param {integer=} details.tabId Limits the change to when a particular tab is selected. Automatically
   * resets when the tab is closed.
   */
  setBadgeText (details: Object): void {
    this.mockData.badge.text = details.text
    this.mockData.badge.tabId = details.tabId
  }

  // getBadgeText(details:object, callback:Function) {
  // }

  /**
   * Sets the background color for the badge.
   *
   * @param {string|Array} details.color An array of four integers in the range [0,255] that make up the RGBA color of
   * the badge. For example, opaque red is [255, 0, 0, 255]. Can also be a string with a CSS value, with opaque
   * red being #FF0000 or #F00.
   *
   * @param {integer=} details.tabId Limits the change to when a particular tab is selected. Automatically
   * resets when the tab is closed.
   */
  setBadgeBackgroundColor (details: Object): void {
    this.mockData.badge.backgroundColor = details.color
    this.mockData.badge.tabId = details.tabId
  }

  // getBadgeBackgroundColor(details:object, callback:Function) {
  // }

  // enable(tabId:number) {
  // }

  // disable(tabId:number) {
  // }

  static get AVAILABLE_SINCE_VERSION (): number {
    return 16
  }
}

export default BrowserAction

/**
 * Array of integer.
 * @typedef {number[]} ColorArray
 */
