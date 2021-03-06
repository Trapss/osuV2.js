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
  await	client.build()
}

init().then(async () => console.log(await client.getUser('haruhime')))
```

 ### A guest key will expire, the library should regenerate it automatically

# osu

returns an int of estimated ranked maps played derived from bonus pp  
```js
osu.getRankedMapsPlayed(pp)
```

calculate accuracy based on gamemode  
- 0 = osu!std
- 1 = osu!taiko
- 2 = osu!catch
- 3 = osu!mania  
```js
osu.accuracy(mode, hit300, hit100, hit50, hit0, hitkatu, hitgeki)
```  

creates a new osu api v2 client  
```js
osu.client(id, secret)
```

# client  
builds the client
```js
client.build()
```

returns user data
```js
await client.getUser(user)
```

returns beatmap data
```js
await client.getBeatmap(beatmapID)
```
