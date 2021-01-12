const { Invite } = require("discord.js");

module.exports = {
    name: 'members',
    description: "counts the members",
    execute(message, args, Discord, client){
        const { guild } = message
        const embed1 = new Discord.MessageEmbed()
        .setColor('#23cc72')
        .setTitle(`Member Count for: \`${guild.name}\``)
        .setURL(``)
        .setDescription(`${message.guild.memberCount}`);
        message.channel.send(embed1)
    }
}