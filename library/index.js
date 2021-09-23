const path = require('path')

const cClient = require(path.join(__dirname, './classes/client.js'))

const uAccuracy = require(path.join(__dirname, './utils/accuracy.js'))

module.exports = {

    Client: function client(id, secret) {
        return new cClient(id, secret)
    },

    accuracy: function accuracy(mode, hit300, hit100, hit50, hit0, hitkatu, hitgeki) {
        return uAccuracy.accuracy(mode, hit300, hit100, hit50, hit0, hitkatu, hitgeki)
    }

}
