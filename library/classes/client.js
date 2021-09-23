const superagent = require('superagent')

class Client(){
  constructor(id, secret){
    this.id = id
    this.secret = secret
  }
  
  // function written by tienei
  // renew every 20 hours
  async getGuestKey() {
    let token = await superagent.post("https://osu.ppy.sh/oauth/token")
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
  
  async getUser() {
    let u = await superagent.get(uBase + `/users/${user}`)
      .set('Content-Type', 'application/json')
      .set('Authorization', `Bearer ${this.token}`)
    return JSON.parse(u.text)
  }
  
}

module.exports = Client
