import StorageArea from '../storage_area'

let storageArea = null

describe('#get', () => {
  beforeEach(() => {
    storageArea = new StorageArea()

    storageArea.mockData = {
      settings: { visible: true },
      popup: { width: 100, height: 50 },
      enabled: false
    }
  })

  describe('#when keys is a single string', () => {
    it('retrieves the object referenced by that string', () => {
      storageArea.get('settings', (retrieved) => {
        expect(retrieved).toEqual({ visible: true })
      })
    })
  })

  describe('#when keys is an array of strings', () => {
    it('retrieves all the entries corresponding to those keys', () => {
      storageArea.get(['settings', 'enabled'], (retrieved) => {
        expect(retrieved).toEqual({ settings: { visible: true }, enabled: false })
      })
    })

    it('does not retrieve any object for the missing keys', () => {
      storageArea.get(['settings', 'enabled', 'missing'], (retrieved) => {
        expect(retrieved).toEqual({ settings: { visible: true }, enabled: false })
      })
    })

    it('returns an empty object when no keys are found', () => {
      storageArea.get(['missigno', 'missing'], (retrieved) => {
        expect(retrieved).toEqual({})
      })
    })
  })

  describe('#when keys is an object', () => {
    it('retrieves all the entries corresponding to the object keys, and default values', () => {
      storageArea.get({ enabled: true, background: { color: 'red' } }, (retrieved) => {
        expect(retrieved).toEqual({ background: { color: 'red' }, enabled: false })
      })
    })
  })

  describe('#when keys is an empty object', () => {
    it('retrieves an empty object', () => {
      storageArea.get({}, (retrieved) => {
        expect(retrieved).toEqual({})
      })
    })
  })

  describe('#when keys is an empty array', () => {
    it('retrieves an empty object', () => {
      storageArea.get([], (retrieved) => {
        expect(retrieved).toEqual({})
      })
    })
  })

  describe('#when keys is null', () => {
    it('retrieves the entire storage contents', () => {
      storageArea.get(null, (retrieved) => {
        expect(retrieved).toEqual(storageArea.mockData)
      })
    })
  })
})
