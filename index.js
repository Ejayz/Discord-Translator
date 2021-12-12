require('dotenv').config();
const { Client, Intents } = require('discord.js');
const fs = require('fs');
const token = process.env.bot_token;
const { updateCommand } = require('./setGlobalCommand');

//update the slash command list
//updateCommand();



const client = new Client(
    {
        intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGE_REACTIONS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.DIRECT_MESSAGES],
        partials: ['CHANNEL', 'MESSAGE', 'USER', 'REACTION']
    }
);


const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));

console.log(eventFiles);
for (const file of eventFiles) {
    const event = require(`./events/${file}`);
    if (event.once) {
        client.once(event.name, (...args) => event.execute(...args));
    } else {
        client.on(event.name, (...args) => event.execute(...args));
    }
}

client.login(token)