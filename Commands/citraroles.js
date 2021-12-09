const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed, Interaction, GuildMemberRoleManager, MessageActionRow, MessageButton } = require("discord.js");
const { Client, Collection, Intents } = require("discord.js");
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

module.exports =
{
	async execute(interaction) {

		let guildMember = interaction.member;
		let avatar = interaction.user.displayAvatarURL({ dynamic: true, size: 1024 });

		const rolesEmbed = new MessageEmbed()
			.setColor('#8e5539')
			.setTitle(`Choose your role`)
			.setDescription('Choose between the two categories of roles in CitraPSS')
			.setThumbnail('https://cdn.discordapp.com/icons/592003559243907072/d96e0a691a3bba148f3ad91d286a36d4.webp?size=2048')
			.addField(`Trading`, 'These roles are for those who wish to trade Pok\xE9mon', true)
			.addField(`Battling`, 'These roles are for those who wish to battle with their Pok\xE9mon', true)
			.setFooter(`${interaction.user.username} wishes to get a role`, avatar, true)
			.setTimestamp()

		const tRolesEmbed = new MessageEmbed()
			.setColor('#8e5539')
			.setTitle(`Choose your role`)
			.setDescription('Here are the trading roles you can choose in CitraPSS')
			.setThumbnail('https://cdn.discordapp.com/icons/592003559243907072/d96e0a691a3bba148f3ad91d286a36d4.webp?size=2048')
			.addField(`Roles`, '- TraderGen6\n- TraderGen7\n- TraderGen8\n', true)
			.setFooter(`${interaction.user.username} wishes to get a role`, avatar, true)
			.setTimestamp()

		const bRolesEmbed = new MessageEmbed()
			.setColor('#8e5539')
			.setTitle(`Choose your role`)
			.setDescription('Here are the battling roles you can choose in CitraPSS')
			.setThumbnail('https://cdn.discordapp.com/icons/592003559243907072/d96e0a691a3bba148f3ad91d286a36d4.webp?size=2048')
			.addField(`Roles`, '- BattlerGen6\n- BattlerGen7\n- BattlerGen8', true)
			.setFooter(`${interaction.user.username} wishes to get a role`, avatar, true)
			.setTimestamp()

		//================================================================================================================================//

		const initial = new MessageActionRow()
		.addComponents(
			new MessageButton()
				.setCustomId('tRow')
				.setLabel('Trader Roles')
				.setStyle('PRIMARY'),
		)
		.addComponents(
			new MessageButton()
				.setCustomId('bRow')
				.setLabel('Battler Roles')
				.setStyle('PRIMARY'),
		)

		//================================================================================================================================//


		const trader = new MessageActionRow()
			.addComponents(
				new MessageButton()
					.setCustomId('tg6')
					.setLabel('Trader Gen 6')
					.setStyle('SECONDARY'),
		)
		.addComponents(
			new MessageButton()
				.setCustomId('tg7')
				.setLabel('Trader Gen 7')
				.setStyle('SECONDARY'),
		)
		.addComponents(
			new MessageButton()
				.setCustomId('tg8')
				.setLabel('Trader Gen 8')
				.setStyle('SECONDARY'),
		)

		//================================================================================================================================//

		const battler = new MessageActionRow()
		.addComponents(
			new MessageButton()
				.setCustomId('bg6')
				.setLabel('Battler Gen 6')
				.setStyle('SECONDARY'),
		)
		.addComponents(
			new MessageButton()
				.setCustomId('bg7')
				.setLabel('Battler Gen 7')
				.setStyle('SECONDARY'),
		)
		.addComponents(
			new MessageButton()
				.setCustomId('bg8')
				.setLabel('Battler Gen 8')
				.setStyle('SECONDARY'),
		)


		await interaction.reply({ ephemeral: true, embeds: [rolesEmbed], components: [initial] });

		const filter = i => i.user.id === interaction.user.id;

		const collector = interaction.channel.createMessageComponentCollector({ filter, time: 60000 });

		collector.on('collect', async i => {

			if (i.customId === 'tRow') {
				i.reply({ ephemeral: true, embeds: [tRolesEmbed], components: [trader] });
			}

			if (i.customId === 'bRow') {
				i.reply({ ephemeral: true, embeds: [bRolesEmbed], components: [battler] });
			}

			if (i.customId === 'tg6') {
				guildMember.roles.add(['918517265320788008']);
				i.reply({ content: 'Role Added!', ephemeral: true });
			}

			if (i.customId === 'tg7') {
				guildMember.roles.add(['918517238540165180']);
				i.reply({ content: 'Role Added!', ephemeral: true });
			}

			if (i.customId === 'tg8') {
				guildMember.roles.add(['918517291065417810']);
				i.reply({ content: 'Role Added!', ephemeral: true });
			}

			if (i.customId === 'bg6') {
				guildMember.roles.add(['918517405599268945']);
				i.reply({ content: 'Role Added!', ephemeral: true });
			}

			if (i.customId === 'bg7') {
				guildMember.roles.add(['918517327937544223']);
				i.reply({ content: 'Role Added!', ephemeral: true });
			}

			if (i.customId === 'bg8') {
				guildMember.roles.add(['918517439657021531']);
				i.reply({ content: 'Role Added!', ephemeral: true });
			}

		});

		collector.on('end', collected => console.log(`Collected ${collected.size} items`));

	},

	data: new SlashCommandBuilder()
		.setName('citraroles')
		.setDescription('Gives you the role you wish to have')
};