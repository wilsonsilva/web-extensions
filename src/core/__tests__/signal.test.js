import Signal from '../signal'

let signal = null

beforeEach(() => {
  signal = new Signal()
})

describe('#addListener', () => {
  it('adds a callback to the list of listeners', () => {
    const callback = jest.fn()
    signal.addListener(callback)

    expect(signal.listeners).toContain(callback)
  })
})

describe('#remove', () => {
  const callback = jest.fn()

  beforeEach(() => {
    signal.addListener(callback)
  })

  it('removes a callback from the list of listeners', () => {
    signal.remove(callback)

    expect(signal.listeners).not.toContain(callback)
  })
})

describe('#removeAll', () => {
  beforeEach(() => {
    signal.addListener(jest.fn())
    signal.addListener(jest.fn())
  })

  it('removes all callbacks from the list of listeners', () => {
    signal.removeAll()

    expect(signal.listeners.length).toEqual(0)
  })
})

describe('#dispatch', () => {
  const callback = jest.fn()

  beforeEach(() => {
    signal.addListener(callback)
  })

  it('calls all listeners', () => {
    const event = { id: 1984 }

    signal.dispatch(event)
    expect(callback).toHaveBeenCalledWith(event)
  })
})

describe('#listeners', () => {
  const callback = jest.fn()

  beforeEach(() => {
    signal.addListener(callback)
  })

  it('exposes all the signal listeners', () => {
    expect(signal.listeners).toEqual(expect.arrayContaining([callback]))
  })
})
