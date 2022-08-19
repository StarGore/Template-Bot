const { MessageEmbed } = require('discord.js')
module.exports = {
    name: 'emote',
    execute: async (client, message, args) => {

            let mistakeEmbed = new MessageEmbed()
            .setColor("#000000")
            .setTitle("❌ You need to upload a data/file.")
            .setDescription("Try again.");

            let correctEmbed = new MessageEmbed()
            .setColor("#000000")
            .setTitle("Successfully suggested!");

            const channel = message.guild.channels.cache.find(c => c.name === '[CHANNEL NAME]');
            
            var msg = await new MessageEmbed()
            .setColor("#000000")
            .setTitle("Upload an emote suggestion");

            message.channel.send(msg)
    
            var msgs = await message.channel.awaitMessages(res => res.author.id === message.author.id, {max: 1, time: 40000});
    
            if(!msgs.size) return message.channel.send(new MessageEmbed()
            .setColor("#000000")
            .setTitle(":x: Time ran out!")
            .setDescription("Try again."));
    
            const emote = msgs.first();

            let type = null;

            if (emote.content && /(jpg|gif|png|JPG|GIF|PNG|JPEG|jpeg)$/.test(emote.content)) type = "url";

            if(emote.attachments.size > 0) type = "att"

            if (type !== null) {

                let embed = new MessageEmbed()
                .setColor("#000000")
                .setImage(type === "att" ? emote.attachments.first().attachment : emote.content)
                .setFooter(`Suggested by ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
                .setTimestamp();

                var em = await channel.send(embed).catch(err => {
                    if(err) return message.channel.send(mistakeEmbed);
                
                });

            if (type !== null) {
                message.channel.send(correctEmbed);
            }    
                await em.react('[INSERT YES/NO EMOTE ID HERE]');
                await em.react('[INSERT YES/NO EMOTE ID HERE]');
                
            } else return message.channel.send(mistakeEmbed);
        }
};