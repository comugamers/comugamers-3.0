const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`I an ready!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

// THIS MUST BE THIS WAY
client.login('process.env.BOT_token');
