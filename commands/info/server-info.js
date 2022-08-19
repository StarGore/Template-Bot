const { MessageEmbed } = require("discord.js");
const moment = require('moment');
const verifikation = {NONE: '1.', LOW: '2.', MEDIUM: '3.', HIGH: '4.', VERY_HIGH: '5.'};
const regions = {brazil: 'Brazil', europe: '<:EuropeFlag:864585613604028456> Europe', hongkong: 'Hong Kong', india: 'India', japan: 'Japan', russia: 'Russia', singapore: 'Singapore', southafrica: 'South Africa', sydeny: 'Sydeny', 'us-central': 'US Central','us-east': 'US Eastside','us-west': 'US Westside','us-south': 'US Southside'};
module.exports = {
    name: 'serverinfo',
    execute: async (client, message, args) => {

      const user = message.author;
      const server = message.guild;
      let bans = await message.guild.fetchBans();

  let embed = new MessageEmbed()
  .setAuthor(server.name)
  .setThumbnail(server.iconURL({ dynamic: true }))
  .setColor("#a1f1ff")
  .setImage("https://media.discordapp.net/attachments/622172689397710858/622181515769675815/divider.gif")
  .setFooter(`Server created on the: ${moment(server.createdAt).format("D. MMMM YYYY")} `)

  .addField('**Server ID:**', `${server.id}`, true )

  .addField('**Owner:**', `${server.owner}`, true )

  .addField('**Description:**', `${server.description || '❌'}`)

  .addField('**Region:**', `${regions[server.region] || '❌'}`)

  .addField('**Boosts:**', `${server.premiumSubscriptionCount || '0'} (Level ${server.premiumTier})`)

  .addField('**Statistics:**', `\n${server.memberCount} Users\n${server.members.cache.filter(m=>m.user.bot).size} Bots\n💎 ${server.emojis.cache.size} Emotes`, true)

  .addField('.', `\n${server.channels.cache.size} Text\${server.channels.cache.filter(c => c.type === "voice").size} Voice\n${server.roles.cache.size} Roles`, true )
  
  .addField('**Server Security:**', `\n${bans.size} Bans\n🔒 ${verifikation[server.verificationLevel]} Verifikationsstufe`);

  message.channel.send(embed)
    }
}
//Do = 4th