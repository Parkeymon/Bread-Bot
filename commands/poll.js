module.exports = {
    name: 'poll',
    description: 'Reacts to the message with upvote/downvote.',
    execute(message, args, Discord){
        const pollEmbed = new Discord.MessageEmbed()
        .setColor('#ff0000')
        .setTitle('POLL MACHINE')
        .setDescription(args.join(' '))
        if(!args.length){
            message.channel.send('You must provide a some sort of poll!')
        } else  message.channel.send(pollEmbed)
            .then(function (message) {
            message.react('<:upvote:798395609698009129>')
            message.react('<:downvote:798395628493209602>')
        });  
    }
}