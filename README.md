any-component
=============
Provides either "react", "preact", "inferno" `h()` and `Component` class to build library-agnostic components.

## Installation
```
$ npm install --save any-component
```
OR
```
$ yarn add any-component
```

## Usage
```js
const { h, Component } = require('any-component');

/** @jsx h */
class MyComponent extends Component {
    render(props) {
        return (
            <div>
                { props.children }
            </div>
        )
    }
}
```
