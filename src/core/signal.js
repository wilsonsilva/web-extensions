// @flow

/**
 * Implements the observer design pattern.
 */
class Signal {
  listeners:Array<Function>

  constructor() {
    this.listeners = []
  }

  addListener(callback:Function) {
    this.listeners.push(callback)
  }

  remove(callback:Function) {
    this.listeners = this.listeners.filter(listener =>
      listener.toString() !== callback.toString()
    )
  }

  removeAll() {
    this.listeners = []
  }

  dispatch(data:any) {
    this.listeners.forEach(listener => listener(data))
  }
}

export default Signal
