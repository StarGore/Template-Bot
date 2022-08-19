const fs = require('fs');
const Discord = require('discord.js');
const client = new Discord.Client();

client.snipe = {};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
client.categories = fs.readdirSync("./commands/");

var { token, prefix } = require("./config.json");

["command"].forEach(handler => {
    require(`./handler/${handler}`)(client);
})

client.once('ready', () => {
    console.log('Noded!');
    client.user.setActivity("Online!", { type: 1 });
});

client.on("messageDelete", message => {
    client.snipe[message.channel.id] = message;
    })

client.on("message", async message => {


    if(message.author.bot) return;

    if (message.content.indexOf(prefix) !== 0) return;
    
    const args = message.content.slice(prefix.length).split(/ +/);
    const cmd = args.shift().toLowerCase();
    
    var command = client.commands.get(cmd);
    if (!command) command = client.commands.get(client.aliases.get(cmd));
    if (!command) return;


    command.execute(client, message, args)
});

client.login(token);
