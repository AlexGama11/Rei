const Discord = require("discord.js");
 const client = new Discord.Client();
module.exports = {
	name : 'Crusade',
	description: 'Starts a crusade',
	execute(message, args){
      const embed = new Discord.MessageEmbed()
      .setColor('#FF0000')
      .setTitle('Crusade Has Started')
      .setDescription('The Pontifex Maximus has allowed this With his authority.')
      .setThumbnail('https://imgur.com/gallery/JeGlkqj')
      .addField(message.author.username, 'Has requested a Crusade, all heretics shall be ***purged***', true)
      message.channel.send({embed});
	  }}