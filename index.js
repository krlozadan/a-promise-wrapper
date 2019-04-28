"use strict"

class AsyncWrapper {
    wrap (promise) {
        return promise
        .then(data => ({ data, error : null }))
        .catch(error => ({ data : null, error }));
    }
}

module.exports = new AsyncWrapper();