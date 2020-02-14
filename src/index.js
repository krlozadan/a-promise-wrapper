import "@babel/polyfill";

module.exports = (promise) => {
    if (Array.isArray(promise)) {
        return Promise.all([...promise])
            .then(data => ({ data, error: null }))
            .catch(error => ({ data: null, error }));
    } else {
        return promise
            .then(data => ({ data, error: null }))
            .catch(error => ({ data: null, error }));
    }
};
