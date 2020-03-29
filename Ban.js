module.exports = {
	name: 'Ban',
	description: 'Ban someone',
	execute(message) {
		 let member = message.mentions.members.first();

		 member.ban().then((member) => {
          message.channel.send(`:wave: ${member.displayName} has been banned`);
          })
          .catch(() => {
             if (!message.member.hasPermission(['ADMINISTRATOR'])) {
             message.reply("You cannot ban members");
             } 
           else if (member.hasPermission(['BAN_MEMBERS', 'ADMINISTRATOR'])) {
            message.reply("You cannont ban this member");
            }
            })
     }}