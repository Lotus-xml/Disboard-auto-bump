//eat my ass
//use node.js 19.7.0 if you're getting errors when running

cock = 'id of the channel you wanna send the command to';
token = 'token goes here';

const { Client } = require('discord.js-selfbot-v13');
const femboy = new Client({
  checkUpdate: false
});

femboy.on('ready', async (femboy) => {
  console.log(`User: ${femboy.user.tag}!`);
  const dickass = await femboy.channels.fetch(cock);
  dickass.sendTyping();
  await dickass.sendSlash('302050872383242240', 'bump');
  //await channel.send("bumped");
  console.log(`Bump: 1`);
  let giantballsack = 2; 
  setInterval(async function() {
    dickass.sendTyping();
    await dickass.sendSlash('302050872383242240', 'bump');
    //.then(console.log)
    //.catch(console.error)
    //await channel.send("bumped");
    console.log(`Bump: ${giantballsack++}`);
  }, 7260000);
});

femboy.on('error', console.error);

femboy.login(token);
