

const vitallist = require('vitallist.js')

fetchVotes()

async function fetchVotes() {
   const bot = await vitallist.fetchVotes("884122923227553873")
   console.log(bot)
}