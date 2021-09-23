const superagent = require('superagent')
const path = require('path')

const cUser = require(path.join(__dirname, './user.js'))

class Client(){
  constructor(id, secret){
    this.id = id
    this.secret = secret
  }
  
  // function written by tienei
  // renew every 20 hours
  async getGuestKey() {
    const token = await superagent.post("https://osu.ppy.sh/oauth/token")
      .set('Content-Type', 'application/json')
      .send({
        "grant_type": "client_credentials",
        "client_id": this.id,
        "client_secret": this.secret,
        "scope": "public"
      })
    this.token = token
    return token
  }
  
  async getUser(userIdentifier) {
    let user = new cUser.User(userIdentifier)
    const u = await superagent.get(uBase + `/users/${user}`)
      .set('Content-Type', 'application/json')
      .set('Authorization', `Bearer ${this.token}`)
    user = u
    return user
  }
  
}

module.exports = Client
