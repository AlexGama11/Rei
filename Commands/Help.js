const fs = require('fs')
const Discord = require("discord.js");
const client = new Discord.Client();

module.exports = {
	name: 'Help',
	description: 'List all available commands.',
	execute(message) {
		let str = '';
		const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

		for (const file of commandFiles) {
			const command = require(`./${file}`);
			str += `Name: ${command.name}, Description: ${command.description} \n`;
		}

		//potential for embed, learning how
		//let avatar = message.author.displayAvatarURL({ format: "png", dynamic: true });

		//const embed = new Discord.MessageEmbed()
		//	.setColor('#ff00ff')
		//	.setTitle('Help')
		//	.setDescription(`Lists all commands`)
		//	.setImage(`https://cdn.discordapp.com/avatars/691369693206020197/3d0a639ce2c4972ddfe8b4569cde04bb.webp?size=2048`)
		//	.addField(str)
		//	.setFooter(`${message.author.username} requested server info`, avatar, true)
		//	.setTimestamp()
		//message.channel.send({ embed });

		message.channel.send(str);
	},
};