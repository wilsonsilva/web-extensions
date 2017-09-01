# Web Extensions
JavaScript in-memory replacement for Web Extensions API.

## Motivation
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
Every API stores the internal data in a variable called `mockData`. It can be used to perform assertions. For example,
suppose you're testing a function that sets the browser action's title.

```javascript
// Create an instance of the mock
const chrome = new Chrome()

// Use it like you were using the real API
chrome.browserAction.setTitle({ text: 'Hello!' })

function setBrowserActionTitle() {
  
}

describe('#setBrowserActionTitle', () => {
  it('sets the browser action title', () => {
    setBrowserActionTitle
  })
})
```

## Contributing
Contributions are __very__ welcome. I have implemented the mocks for what I needed, but feel free to look at the
CHANGELOG and implement the remaining APIs.
