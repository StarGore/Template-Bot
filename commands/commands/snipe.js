const { MessageEmbed } = require('discord.js')
module.exports = {
    name: "snipe",
    execute: async (client, message, args) => {
  
        let Snipped = client.snipe[message.channel.id]
      
        if(!Snipped) return message.channel.send(new MessageEmbed()
        .setColor("#000000")
        .setTitle(`❌ Missed shot.`)
        .setDescription("No message was deleted."))

        let snippedEmbed = new MessageEmbed()
        .setColor("#000000")
        .setTimestamp()
        .setAuthor(Snipped.author.tag, Snipped.author.displayAvatarURL({type: "png", dynamic: true}))
        .setDescription(`${Snipped.content}`)
        .setFooter(`Sniped by ${message.author.tag} `)

        message.channel.send(snippedEmbed)
        }
    }