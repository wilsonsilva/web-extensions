// // @flow
//
// /**
//  * Describes when the alarm should fire. The initial time must be specified by either when or delayInMinutes
//  * (but not both). If periodInMinutes is set, the alarm will repeat every periodInMinutes minutes after
//  * the initial event. If neither when or delayInMinutes is set for a repeating alarm, periodInMinutes is used
//  * as the default for delayInMinutes.
//  */
// class AlarmInfo {
//   /**
//    * @param when Time at which the alarm should fire, in milliseconds past the epoch (e.g. Date.now() + n).
//    */
//   when:?double
//
//   /**
//    * @param delayInMinutes Length of time in minutes after which the onAlarm event should fire.
//    */
//   delayInMinutes:?double
//
//   /**
//    * @param periodInMinutes If set, the onAlarm event should fire every periodInMinutes minutes after
//    *  the initial event specified by when or delayInMinutes. If not set, the alarm will only fire once.
//    */
//   periodInMinutes:?double
// }
