const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = ".";
var adminprefix = '.'

const developers = ["592015903189762081"]

client.on('ready', () => {
        console.log(`back`);
              client.user.setActivity("🎵 لحن جحيم ", {type: 'LISTENING'});
      
      });   // Toxic Code

client.login(process.env.TOKEN);// لا تغير فيها شيء
