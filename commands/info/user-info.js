const { MessageEmbed }  = require('discord.js')
module.exports = {
    name: 'userinfo',
    execute: async (client, message, args) => {

        const moment = require('moment');
        const member =  message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
        var er = ' ';

        const embed = new MessageEmbed() 
             .setTitle(`${member.user.tag}`)
             .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
             .setColor(member.displayHexColor)

             .addField('**Mention:**', member)

             .addField('**ID:**', member.id)

             .addField('**Account created:**', `${moment(member.user.createdAt).format('DD. MMMM YYYY, HH:MM')}`, true)

             .addField('**Joined Server:**', `${moment(member.joinedAt).format('DD. MMMM YYYY, HH:MM')}`, true)

             .addField('**Highest Role:**', member.roles.highest);
             
             if (member.hasPermission('ADMINISTRATOR')) er = 'Administrator';
             if (member.user.id == message.guild.ownerID) er = 'Owner';

           message.channel.send(embed);
           }
         }