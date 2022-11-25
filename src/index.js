const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

module.exports = {
    postStats: async (client, apikey) => {
    const response = await fetch(`https://vitallist.xyz/api/bots/${client.user.id}`, {
        method: 'POST',
        headers: {
            'authorization': apikey,
            'server_count': client.guilds.cache.size.toString(),
            'shard_count': "1",
          'Content-Type': 'application/json'
        },
      })
      const data = await response.json();
      console.log(data);
    return;
  },
  fetchBot: async (botid) => {
    let res = await fetch(`https://vitallist.xyz/api/bots/${botid}`)
    return await res.json()
  },
  fetchVotes: async (botid) => {
    let res = await fetch(`https://vitallist.xyz/api/bots/${botid}/votes`)
    return await res.json()
  },
  checkVote: async (botid, userid) => {
    let res = await fetch(`https://vitallist.xyz/api/bots/${botid}/voted/?user=${userid}`)
    return await res.json()
  },

}