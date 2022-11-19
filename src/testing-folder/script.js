
const { Client, Events, GatewayIntentBits } = require('discord.js');
const vitallist = require('vitallist.js')
const { token, apikey } = require('./config.json');

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once(Events.ClientReady, async c => {
	console.log(`Ready! Logged in as ${c.user.tag}`);
    vitallist.postStats(c, apikey)
});

let bot = vitallist.fetchBot('417143274713776139')
    console.log(bot)

client.login(token);
