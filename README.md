# osuV2.js
osu api v2 wrapper  
currently: working but needs more features to be implmented
  
# Usage    
### This module revolves around using a guest key, not an authenticated oauth key

```js
require('dotenv').config()

const osu = require('../library')

const client = osu.Client(process.env.OSU_ID, process.env.OSU_SECRET)

async function init() {
  await client.getGuestKey()
  console.log(await client.getUser('haruhime'))
}
```
    
 ### A guest key will expire, I reccomend you regenerate it every 20 hours
