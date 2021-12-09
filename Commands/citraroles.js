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
			.addField(`Click a button below to grant the role!`, '\u200b', false)
			.setFooter(`${interaction.user.username} wishes to get a role`, avatar, true)
			.setTimestamp()

		const bRolesEmbed = new MessageEmbed()
			.setColor('#8e5539')
			.setTitle(`Choose your role`)
			.setDescription('Here are the battling roles you can choose in CitraPSS')
			.setThumbnail('https://cdn.discordapp.com/icons/592003559243907072/d96e0a691a3bba148f3ad91d286a36d4.webp?size=2048')
			.addField(`Click a button below to grant the role!`, '\u200b', false)
			.setFooter(`${interaction.user.username} wishes to get a role`, avatar, true)
			.setTimestamp()

		const rolesEmbedGranted = new MessageEmbed()
			.setColor('#8e5539')
			.setTitle(`Choose your role`)
			.setDescription('Here are the trading roles you can choose in CitraPSS')
			.setThumbnail('https://cdn.discordapp.com/icons/592003559243907072/d96e0a691a3bba148f3ad91d286a36d4.webp?size=2048')
			.addField(`Role Granted!`, '\u200b', false)
			.setFooter(`${interaction.user.username} received a role`, avatar, true)
			.setTimestamp()

		const rolesEmbedRemoved = new MessageEmbed()
			.setColor('#8e5539')
			.setTitle(`Choose your role`)
			.setDescription('Here are the trading roles you can choose in CitraPSS')
			.setThumbnail('https://cdn.discordapp.com/icons/592003559243907072/d96e0a691a3bba148f3ad91d286a36d4.webp?size=2048')
			.addField(`Role Removed!`, '\u200b', false)
			.setFooter(`${interaction.user.username} removed a role`, avatar, true)
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
				.setCustomId('tg4')
				.setLabel('Trader Gen 4')
				.setStyle('SECONDARY'),
		)
		.addComponents(
			new MessageButton()
				.setCustomId('tg5')
				.setLabel('Trader Gen 5')
				.setStyle('SECONDARY'),
		)
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
				.setCustomId('bg4')
				.setLabel('Battler Gen 4')
				.setStyle('SECONDARY'),
		)
		.addComponents(
			new MessageButton()
				.setCustomId('bg5')
				.setLabel('Battler Gen 5')
				.setStyle('SECONDARY'),
		)
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

			switch (i.customId)
			{
				case "tRow":
					await i.update({ ephemeral: true, embeds: [tRolesEmbed], components: [trader] });
					break;

				case "bRow":
					await i.update({ ephemeral: true, embeds: [bRolesEmbed], components: [battler] });
					break;

				case "tg4":
					if (guildMember.roles.cache.some(role => role.id === '918624122211274762')){
						guildMember.roles.remove(['918624122211274762']);
						await i.update({ ephemeral: true, embeds: [rolesEmbedRemoved], components: [trader] });
					}
					else {
						guildMember.roles.add(['918624122211274762']);
						await i.update({ ephemeral: true, embeds: [rolesEmbedGranted], components: [trader] });
					}
					break;

				case "tg5":
					if (guildMember.roles.cache.some(role => role.id === '918624356383477820')) {
						guildMember.roles.remove(['918624356383477820']);
						await i.update({ ephemeral: true, embeds: [rolesEmbedRemoved], components: [trader] });
					}
					else {
						guildMember.roles.add(['918624356383477820']);
						await i.update({ ephemeral: true, embeds: [rolesEmbedGranted], components: [trader] });
                    }
					break;

				case "tg6":
					if (guildMember.roles.cache.some(role => role.id === '918517265320788008')) {
						guildMember.roles.remove(['918517265320788008']);
						await i.update({ ephemeral: true, embeds: [rolesEmbedRemoved], components: [trader] });
					}
					else {
						guildMember.roles.add(['918517265320788008']);
						await i.update({ ephemeral: true, embeds: [rolesEmbedGranted], components: [trader] });
                    }
					break;

				case "tg7":
					if (guildMember.roles.cache.some(role => role.id === '918517238540165180')) {
						guildMember.roles.remove(['918517238540165180']);
						await i.update({ ephemeral: true, embeds: [rolesEmbedRemoved], components: [trader] });
					}
					else {
						guildMember.roles.add(['918517238540165180']);
						await i.update({ ephemeral: true, embeds: [rolesEmbedGranted], components: [trader] });
                    }
					break;

				case "tg8":
					if (guildMember.roles.cache.some(role => role.id === '918517291065417810')) {
						guildMember.roles.remove(['918517291065417810']);
						await i.update({ ephemeral: true, embeds: [rolesEmbedRemoved], components: [trader] });
					}
					else {
						guildMember.roles.add(['918517291065417810']);
						await i.update({ ephemeral: true, embeds: [rolesEmbedGranted], components: [trader] });
                    }
					break;

				case "bg4":
					if (guildMember.roles.cache.some(role => role.id === '918624449689968700')) {
						guildMember.roles.remove(['918624449689968700']);
						await i.update({ ephemeral: true, embeds: [rolesEmbedRemoved], components: [battler] });
					}
					else {
						guildMember.roles.add(['918624449689968700']);
						await i.update({ ephemeral: true, embeds: [rolesEmbedGranted], components: [battler] });
                    }
					break;

				case "bg5":
					if (guildMember.roles.cache.some(role => role.id === '918624451459960842')) {
						guildMember.roles.remove(['918624451459960842']);
						await i.update({ ephemeral: true, embeds: [rolesEmbedRemoved], components: [battler] });
					}
					else {
						guildMember.roles.add(['918624451459960842']);
						await i.update({ ephemeral: true, embeds: [rolesEmbedGranted], components: [battler] });
                    }
					break;

				case "bg6":
					if (guildMember.roles.cache.some(role => role.id === '918517405599268945')) {
						guildMember.roles.remove(['918517405599268945']);
						await i.update({ ephemeral: true, embeds: [rolesEmbedRemoved], components: [battler] });
					}
					else {
						guildMember.roles.add(['918517405599268945']);
						await i.update({ ephemeral: true, embeds: [rolesEmbedGranted], components: [battler] });
                    }
					break;

				case "bg7":
					if (guildMember.roles.cache.some(role => role.id === '918517327937544223')) {
						guildMember.roles.remove(['918517327937544223']);
						await i.update({ ephemeral: true, embeds: [rolesEmbedRemoved], components: [battler] });
					}
					else {
						guildMember.roles.add(['918517327937544223']);
						await i.update({ ephemeral: true, embeds: [rolesEmbedGranted], components: [battler] });
                    }
					break;

				case "bg8":
					if (guildMember.roles.cache.some(role => role.id === '918517439657021531')) {
						guildMember.roles.remove(['918517439657021531']);
						await i.update({ ephemeral: true, embeds: [rolesEmbedRemoved], components: [battler] });
					}
					else {
						guildMember.roles.add(['918517439657021531']);
						await i.update({ ephemeral: true, embeds: [rolesEmbedGranted], components: [battler] });
                    }
					break;
            }

		});

		collector.on('end', collected => console.log(`Collected ${collected.size} items`));

	},

	data: new SlashCommandBuilder()
		.setName('citraroles')
		.setDescription('Gives you the role you wish to have')
};