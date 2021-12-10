const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require("discord.js");
const { Client, Collection, Intents } = require("discord.js");
const axios = require("axios");
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

module.exports =
{
	async execute(interaction) {

		let getInfo = async () => {
			let info = await axios.get("https://api.citra-emu.org/lobby");
			let answer = info.data;
			return answer;
		};
		let answerValue = await getInfo();

	/*	answerValue.rooms.forEach(element => console.log(element));*/

		/*let citra = answerValue.rooms.toString()*/

		interaction.reply(`Here is the Citra Server List:\n Address: ${answerValue.rooms[0].address}\n Port: ${answerValue.rooms[0].port}\n Name: ${answerValue.rooms[0].name}\n Description: ${answerValue.rooms[0].description}\n Owner: ${answerValue.rooms[0].owner}\n Preferred Game Name: ${answerValue.rooms[0].preferredGameName}\n Has Password: ${answerValue.rooms[0].hasPassword}\n Max Players: ${answerValue.rooms[0].maxPlayers}\n `);

	},

	data: new SlashCommandBuilder()
		.setName('citraserverlist')
		.setDescription('Provides a list of all citra servers!')
};