try {
    module.exports = require('preact');
} catch (e) {
    try {
        module.exports = require('inferno');
    } catch (e) {
        try {
            module.exports = require('react');
            module.exports.h = module.exports.createElement;
        } catch (e) {
            throw Error('You should install either: preact, inferno or react');
        }
    }
}