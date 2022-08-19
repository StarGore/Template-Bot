const {MessageEmbed} = require('discord.js')
module.exports = {
    name: 'purge',
    execute: async (client, message, args) => {

    const amount = args[0];
    const limit = Number(amount);

    if(!amount) return message.channel.send(
        new MessageEmbed()
    .setColor("#000000")
    .setDescription("Input a number of how many messages should be deleted."));

    message.channel.messages.fetch({ limit: limit }).then(messages => {
        message.channel.bulkDelete(messages);
        
        message.channel.send("Just a second...").then((sentMessage) => 
        setTimeout(function () { sentMessage.edit(`**${messages.array().length}** messages were purged!`).then(msg => 
            msg.delete({timeout: 10000})); 
    }, 1000));

        });
    }
}