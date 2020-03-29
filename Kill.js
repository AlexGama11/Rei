const Discord = require("discord.js");
const client = new Discord.Client();
module.exports = {
	name : 'Kill',
	description: 'Kills someone you mention',
	execute(message, args){
    if (!message.mentions.users.size) {
	  return message.reply('you need to tag a user in order to kill them!');
      }

      const taggedUser = message.mentions.users.first();

     const embed = new Discord.MessageEmbed()
      .setColor('#26DCC6')
      .setTitle('Someone Has been Killed!')
      .setDescription(`You have killed: ${taggedUser.username}`)
      .setThumbnail('https://thumbs.gfycat.com/PrestigiousFavorableCheetah-mobile.mp4')
      message.channel.send({embed});
	}}