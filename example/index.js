require('dotenv').config()

const osu = require('../lib')

const client = osu.Client(process.env.OSU_ID, process.env.OSU_SECRET)

async function init() {
  await client.getGuestKey()
  console.log(await client.getUser('haruhime'))
  console.log(await client.getBeatmap('2069841'))
}

init().then(() => {
  setInterval(() => {
    client.getGuestKey()
  }, 72000000)
})