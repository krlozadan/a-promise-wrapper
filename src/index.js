export default async (promise) => promise
    .then(data => ({ data, error : null }))
    .catch(error => ({ data : null, error }));