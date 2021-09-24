const axios = require('axios')
const path = require('path')

const cUser = require(path.join(__dirname, './user'))
const cBeatmap = require(path.join(__dirname, './beatmap'))

const instance = axios.create({
  baseURL: 'https://osu.ppy.sh/api/v2',
  headers: {
    'Content-Type': 'application/json'
  }
})

class Client {
  constructor(id, secret) {
    this.id = id
    this.secret = secret
  }

  // function written (originally) by tienei
  // renew every 20 hours
  async getGuestKey() {
    const req = await axios.post("https://osu.ppy.sh/oauth/token", {
      "grant_type": "client_credentials",
      "client_id": this.id,
      "client_secret": this.secret,
      "scope": "public"
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    })

    return this.token = req.data.access_token
  }

  async getUser(userIdentifier) {
    let user = new cUser(userIdentifier)
    const req = await instance.get('/users/' + userIdentifier, {
      headers: {
        'Authorization': `Bearer ${this.token}`
      }
    })

    return user = req.data
  }

  async getBeatmap(beatmapIdentifier){
    let map = new cBeatmap(beatmapIdentifier)
    const req = await instance.get('/beatmap/' + beatmapIdentifier, {
       headers: {
        'Authorization': `Bearer ${this.token}`
      }
    })

    return map = req.data
  }
  
}

module.exports = Client
