// @flow

/**
 * A Signal is essentially a mini-dispatcher specific to one event, with its own array of listeners. Listeners
 * subscribe to real objects, not to string-based channels. Signals are inspired by C# events and signals/slots in Qt.
 */
class Signal {
  listeners:Array<Function>

  constructor() {
    this.listeners = []
  }

  /**
   * Registers an event listener object with a signal object so that the listener receives notification
   * of an event.
   *
   * @param {Function} callback The function to be called when an event is dispatched.
   */
  add(callback:Function) {
    this.listeners.push(callback)
  }

  /**
   * Removes a listener from the signal object. If there is no matching listener registered with the signal object,
   * a call to this method has no effect.
   *
   * @param {Function} callback The function to be called when an event is dispatched.
   */
  remove(callback:Function) {
    this.listeners = this.listeners.filter(listener =>
      listener.toString() !== callback.toString()
    )
  }

  /**
   * Similar to remove(), but removes all listeners from the signal object.
   */
  removeAll() {
    this.listeners = []
  }

  /**
   * Dispatches an event into the event flow.
   *
   * @param data
   */
  dispatch(data:any) {
    this.listeners.forEach(listener => listener(data))
  }
}

export default Signal
