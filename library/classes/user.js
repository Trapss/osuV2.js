class User {
  constructor(userIdentifier) {
    this.userIdentifier = userIdentifier
  }

  getRankedMapsPlayed() {
    return (Math.log((-1 * ((parseFloat(this.statistics.pp) / 416.6666667) - 1)))) / (Math.log(0.9994))
  }

}

module.exports = User