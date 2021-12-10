const { promise } = require('rest/util/responsePromise');
const translate = require('translate-google');
const Promise = require('promise');
module.exports = {
    async translation(message, toLang) {
        const promise = new Promise((resolve, reject) => {
            translate(message, { to: toLang }).then(result => {
                resolve(result);
            }).catch(error => {
                reject(error);
            });
        });
        return promise;
    }
}