function requireAll(requireContext) {
    return requireContext.keys().map(requireContext);
}
// requires and returns all modules that match

var modules = requireAll(require.context("", true, /^(preact|inferno|react)$/));
// is an array containing all the matching modules

if (!modules.length) {
    throw Error('You should install either "preact", "inferno" or "react"');
}

module.exports = modules[0];
module.exports.h = module.exports.h || module.exports.createElement;