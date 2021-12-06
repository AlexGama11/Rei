const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require("discord.js");
const { Client, Collection, Intents } = require("discord.js");
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

module.exports =
{
    async execute(interaction) {

        let avatar = interaction.user.displayAvatarURL({ dynamic: true, size: 1024 });

            const avatarEmbed = new MessageEmbed()
                .setColor('#030451')
                .setTitle(`Creator info`)
                .setDescription('Gets some profile links of the bot creators')
                .setImage('https://cdn.discordapp.com/avatars/691369693206020197/3d0a639ce2c4972ddfe8b4569cde04bb.webp?size=2048')
                .addField(`Alex's Glitch`, 'https://glitch.com/@AlexGama11', true)
                .addField(`Alex's Github`, 'https://github.com/AlexGama11', true)
                .addField(`Alex's Twitter`, 'https://twitter.com/Alex_CorreiaG', true)
                .addField(`Alex's Itch.io`, 'https://alexmango.itch.io', true)
                .addField(`Drgn's Twitter`, 'https://twitter.com/bttrdrgn', true)
                .addField(`Drgn's Github`, 'https://github.com/BttrDrgn', true)
                .setFooter(`${interaction.user.username} requested info about the bot creators`, avatar, true)
                .setTimestamp()

            await interaction.reply({ embeds: [avatarEmbed] });
    },

    data: new SlashCommandBuilder()
        .setName('creators')
        .setDescription('Gets bot creators info')
};