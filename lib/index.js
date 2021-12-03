const path = require('path')

const cClient = require(path.join(__dirname, './classes/client'))

const uAccuracy = require(path.join(__dirname, './util/accuracy'))

module.exports = {

  Client: function(id, secret) {
    return new cClient(id, secret)
  },

  accuracy: function(mode, hit300, hit100, hit50, hit0, hitkatu, hitgeki) {
    return uAccuracy(mode, hit300, hit100, hit50, hit0, hitkatu, hitgeki)
  },

  getRankedMapsPlayed: function(pp) {
    return (Math.log((-1 * ((parseFloat(pp) / 416.6666667) - 1)))) / (Math.log(0.9994))
  }

}