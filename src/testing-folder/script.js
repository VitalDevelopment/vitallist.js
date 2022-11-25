

const vitallist = require('vitallist.js')

fetchServer()

async function fetchServer() {
   const server = await vitallist.fetchServer("1006065494257848433")
   console.log(server)
}