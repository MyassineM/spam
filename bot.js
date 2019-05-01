const Discord = require("discord.js");
const client = new Discord.Client();
const client2 = new Discord.Client();

client.on('message', message => {
    var prefix = "¤";
      if (!message.content.startsWith(prefix)) return;
      var args = message.content.split(' ').slice(1);
      var argresult = args.join(' ');
      if (message.author.id == 410052613996937217) return;
    
    if (message.content.startsWith(prefix + 'p')) {
      client.user.setGame(argresult);
        message.channel.sendMessage(`**${argresult}** : Status changed`)
    } else
    
    if (message.content.startsWith(prefix + 's')) {
      client.user.setGame(argresult, "https://www.twitch.tv/ChampionBot");
        message.channel.sendMessage(`**${argresult}** :The bot stream has been changed`)
    } else
    
    if (message.content.startsWith(prefix + 'n')) {
      client.user.setUsername(argresult).then
          message.channel.sendMessage(`**${argresult}** : Name changed`)
      return message.reply("**You**");
    } else
    if (message.content.startsWith(prefix + 'i')) {
      client.user.setAvatar(argresult);
        message.channel.sendMessage(`**${argresult}** : The bot image has been changed`);
    
    }
    });

client.on("guildMemberAdd", member => {
        if(member.guild.id === "573040980039827477") {  
  const channel = member.guild.channels.find('id', '566293153783742464'); 
if (!channel) return;
channel.send(`**<@${member.user.id}>    **Welcome To __C__alifornia Shop ❤ ** `)
}}); // by: faisl


client.login(process.env.BOT_TOKEN);// Blood Code
