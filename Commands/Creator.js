const Discord = require("discord.js");
 const client = new Discord.Client();
module.exports = {
	name : 'Creator',
	description: 'Shows creator info',
	execute(message, args){
      const embed = new Discord.MessageEmbed()
      .setColor('#FF0000')
      .setTitle('Creator info')
      .setDescription('info of the bot creator')
      .setThumbnail('https://discordapp.com/channels/559842234346766391/687770436637032618/692570819351543820')
      .addField('Discord', 'AlexMango#7217', true)
      .addField('Instagram', 'Alex_.1893', true)
      .addField('Twitter', 'Alex_CorreiaG', true)
      .addField(message.author.username, 'Has requested creator info', true)
      message.channel.send({embed});
	  }}