const Discord = require('discord.js');
module.exports = {
    name: 'suggestions',
    execute(client, message, args) {

        const channel = message.guild.channels.cache.find(c => c.name === '[INSERT CHANNEL NAME]');
        
        if(!channel) return;

        let messageArgs = args.join(' ');

        const embed = new Discord.MessageEmbed()
        .setColor('#000000')
        .setAuthor(`Suggested by ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
        .setDescription(messageArgs)
        .setTimestamp()
        .setFooter(`User ID: ${message.author.id}`);

        channel.send(embed);
    }
}