const Discord = require("discord.js");
const client = new Discord.Client();

module.exports = {
    name: 'Avatar',
    description: 'Gets the Avatar of whoever you mention',
    execute(message, args) {

        let avatar = message.author.displayAvatarURL({ format: "png", dynamic: true });
        let user = message.mentions.users.first();
        let avatar1 = user.displayAvatarURL({ format: "png", dynamic: true });

        if (!message.mentions.users.size) {
            const embed = new Discord.MessageEmbed()
                .setColor('#00cc00')
                .setTitle('Your Avatar')
                .setDescription(message.author.username, 's avatar')
                .setImage(avatar)
                .setFooter(`${message.author.username} requested an image of their own avatar`, avatar, true)
                .setTimestamp()
            message.channel.send({ embed });
        }

        else {
            const embed = new Discord.MessageEmbed()
                .setColor('#e6e600')
                .setTitle('The avatar of whoever you tagged')
                .setDescription(user.username, 's avatar')
                .setImage(avatar1)
                .setFooter(`${message.author.username} requested ${user.username}'s avatar`, avatar, true)
                .setTimestamp()
            message.channel.send({ embed });
        }
    }
}