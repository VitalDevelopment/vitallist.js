# VitalList NPM Package
The offical NPM Package for interacting with [VitalList](https://vitallist.xyz)'s API.

`
npm i vitallist.js
`

### Getting setup
To post your bot's stats to VitalList, you will need a Discord client defined.

```js
const { Client, Events, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds] });
const vitallist = require('vitallist.js')
```

### POSTing bot's stats
First, define your Discord client, second provide your VitalList APIKey found in your bot's edit page.

```js
vitallist.postStats(client, "APIKey")
```
### GETing bot's info
Provide a Discord bot ID of a bot that is on [VitalList](https://vitallist.xyz)

```js
vitallist.fetchBot("botid")
```

### GETing server's info
Provide a Discord server ID of a server that is on [VitalServers](https://vitallist.xyz/servers)

```js
vitallist.fetchServer("serverid")
```

### GETing bots's votes
Provide a Discord bot ID of a bot that is on [VitalList](https://vitallist.xyz)

```js
vitallist.fetchVotes("botid")
```

### Check Vote from user
Provide a Discord bot ID of a bot that is on [VitalList](https://vitallist.xyz) & a Discord id of a user.

```js
vitallist.checkVote("botid", "userid")
```

