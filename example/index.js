require('dotenv').config()

const osu = require('../lib')

const client = osu.Client(process.env.OSU_ID, process.env.OSU_SECRET)

async function init() {
  await	client.build()
}

init().then(async () => console.log(await client.getUser('haruhime')))