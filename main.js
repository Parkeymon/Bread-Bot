const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
const config = require('./config.json');
const prefix = config.BotPrefix;
client.commands = new Discord.Collection();

//Gets commands.
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}


//Log bot is ready and set status.
client.on('ready', () => {
    client.user.setActivity('Mmmm, bread', { type: 'PLAYING'});
    console.log('Bot online.');
});

//Command handler. I think? lmao
client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().trim().toLowerCase();

    try{
    const handler = client.commands.get(command);
    if(handler) handler.execute(message, args, Discord, client, prefix);
    }
    catch(error){
        console.error(error);
        message.channel.send('An error occoured.')
    }
});

client.login(config.BotToken);