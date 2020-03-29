// @flow

import Alarm from './types/alarm'

/**
 * Use the chrome.alarms API to schedule code to run periodically or at a specified time in the future.
 */
class Alarms {
  mockData: Object

  constructor () {
    this.mockData = {}
  }

  /**
   * Creates an alarm. Near the time(s) specified by alarmInfo, the onAlarm event is fired. If there is another
   * alarm with the same name (or no name if none is specified), it will be cancelled and replaced by this alarm.
   *
   * In order to reduce the load on the user's machine, Chrome limits alarms to at most once every 1 minute but may
   * delay them an arbitrary amount more. That is, setting delayInMinutes or periodInMinutes to less than 1 will
   * not be honored and will cause a warning. when can be set to less than 1 minute after "now" without warning
   * but won't actually cause the alarm to fire for at least 1 minute.
   *
   * To help you debug your app or extension, when you've loaded it unpacked, there's no limit to how often the
   * alarm can fire.
   *
   * @param {string} [name=''] Optional name to identify this alarm. Defaults to the empty string.
   * @param {Object} alarmInfo - Describes when the alarm should fire. The initial time must be specified by either
   *  when or delayInMinutes (but not both). If periodInMinutes is set, the alarm will repeat every periodInMinutes
   *  minutes after the initial event. If neither when or delayInMinutes is set for a repeating alarm,
   *  periodInMinutes is used as the default for delayInMinutes.
   * @param {number} alarmInfo.when - Time at which the alarm should fire, in milliseconds past the
   *  epoch (e.g. Date.now() + n).
   * @param {number} alarmInfo.delayInMinutes - Length of time in minutes after which the onAlarm event should fire.
   * @param {number} alarmInfo.periodInMinutes - If set, the onAlarm event should fire every periodInMinutes
   *  minutes after the initial event specified by when or delayInMinutes. If not set, the alarm will only fire once.
   */
  create (name?: string, alarmInfo: Object) {

  }

  /**
   * Retrieves details about the specified alarm.
   *
   * @param {string} [name] The name of the alarm to get. Defaults to the empty string.
   * @param {Function} callback The callback parameter should be a function that looks like this:
   *  function(Alarm alarm) {...};
   */
  get (name?: string, callback: (alarm?: Alarm) => any) {

  }

  /**
   * Gets an array of all the alarms.
   *
   * @param {Function} callback The callback parameter should be a function that looks like this:
   *  function(array of Alarm alarms) {...};
   */
  getAll (callback: (alarms: Array<Alarm>) => any) {

  }

  /**
   * Clears the alarm with the given name.
   *
   * @param {string} [name] The name of the alarm to clear. Defaults to the empty string.
   * @param {Function} [callback] If you specify the callback parameter, it should be a function that looks like this:
   *  function(boolean wasCleared) {...};
   */
  clear (name?: string, callback?: (wasCleared?: boolean) => any) {

  }

  /**
   * Clears all alarms.
   *
   * @param {Function} [callback] If you specify the callback parameter, it should be a function that looks like this:
   *  function(boolean wasCleared) {...};
   */
  clearAll (callback?: (wasCleared?: boolean) => any) {

  }
}

export default Alarms
