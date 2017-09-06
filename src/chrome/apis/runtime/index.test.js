import Runtime from './index'
import Signal from '../../../core/signal'

let runtime = null

beforeEach(() => {
  runtime = new Runtime()
})

xdescribe('#getBackgroundPage', () => {
  it('', () => {
  })
})

xdescribe('#openOptionsPage', () => {
  it('', () => {
  })
})

xdescribe('#getManifest', () => {
  it('', () => {
  })
})

describe('#getURL', () => {
  beforeEach(() => {
    runtime.id = 'oibookllaahjhhdkhlklhbapjcadhaae'
  })

  it('Converts a relative path within an app/extension install directory to a fully-qualified URL.', () => {
    const url = runtime.getURL('options/index.html')
    expect(url).toEqual('chrome-extension://oibookllaahjhhdkhlklhbapjcadhaae/options/index.html')
  })
})

xdescribe('#setUninstallURL', () => {
  it('', () => {
  })
})

xdescribe('#reload', () => {
  it('', () => {
  })
})

xdescribe('#restart', () => {
  it('', () => {
  })
})

xdescribe('#restartAfterDelay', () => {
  it('', () => {
  })
})

xdescribe('#connect', () => {
  it('', () => {
  })
})

xdescribe('#connectNative', () => {
  it('', () => {
  })
})

xdescribe('#sendMessage', () => {
  it('', () => {
  })
})

xdescribe('#sendNativeMessage', () => {
  it('', () => {
  })
})

xdescribe('#getPlatformInfo', () => {
  it('', () => {
  })
})

xdescribe('#getPackageDirectoryEntry', () => {
  it('', () => {
  })
})

// *********** events ************

xdescribe('#onStartup', () => {
  it('', () => {
  })
})

xdescribe('#onSuspend', () => {
  it('', () => {
  })
})

describe('#onInstalled', () => {
  it('exposes an instance of a Signal', () => {
    expect(runtime.onInstalled).toBeInstanceOf(Signal)
  })

  xit('is fired when the extension is first installed', () => {
  })

  xit('is fired when the extension is updated to a new version', () => {
  })

  xit('is fired when Chrome is updated to a new version', () => {
  })
})

xdescribe('#onSuspendCanceled', () => {
  it('', () => {
  })
})

xdescribe('#onUpdateAvailable', () => {
  it('', () => {
  })
})

xdescribe('#onBrowserUpdateAvailable', () => {
  it('', () => {
  })
})

xdescribe('#onConnect', () => {
  it('', () => {
  })
})

xdescribe('#onConnectExternal', () => {
  it('', () => {
  })
})

xdescribe('#onMessage', () => {
  it('', () => {
  })
})

xdescribe('#onMessageExternal', () => {
  it('', () => {
  })
})

xdescribe('#onRestartRequired', () => {
  it('', () => {
  })
})

// *********** properties ************

xdescribe('#lastError', () => {
  it('', () => {
  })
})

xdescribe('#id', () => {
  it('', () => {
  })
})
