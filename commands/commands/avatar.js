const { MessageEmbed } = require("discord.js");
module.exports = {
    name: 'avatar',
    execute(client, message, args) {

        const user = message.mentions.users.first() || client.users.cache.get(args[0]) || client.users.cache.find(u => u.tag === args[0]) || message.author;

        var embed = new MessageEmbed()
            .setDescription(`[**${user.tag}**](${user.avatarURL({dynamic: true, size: 1024 })})`)
            .setColor("#000000")
            .setImage(user.displayAvatarURL({ size: 1024, dynamic: true }));
            
        message.channel.send(embed);
    }
}