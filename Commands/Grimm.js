const Discord = require("discord.js");
 const client = new Discord.Client();
module.exports = {
	name : 'Grimm',
	description: 'Grimm is so fucking stupid like for real',
    execute(message, args) {
     let avatar = message.author.displayAvatarURL({ format: "png", dynamic: true });
            const embed = new Discord.MessageEmbed()
                .setColor('#6600ff')
                .setTitle('He really is so fucking stupid')
                .setDescription(`Imagine being <@588346168640274432> and being this fucking stupid seriously, why didn't he cum`)
                .setThumbnail('https://cdn.discordapp.com/attachments/692522039285645372/841268193350909972/unknown.png')
                .setFooter(`${message.author.username} called grimm stupid lmaooo`, avatar, true)
                .setTimestamp()
            message.channel.send({ embed });
   
    }
}