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
  
  client.user.setActivity(`Use ?help to get a Command List`);
});

client.on('message', msg=>{
    if(msg.content === "Hi"){
	msg.reply('Hello There, my name is Rey Ayanami and I pilot Eva-00');
    }});

client.on('message', msg=>{
    if(msg.content === "Waifu"){
	msg.reply('Your waifu is trash');
    }});

client.on('message', msg=>{
    	if(msg.content === "Fuck"){
        msg.reply('You');
        }});

        client.on('guildMemberAdd', member =>{
    member.send(`Welcome to our Server! Please read the rules!`)
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

  if(command === "say") {

    client.commands.get('Say').execute(message, args);

    };

  if(command === 'crusade') {

    client.commands.get('Crusade').execute(message, args);

    };

  if(command === "help") {

    client.commands.get('Help').execute(message, args);

    };

  if(command === 'candeeiro') {

    client.commands.get('Candeeiro').execute(message, args);

    };

  if(command === 'kill') {

    client.commands.get('Kill').execute(message, args);

    };

    if(command === 'kick') {

    client.commands.get('Kick').execute(message, args);

    };


  if(command === 'server') {

    client.commands.get('Server').execute(message, args);

	}

  if(command === 'memberinfo') {

    client.commands.get('Member').execute(message, args);

    }

  if (command === 'prune') {

	client.commands.get('Prune').execute(message, args);

    }

   if (command === 'avatar') {

	client.commands.get('Avatar').execute(message, args);

    }

   if (command === 'ban') {

	client.commands.get('Ban').execute(message, args);

    }
    
    if (command === 'stop') {

	client.commands.get('Stop').execute(message, args);

    }

    if (command === 'play') {

	client.commands.get('Play').execute(message, args);

    }

    if (command === 'nowplaying') {

	client.commands.get('NowPlaying').execute(message, args);

    }

    if (command === 'skip') {

	client.commands.get('Skip').execute(message, args);

    }

    if (command === 'version') {
     client.commands.get('Version').execute(message, args);
	}

    if (command === 'creator') {
     client.commands.get('Creator').execute(message, args);
	}
  });

client.login(token);