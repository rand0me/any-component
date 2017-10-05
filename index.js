var path;

try {
    path = require.resolve('preact');
} catch (e) {
    try {
        path = require.resolve('inferno');
    } catch (e) {
        try {
            path = require.resolve('react');
        } catch (e) {
            throw Error('You should install either "preact", "inferno" or "react"');
        }
    }
}

module.exports = require(path)
module.exports.h = module.exports.h || module.exports.createElement;