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
    client.user.setActivity('Mmmm, Bread', { type: 'PLAYING'});
    console.log('Bot online.');
});


//Join message
client.on('guildMemberAdd', member => {
    const guild = client.guilds.cache.get('734986058361733185');
    const welcomeChannel = client.channels.cache.get('798409162576625684');

    var welcomes = [
        `NO WAY!!1!11 Its ${member}!`,
        `Is that, is that a, is that ${member}!!`,
        `Holy guacamole! Its ${member}!`,
        `Welcome to the bread bank, we sell bread, we sell loafs. We got bread on deck, bread on the floor. **TOASTED**. ***ROASTED***. Listen, I just need a baguette and a brioche. We dont have either of those ${member}.`

    ]
    var sayWelcome = Math.floor(Math.random() * welcomes.length);
    welcomeChannel.send(`${welcomes[sayWelcome]} Welcome to **${guild.name}**! Make sure to read all the important stuff in <#736051710694391939> and then select your roles in <#736051676770992238>! Enjoy your stay :bread:`);
    console.log(`Member Joined with username: ${member}`);
});

//Leave logs
client.on('guildMemberRemove', member => {
    console.log(`Member left server with username: ${member}`)
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
        message.channel.send('An error occured. Dont @ me.')
    }
});

client.login(config.BotToken);