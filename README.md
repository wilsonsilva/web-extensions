# Web Extensions
[![npm version](https://badge.fury.io/js/web-extensions.svg)](https://badge.fury.io/js/web-extensions)

JavaScript in-memory replacement for Web Extensions API. This is in very early stages and I'm updating it as I need
to test an extension I'm developing.

## Background
Have you ever needed to create a testable browser extension but couldn't find an easy way to mock the browser API? This
extension creates a fake browser instance that you can easily pass around in your tests.

## Installation

    $ yarn add web-extensions --dev
    
## Usage
Require the Web Extensions implementation for the browser you're developing and pass it around. For example, if you're
developing an extension for Google Chrome:

```javascript
// Import the mock Chrome class
import { Chrome } from 'web-extensions'

// Create an instance of the mock
const chrome = new Chrome()

// Use it like you were using the real API
chrome.browserAction.setTitle({ text: 'Hello!' })
```

You can do the same if you're developing an extension for Edge, Firefox, Firefox for Android and Opera. Here is
an example for Firefox:

```javascript
// Import the mock browser class
import {
  Chrome,
  Edge,
  Firefox,
  FirefoxAndroid,
  Opera
} from 'web-extensions'

// Create an instance of the mock
const browser = new Firefox()

// Use it like you were using the real API
browser.browserAction.setTitle({ text: 'Hello!' })
```

### Testing
Inside your extension, the global variable `chrome`/`browser` is available globally. In tests, however,
it is `undefined`. There are two ways to overcome this. You can architecture your extension to use dependency
injection, or you can mock the global variable if your testing framework has those capabilities.

#### Dependency Injection
Suppose that you have a class responsible for managing the extension's UI:

```javascript
class ExtensionUI {
  constructor(chrome) {
    this.browserAction = chrome.browserAction
  }
  
  setBrowserActionTitle(text) {
    this.browserAction.setTitle({ text })
  }
}
```

In your code, you could easily instantiate that class with the global variable `chrome`, because it is natively
available:

```javascript
const ui = new ExtensionUI(chrome) // chrome is a global variable provided by Google Chrome
ui.setBrowserActionTitle('hello')
```

To test that class, you would need to inject an instance of the mock to its constructor:

```javascript
import { Chrome } from 'web-extensions'

const mockChrome = new Chrome()
const ui = new ExtensionUI(mockChrome)

ui.setBrowserActionTitle('hello')
```

#### Globals
[Jest](https://facebook.github.io/jest/) provides an API to resolve global variables. You can declare `chrome` as a
mock: 

```javascript
// inside your test file
import { Chrome } from 'web-extensions'

const mockChrome = new Chrome()

global.chrome = mockChrome
```

#### Assertions

Every API stores the internal data in a variable called `mockData`. It can be used to perform assertions. For example,
suppose you're testing a function that sets the browser action's title. 

```javascript
import { Chrome } from 'web-extensions'

const mockChrome = new Chrome()
const ui = new ExtensionUI(mockChrome)

describe('#setBrowserActionTitle', () => {
  it('sets the browser action title', () => {
    ui.setBrowserActionTitle('Hello')
    expect(mockChrome.browserAction.mockData.tooltip.title).toEqual('Hello')
  })
})
```

## Contributing
Contributions are __very__ welcome. I have implemented the mocks for what I needed, but feel free to look at the
CHANGELOG and implement the remaining APIs.

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request

## Versioning
The project uses [SemVer](http://semver.org/) for versioning. For the versions available, see the tags on this repository.
