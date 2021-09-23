const osu = require('../library')

const client = osu.Client(process.env.OSU_ID, process.env.OSU_SECRET)

async init() {
  console.log(await client.getUser('haruhime'))
}

init()
