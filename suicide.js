const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.on('messageCreate', (message) => {
  if (message.author.bot) return; // Ignore messages from bots

  // Define the command prefix
  const prefix = '!';

  // Check if the message starts with the command prefix
  if (message.content.startsWith(prefix)) {
    // Extract the command and arguments
    const [cmd, ...args] = message.content.slice(prefix.length).split(' ');

    // Simple case switch for different commands
    switch (cmd.toLowerCase()) {
      case 'hello':
        message.reply('Hello!');
        break;

      case 'ping':
        message.reply('Pong!');
        break;

      // Add more cases for other commands

      default:
        message.reply('Invalid command. Type !help for available commands.');
        break;
    }
  }
});


client.login(require("config.json").token);