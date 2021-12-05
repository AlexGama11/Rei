const Discord = require("discord.js");
 const client = new Discord.Client();
module.exports = {
	name : 'Creator',
	description: 'Shows creator info',
    execute(message, args) {
        let avatar = message.author.displayAvatarURL({ format: "png", dynamic: true });


      const embed = new Discord.MessageEmbed()
      .setColor('#FF0000')
      .setTitle('Creator info')
      .setDescription('Gets some links about the creator of the bot')
      .setImage('https://cdn.discordapp.com/avatars/224258146078556160/cc2292a98625aa99eb8e0f9d33fc2e05.webp?size=2048')
      .addField('Glitch.Com', 'https://glitch.com/@AlexGama11', true)
      .addField('Github', 'https://github.com/AlexGama11', true)
      .addField('Twitter', 'https://twitter.com/Alex_CorreiaG', true)
      .addField('Itch.io', 'https://alexmango.itch.io', true)
      .setFooter(`${message.author.username} requested info about the creator!`, avatar, true)
      .setTimestamp()
      message.channel.send({embed});
    }
}