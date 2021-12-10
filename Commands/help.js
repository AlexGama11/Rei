const fs = require('fs');
const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require("discord.js");
const { Client, Collection, Intents } = require("discord.js");
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

module.exports =
{
    async execute(interaction) {

        let avatar = interaction.user.displayAvatarURL({ dynamic: true, size: 1024 });

        let str = [];
        const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

        const helpEmbed = new MessageEmbed()
            .setColor('#73c0f9')
            .setTitle(`Help Command`)
            .setDescription(`Here's the list of all the commands Rei can do`)
            .setThumbnail('https://cdn.discordapp.com/avatars/691369693206020197/3d0a639ce2c4972ddfe8b4569cde04bb.webp?size=2048')
            .setFooter(`${interaction.user.username} requested requested server info`, avatar, true)
            .setTimestamp()

        for (const file of commandFiles) {
            const command = require(`./${file}`);
            //prints with js
            str += `Name: ${file} \n`;
        }

        helpEmbed.addField(str, 'test', true)

        await interaction.reply({ embeds: [helpEmbed] });

    },

    data: new SlashCommandBuilder()
        .setName('help')
        .setDescription('Lists all commands rei can do!')
}