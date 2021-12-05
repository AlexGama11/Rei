const Discord = require("discord.js");
const client = new Discord.Client();
module.exports = {
	name : 'Server',
	description: 'Sends Current Server Info',
	execute(message, args) {
        let avatar = message.author.displayAvatarURL({ format: "png", dynamic: true });
        let serverIcon = message.guild.iconURL();

        const embed = new Discord.MessageEmbed()
            .setColor('#ff00ff')
            .setTitle('Server Info')
            .setDescription(`Gets server name and membercount`)
            .setImage(serverIcon)
            .addField('Server name:', `${message.guild.name}`, true)
            .addField('Member Count', `${message.guild.memberCount}`, true)
            .setFooter(`${message.author.username} requested server info`, avatar, true)
            .setTimestamp()
        message.channel.send({ embed });
    }
}