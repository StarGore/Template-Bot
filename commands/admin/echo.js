const { MessageEmbed } = require('discord.js')
module.exports = {
    name: 'echo',
    execute(client, message, args) {

        if (message.mentions.channels.size == 0) {
            message.reply("You need to mention a channel");

        } else {
            let taggedChannel = message.mentions.channels.first();
            const args = message.content.split(" ").slice(2);
            let echo = args.join(" ");
            
            if (!echo) return message.reply("You need to input a message");

            taggedChannel.send(echo);
            message.delete();
        }
    }
}