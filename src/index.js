import "@babel/polyfill";

module.exports = (promise) => promise
    .then(data => ({ data, error : null }))
    .catch(error => ({ data : null, error }));