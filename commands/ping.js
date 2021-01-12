module.exports = {
    name: 'ping',
    description: "Pings the bot and responds with ping time.",
    async execute(message, args){
        const sleep = (time) => new Promise((resolve, reject) => setTimeout(() => resolve(), time));
        let date1 = Date.now();
        let msg = await message.channel.send('Calculating <a:Typing:798393466069057557>');
        await sleep(1500).then(() => {msg.edit(`<:ping:798393452625920020>Pong! \`${Date.now() - date1 - 1500}ms\``)});
        console.log('The bot has been pinged! :ping:');
    }
}