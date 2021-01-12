module.exports = {
    name: 'serverinfo',
    description: 'Gathers info of requested server',
    async execute(message, args, Discord){
        const { guild } = message
        const serverinfo = new Discord.MessageEmbed().setColor('#00ed3f')
        .setTitle(`Server info for: \`${guild.name}\``)
        .addFields(
            {name: 'Creation Date', value: `${guild.createdAt}`, inline: true},
            {name: 'Server Owner', value: `${guild.owner}`, inline: true},
            {name: 'Boost Count', value: `${guild.premiumSubscriptionCount}`, inline: true},
        )
        .addFields(
            {name: 'Server Region', value: `${guild.region}`, inline: true},
            {name: 'Member Count', value: `${guild.memberCount}/${guild.maximumMembers}`, inline: true}
        )
        message.channel.send(serverinfo)
    }
}