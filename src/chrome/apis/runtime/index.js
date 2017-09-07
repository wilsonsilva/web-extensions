// @flow

import Signal from '../../../core/signal'

/**
 * Use the chrome.runtime API to retrieve the background page, return details about the manifest, and listen for and
 * respond to events in the app or extension lifecycle. You can also use this API to convert the relative path of URLs
 * to fully-qualified URLs.
 */
class Runtime {
  mockData:Object
  onInstalled:Signal

  // missing events
  // onStartup
  // onInstalled
  // onSuspend
  // onSuspendCanceled
  // onUpdateAvailable
  // onBrowserUpdateAvailable
  // onConnect
  // onConnectExternal
  // onMessage
  // onMessageExternal
  // onRestartRequired

  // properties
  // lastError

  // The ID of the extension/app.
  id:string

  constructor() {
    /**
     * Fired when the extension is first installed, when the extension is updated to a new version,
     * and when Chrome is updated to a new version.
     * @type {Signal}
     */
    this.onInstalled = new Signal()

    this.mockData = {
    }
  }

  /**
   * Retrieves the JavaScript 'window' object for the background page running inside the current extension/app.
   * If the background page is an event page, the system will ensure it is loaded before calling the callback.
   * If there is no background page, an error is set.
   *
   * @param {Function} callback
   */
  getBackgroundPage(callback:Function):void {
  }

  /**
   * Converts a relative path within an app/extension install directory to a fully-qualified URL.
   *
   * @param {string} path A path to a resource within an app/extension expressed relative to its install directory.
   */
  getURL(path:string):string {
    return `chrome-extension://${this.id}/${path}`
  }

  /**
   * Since Chrome 42.
   *
   * Open your Extension's options page, if possible.
   *
   * The precise behavior may depend on your manifest's options_ui or options_page key, or what Chrome happens to
   * support at the time. For example, the page may be opened in a new tab, within chrome://extensions, within an App,
   * or it may just focus an open options page. It will never cause the caller page to reload.
   *
   * If your Extension does not declare an options page, or Chrome failed to create one for some other reason, the
   * callback will set lastError.
   *
   * @param callback
   */
  openOptionsPage(callback:Function) {
  }

  // missing methods
  // openOptionsPage − chrome.runtime.openOptionsPage(function callback)
  // getManifest − object chrome.runtime.getManifest()
  // setUninstallURL − chrome.runtime.setUninstallURL(string url, function callback)
  // reload − chrome.runtime.reload()
  // requestUpdateCheck − chrome.runtime.requestUpdateCheck(function callback)
  // restart − chrome.runtime.restart()
  // restartAfterDelay − chrome.runtime.restartAfterDelay(integer seconds, function callback)
  // connect − Port chrome.runtime.connect(string extensionId, object connectInfo)
  // connectNative − Port chrome.runtime.connectNative(string application)
  // sendMessage − chrome.runtime.sendMessage(string extensionId, any message, object options, function responseCallback)
  // sendNativeMessage − chrome.runtime.sendNativeMessage(string application, object message, function responseCallback)
  // getPlatformInfo − chrome.runtime.getPlatformInfo(function callback)
  // getPackageDirectoryEntry − chrome.runtime.getPackageDirectoryEntry(function callback)

  static get AVAILABLE_SINCE_VERSION():number {
    return 16
  }
}

export default Runtime
