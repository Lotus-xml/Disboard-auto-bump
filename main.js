// Use the latest version of node if you're getting errors!
//

// This is the id of the channel you want to bump in!
// You can get the id easily by enabling developer mode in discord settings.
const cock = '1112771811231408158';
//This is where you put the token of the account doing the bumping.
const token = 'Dont use your main! There is a small risk of being banned!';

const { Client } = require('discord.js-selfbot-v13');
const femboy = new Client({ checkUpdate: false });

femboy.on('ready', async (femboy) => {
  console.log(`User: ${femboy.user.tag}!`);
  const dickass = await femboy.channels.fetch(cock);
  dickass.sendTyping();
  await dickass.sendSlash('302050872383242240', 'bump');
  //await channel.send("bumped");
  console.log(`Bump: 1`);

  let giantballsack = 2;
// Added a random wait time between bumps to reduce potential ban risk
  setInterval(async function() {
    const extraTime = Math.floor(Math.random() * 10) + 1;
    console.log(`Waiting for ${extraTime} extra minutes before bumping`);
    await new Promise(resolve => setTimeout(resolve, extraTime * 60000));
    dickass.sendTyping();
    await dickass.sendSlash('302050872383242240', 'bump');
    console.log(`Bump: ${giantballsack++}`);
  }, 7260000);
});

femboy.on('error', console.error);

femboy.login(token); 
