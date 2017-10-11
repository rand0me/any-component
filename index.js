try {
    module.exports = require('preact');
} catch (e) {
    try {
        module.exports = require('inferno');
    } catch (e) {
        try {
            module.exports.h = require('react-dom').createElement;
            module.exports.Component = require('react').Component;
        } catch (e) {
            throw Error('You should install either "preact", "inferno" or "react"');
        }
    }
}
