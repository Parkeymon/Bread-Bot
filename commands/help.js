const { description } = require("./serverinfo")

module.exports = {
    name: 'help',
    execute(message, args, Discord){
        const helpEmbed = new Discord.MessageEmbed()
        .setColor('#ff0000')
        .setTitle('HELP!')
        .setDescription('Help with the bot.')
        .addField(
            {name: 'ping', value: 'Pings the bot.'},
            {name: 'members', value: 'Displays member count.'},
            {name: 'poll <your poll>', value: 'Makes a poll.'},
            {name: 'serverinfo', value: 'Shows info about the server.'}
        )
    }
}