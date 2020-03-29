module.exports = {
	name : 'MemberInfo',
	description: 'Sends your info',
	execute(message, args){
    message.channel.send(`Your username: ${message.author.username}\nYour ID: ${message.author.id}`);
	}}