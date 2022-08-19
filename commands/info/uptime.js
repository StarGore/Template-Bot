module.exports = {
	name: 'uptime',
    execute(client, message, args) {
        const moment = require("moment");
        
        require("moment-duration-format");

        const uptime = moment.duration(client.uptime).format(`D [days], H [hours], m [minutes], s [seconds]`);

        message.channel.send(`I'm online for ${uptime}`)
    }
}