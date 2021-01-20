module.exports = {
    name: 'help',
    execute(message, args, Discord, client, prefix){
        const helpEmbed = new Discord.MessageEmbed()
        .setColor('#ff0000')
        .setTitle('HELP!')
        .setDescription(`Help with the bot. Use \`${prefix}\``)
        .addFields(
            {name: 'ping', value: 'Pings the bot.', inline: true},
            {name: 'members', value: 'Displays member count.', inline: true},
            {name: 'poll <your poll>', value: 'Makes a poll.', inline: true},
            {name: 'serverinfo', value: 'Shows info about the server.', inline: true}
        )
        message.channel.send(helpEmbed)
    }
}