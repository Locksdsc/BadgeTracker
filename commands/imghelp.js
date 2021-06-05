const Discord = require("discord.js"),
client = new Discord.Client();

module.exports.run = async (client, message, args) => {
const embed = new Discord.MessageEmbed()
  .setDescription(`
  **Search badges**
  How to search badges 
  
  **bb.(badgename)** 
  Example :`)
  .setImage('https://media.discordapp.net/attachments/849413999253782538/849422868575551508/unknown.png');

message.channel.send(embed);
};

exports.config = {
  name: "imghelp",
  guildOnly: true,
  aliases: [],
};