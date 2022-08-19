const {MessageEmbed, Message} = require('discord.js');
module.exports = {
    name: 'role',
    execute: async (client, message, args) => {

    let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    
    if (!member) return message.channel.send(new MessageEmbed()
    .setColor("#000000")
    .setDescription("No mentioned member."));

    let role = message.mentions.roles.first() || message.guild.roles.cache.get(args[1]);

    if (!role) return message.channel.send(new MessageEmbed()
    .setColor("#000000")
    .setDescription("You didnt mention a role."));

    if (role.position >= message.guild.me.roles.highest.position) return message.channel.send(new MessageEmbed()
    .setColor("#000000")
    .setDescription("The role is above mine."));
    
    if (member.roles.cache.has(role.id)) {
        await member.roles.remove(role);
      
        return message.channel.send(
          new MessageEmbed()
          .setColor("#000000")
          .setDescription(`${role} was removed from ${member}.`),
        );
      }
      
      await member.roles.add(role);
      message.channel.send(
        new MessageEmbed()
        .setColor("#000000")
        .setDescription(`${role} was added to ${member}.`),
      );
    }
}