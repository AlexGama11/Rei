module.exports = {
	name : 'Server',
	description: 'Sends Current Server Info',
	execute(message, args){
    message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
	}}