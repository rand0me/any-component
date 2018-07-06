any-component
=============

[![Greenkeeper badge](https://badges.greenkeeper.io/rand0me/any-component.svg)](https://greenkeeper.io/)

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
