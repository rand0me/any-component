const LIBS = [ 'preact', 'react', 'inferno' ];

(function () {
    var lib;
    LIBS.forEach(function (libName) {
        try {
            module.exports = require(libName);
        } catch(e) { }
    });
    if (!module.exports.Component) {
        throw Error('You must install either: ' + LIBS.join(', '))
    }
})()