

const { Client, GatewayIntentBits, Partials } = require("discord.js");

const client = new Client({
  intents: [
      GatewayIntentBits.Guilds,
      GatewayIntentBits.GuildMessages,
      GatewayIntentBits.GuildPresences,
      GatewayIntentBits.GuildMessageReactions,
      GatewayIntentBits.DirectMessages,
      GatewayIntentBits.MessageContent
  ],
  partials: [Partials.Channel, Partials.Message, Partials.User, Partials.GuildMember, Partials.Reaction]
});

client.once('ready', () => {

    console.log(`Logged in as ${client.user.tag}.`);

    Logging_Channel = client.channels.cache.get(`1097612437773095032`);
    console.log(`Logging to ${Logging_Channel}`);


  });

  function log(message){
    console.log(`~~\nAuthor: ${message.author.tag} - Channel: ${message.channel.name} - Timestamp: ${message.createdTimestamp} \nMessage: ${message.content}`)
    
    Logging_Channel = client.channels.cache.get(`1097612437773095032`);
    Logging_Channel.send(`~~\nAuthor: ${message.author.tag} - Channel: ${message.channel.name} - Timestamp: ${message.createdTimestamp} \nMessage: ${message.content}`)
  }

  client.on("messageCreate", message => {
    Logging_Channel = client.channels.cache.get(`1097612437773095032`);
    
    if (message.channelId == Logging_Channel){return null}
    log(message)
    if (message.author.bot){return null}

    if (message.content.toLowerCase() === 'ping') {
      message.channel.send(`${message.member} pong`)
    }
  });



client.login("MTA5NzYwMj")
