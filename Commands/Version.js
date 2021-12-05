const Discord = require("discord.js");
const client = new Discord.Client();
module.exports = {
	name : 'Version',
	description: 'Displays bot version and changelogs',
	execute(message, args) {
        let avatar = message.author.displayAvatarURL({ format: "png", dynamic: true });


        const embed = new Discord.MessageEmbed()
            .setColor('#000099')
            .setTitle('Version Info')
            .setDescription('Gets the latest version info!')
            .setImage('https://cdn.discordapp.com/avatars/691369693206020197/3d0a639ce2c4972ddfe8b4569cde04bb.webp?size=2048')
            .addField('Change:', 'Reworked Commands', true)
            .addField('Removal:', 'Deleted some commands', true)
            .addField('Removal:', 'Removed Youtube API stuff', true)
            .addField('Github for the bot:', 'https://github.com/AlexGama11', true)
            .addField('Version:', '2.0.1', true)
            .setFooter(`${message.author.username} requested info about the bot version!`, avatar, true)
            .setTimestamp()
        message.channel.send({ embed });
    }}