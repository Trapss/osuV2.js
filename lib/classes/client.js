const axios = require('axios')
const path = require('path')

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
    try {
      const req = await instance.get(`/users/${userIdentifier}`, {
        headers: {
          'Authorization': `Bearer ${this.token}`
        }
      })

      return req.data
    } catch (e) {
      throw new Error("[osuv2] Cannot get user")
    }
  }

  async getBeatmap(beatmapIdentifier) {
    try {
      const req = await instance.get(`/beatmaps/${beatmapIdentifier}`, {
        headers: {
          'Authorization': `Bearer ${this.token}`
        }
      })

      return req.data
    } catch (e) {
      throw new Error("[osuv2] Cannot get beatmap")
    }
  }

}

module.exports = Client