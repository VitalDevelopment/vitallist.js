const { checkVote } = require("vitallist.js");

voteFunction()

async function voteFunction() {
  const vote = await checkVote("884122923227553873", "529815278456930314");
  console.log(vote)
}