const Discord = require("discord.js");
 const client = new Discord.Client();
module.exports = {
	name : 'Grimm',
	description: 'Grimm is so fucking stupid like for real',
	execute(message, args){
      const embed = new Discord.MessageEmbed()
      .setColor('#7b5c00')
      .setTitle('He really is so fucking stupid')
      .setDescription(`Imagine being <@588346168640274432> and being this fucking stupid seriously, why didn't he cum`)
      .setThumbnail('https://cdn.discordapp.com/attachments/692522039285645372/841268193350909972/unknown.png')
      .addField(message.author.username, 'has called grimm stupid lmaooo', true)
      .setTimestamp()
      message.channel.send({embed});
	  }}