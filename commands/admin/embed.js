const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'embed',
    execute: async (client, message, args) => {

        var msg = await new MessageEmbed()
        .setColor("#000000")
        .setTitle("Headline")
        .setDescription("Name the headline of the embed.")
        message.channel.send(msg)
        
        var msgs = await message.channel.awaitMessages(res => res.author.id === message.author.id, {max: 1, time: 30000});

        if(!msgs.size) return message.channel.send(new MessageEmbed()
        .setColor("#000000")
        .setDescription("Times up!"))
        
        let title = msgs.first().content;

        msg = await new MessageEmbed()
        .setColor("#000000")
        .setTitle("Description")
        .setDescription("What shall the description be?")
        message.channel.send(msg)

        var msgs = await message.channel.awaitMessages(res => res.author.id === message.author.id, {max: 1, time: 30000});

        if(!msgs.size) return msg.edit("Times up!");

        let description = msgs.first().content;

        let embed = new MessageEmbed()
        .setColor("#000000")
        .setTitle(title)
        .setDescription(description)
        .setFooter(`Embed created by ${message.author.tag}`);
        
        message.channel.send(embed).catch(err => {
            if (err) return message.channel.send("Something happened...")
        })
    }
};