const { MessageEmbed } = require("discord.js")
const moment = require("moment")
const permissionCount = {
    CREATE_INSTANT_INVITE: 'Create Invites',
    KICK_MEMBERS: 'Kick Users',
    BAN_MEMBERS: 'Ban Users',
    ADMINISTRATOR: 'Administrator',
    MANAGE_CHANNELS: 'Manage Channels',
    MANAGE_GUILD: 'Manage Guild',
    ADD_REACTIONS: 'Add Reactions',
    VIEW_AUDIT_LOG: 'Audit Log Permission',
    PRIORITY_SPEAKER: 'Important Speaker',
    STREAM: 'Streaming',
    VIEW_CHANNEL: 'View Channels',
    SEND_MESSAGES: 'Send Messages',
    SEND_TTS_MESSAGES: 'Text To Speech Messages',
    MANAGE_MESSAGES: 'Manage Messages',
    EMBED_LINKS: 'Embed Links',
    ATTACH_FILES: 'Attach Files',
    READ_MESSAGE_HISTORY: 'Read Message History',
    MENTION_EVERYONE: 'Mention Everyone',
    USE_EXTERNAL_EMOJIS: 'Global Emotes',
    VIEW_GUILD_INSIGHTS: 'Server Stats Insight',
    CONNECT: 'Connect',
    SPEAK: 'Speak',
    MUTE_MEMBERS: 'Mute Users',
    DEAFEN_MEMBERS: 'Deafen Users',
    MOVE_MEMBERS: 'Move Users',
    USE_VAD: 'Use VAD',
    CHANGE_NICKNAME: 'Change Nickname',
    MANAGE_NICKNAMES: 'Manage Nicknames',
    MANAGE_ROLES: 'Manage Roles',
    MANAGE_WEBHOOKS: 'Manage Webhooks',
    MANAGE_EMOJIS: 'Manage Emojis'
}

module.exports = {
    name: 'role-info',
    execute(client, message, args) {

        let role = message.mentions.roles.first() || message.guild.roles.cache.get(args[0]) || message.guild.roles.cache.find(r => r.name.toLowerCase() === args.join(" ").toLowerCase());

        if (!role) return message.channel.send(new MessageEmbed()
        .setColor("#ee1c84")
        .setDescription("Es wurde keine Rolle markiert."));

        let rolemembers;
        if (role.members.size > 20) rolemembers = role.members.map(e => `<@${e.id}>`).slice(0, 20).join(", ") + ` und noch ${role.members.size - 20} User`;
        if (role.members.size < 20) rolemembers = role.members.map(e => `<@${e.id}>`).join(", ");

        var perms = role.permissions.toArray();

        perms = perms.map(perm => {
            perm = permissionCount[perm];

            return perm;
        })

        let embed = new MessageEmbed()
            .setColor(role.color)
            .setAuthor(message.guild.name, message.guild.iconURL({ dynamic: true }))
            .addField(`**Name:**`, `<@&${role.id}>`)
            .addField(`**ID:**`, `${role.id}`)
            .addField(`**Mentionable:**`, `${role.mentionable.toString()
                .replace("true", "☑️")
                .replace("false", "❌")}`)
            .addField(`**Role Count:**`, `${role.members.size || 0}`)
            .addField(`**Hex Code:**`, `${role.hexColor}`)
            .addField(`**Creation Date:**`, `${moment(role.createdAt).format("DD. MMMM YYYY")}`)
            .addField(`**Permissions:**`, perms.join(', ') || 'The role doesnt have any permissions.');

        message.channel.send(embed);
            
    }
}