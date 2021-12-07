const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require("discord.js");
const { Client, Collection, Intents } = require("discord.js");
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

module.exports =
{
    async execute(interaction) {

        let avatar = interaction.user.displayAvatarURL({ dynamic: true, size: 1024 });
        let serverIcon = interaction.guild.iconURL();

        const serverEmbed = new MessageEmbed()
            .setColor('#ff00ff')
            .setTitle(`Server Info`)
            .setDescription('Gets server name and member count')
            .setThumbnail(serverIcon)
            .addField('Server name:', `${interaction.guild.name}`, true)
            .addField('Member Count:', `${interaction.guild.memberCount}`, true)
            .setFooter(`${interaction.user.username} requested requested server info`, avatar, true)
            .setTimestamp()

        await interaction.reply({ embeds: [serverEmbed] });
    },

    data: new SlashCommandBuilder()
        .setName('server')
        .setDescription('Gets the name and member count')
}