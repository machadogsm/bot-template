module.exports.run = async (client, message, args) => {
  const m = await message.channel.send('help?');

  m.edit(`
**say** (digo coisas),
**purge** (apago mensagens), 
**coin** (cara ou coroa), 
**kiss** (vc beija alguem), 
**uptime** (a quanto tempo estou online?),
**punch** (vc soca aguem),
**ping** (lantencia do server),
**avatar** (vc consegue o avatar de alguem). `)}
