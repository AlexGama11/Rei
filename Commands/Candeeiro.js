const Discord = require("discord.js");
const client = new Discord.Client();
module.exports = {
  name: 'Candeeiro',
  description: 'Shows the best unboxing video ever made!',
    execute(message, args) {
        let avatar = message.author.displayAvatarURL({ format: "png", dynamic: true });
        if (message.author.id === '224258146078556160' || message.author.id === '228195759646965760') {
            const embed = new Discord.MessageEmbed()
                .setColor('#00ffff')
                .setTitle('The Best Unboxing video ever made!')
                .setDescription('An inspiring video by XR7BoyShadow!')
                .setImage('https://i.ytimg.com/vi/0ibgt5W0B9E/hqdefault.jpg?sqp=-oaymwEjCPYBEIoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLArK34DCcQs-4Hd_Myp5Z6PpSridA')
                .addField('Video Link:', 'https://www.youtube.com/watch?v=0ibgt5W0B9E', true)
                .setFooter(`${message.author.username} requested the link to the best video ever made!`, avatar, true)
                .setTimestamp()
            message.channel.send({ embed });
        }
        else {
            message.channel.send(`You don't have permission to use this command!`);
        }
    }
  }