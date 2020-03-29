// @flow
class Alarm {
  name: string
  scheduledTime: number
  periodInMinutes: ?number

  /**
   * @param {string} name Name of this alarm.
   * @param {number} scheduledTime Time at which this alarm was scheduled to fire, in milliseconds past the
   *   epoch (e.g. Date.now() + n). For performance reasons, the alarm may have been delayed an arbitrary
   *   amount beyond this.
   * @param {number} [periodInMinutes] If not null, the alarm is a repeating alarm and will fire again in
   *   periodInMinutes minutes.
   */
  constructor (name: string, scheduledTime: number, periodInMinutes?: number) {
    this.name = name
    this.scheduledTime = scheduledTime
    this.periodInMinutes = periodInMinutes
  }
}

export default Alarm
