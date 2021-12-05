const fs = require('fs');
const Discord = require("discord.js");
const { prefix, token } = require('./config.json');
const client = new Discord.Client(); 
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);

	// set a new item in the Collection
	// with the key as the command name and the value as the exported module
	client.commands.set(command.name, command);
}


client.on("ready", () => {
  
  console.log(`Rey Ayanami ready for departure.`); 
  
  client.user.setActivity(`Use ;help to get a Command List`);
});

        client.on('message', msg=>{
    	if(msg.content === "Mplay"){
        msg .channel.send('Go fuck yourself <@391240294567378946>');
        }});


        client.on('message', message => {
  if (message.content === 'ping') {  
    message.channel.send(`:ping_pong: Latency is ${Date.now() - message.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`);
  }
});



client.on("message", async message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  
  // Here we separate our "command" name, and our "arguments" for the command. 
  // e.g. if we have the message "+say Is this the real life?" , we'll get the following:
  // command = say
  // args = ["Is", "this", "the", "real", "life?"]
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  
  // Let's go with a few common example commands! Feel free to delete or change those.


  if(command === 'grimm') {

    client.commands.get('Grimm').execute(message, args);

    };

    if(command === 'sus') {

    client.commands.get('Sus').execute(message, args);

    };

    if(command === 'unsus') {

    client.commands.get('Unsus').execute(message, args);

    };

  if(command === "help") {

    client.commands.get('Help').execute(message, args);

    };

  if(command === 'candeeiro') {

    client.commands.get('Candeeiro').execute(message, args);

    };



  if(command === 'server') {

    client.commands.get('Server').execute(message, args);

	}


   if (command === 'avatar') {

	client.commands.get('Avatar').execute(message, args);

    }

    if (command === 'version') {
     client.commands.get('Version').execute(message, args);
	}

    if (command === 'creator') {
     client.commands.get('Creator').execute(message, args);
	}
  });

client.login(token);