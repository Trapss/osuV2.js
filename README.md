# osuV2.js
osu api v2 wrapper  
currently: working but needs more features to be implmented
  
# Usage    
### This module revolves around using a guest key, not an authenticated oauth key

```js
require('dotenv').config()

const osu = require('osuv2')

const client = osu.Client(process.env.OSU_ID, process.env.OSU_SECRET)

async function init() {
  await client.getGuestKey()
  console.log(await client.getUser('haruhime'))
}

init()
```
    
 ### A guest key will expire, I recommend you regenerate it every 20 hours
   
 # Contributing  
   
 When attempting to contribute please keep code style and formatting consistent as well as naming conventions.   
