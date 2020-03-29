module.exports = {
	name : 'Say',
	description: 'Find Out',
	execute(message, args){
    // makes the client say something and delete the message. As an example, it's open to anyone to use. 
    // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
    message.delete().catch(O_o=>{}); 
    // And we get the client to say the thing: 
    message.channel.send("Say you, say me");
    }}