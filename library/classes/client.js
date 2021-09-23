const superagent = require('superagent')
const path = require('path')

const cUser = require(path.join(__dirname, './user.js'))
const uBase = "https://osu.ppy.sh/api/v2"

class Client {
  constructor(id, secret) {
    this.id = id
    this.secret = secret
  }

  // function written by tienei
  // renew every 20 hours
  async getGuestKey() {
    const req = await superagent.post("https://osu.ppy.sh/oauth/token")
      .set('Content-Type', 'application/json')
      .send({
        "grant_type": "client_credentials",
        "client_id": this.id,
        "client_secret": this.secret,
        "scope": "public"
      })

    const key = JSON.parse(req.text).access_token
    this.token = key

    return key
  }

  async getUser(userIdentifier) {
    let user = new cUser(userIdentifier)
    const req = await superagent.get(uBase + `/users/${userIdentifier}`)
      .set('Content-Type', 'application/json')
      .set('Authorization', `Bearer ${this.token}`)
    user = JSON.parse(req.text)
    return user
  }

}

module.exports = Client