module.exports = {
	name : 'Version',
	description: 'Displays bot version and changelogs',
	execute(message, args){ 
    message.channel.send(`Bot Version 2.0. Changelog:
	Added Music Commands;
	Optimized Command System;
	More detailed Help Command;
	Added Creator Info;
	Added Avatar Command.`);
    }}