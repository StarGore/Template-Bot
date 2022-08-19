const { MessageEmbed } = require('discord.js')
module.exports = {
    name: 'ping',
    execute: async (client, message, args) => {

    const api = Math.round(client.ws.ping);

    let embedPing = new MessageEmbed()
    .setTitle('Please wait...')
    .setColor("#000000");

    const msg = await message.channel.send(embedPing)
    const ping = msg.createdTimestamp - message.createdTimestamp;

    let embed = new MessageEmbed()
    .setColor("#000000")
    .setTitle("Pong!")
    .setDescription("I hope its low...")
    .addField("Message Latency", `➥ \`${ping}ms\``)
    .addField("API Latency", `➥ \`${api}ms\``)
    
    message.channel.send(embed)
    setTimeout(() => {msg.delete()}, 200)
        }
    }