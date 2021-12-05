module.exports = {
	name: 'Unsus',
	description: 'remove the sus',
	execute(message) {
		 let member = message.mentions.members.first();
         let role = message.guild.roles.cache.get("837331471290597377");

          // or the person who made the command: let member = message.member;

           // Add the role!
           //member.roles.add(role).catch(console.error);

          // Remove a role!
           member.roles.remove(role).catch(console.error);
}}