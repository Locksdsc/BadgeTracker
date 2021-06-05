const Discord = require("discord.js"),
client = new Discord.Client();

module.exports.run = async (client, message, args) => {
message.channel.send({embed: {
    color: '#RRGGBB',
  description:
`\`🔗 Invite the Bot\` [Click here](https://discord.com/oauth2/authorize?client_id=816769018353811536&scope=bot&permissions=912384)

\`🔗 Support Server\` [Click here](https://discord.gg/WMYzJxXw3J)`
}});
};

exports.config = {
  name: "invite",
  guildOnly: true,
  aliases: ["support"],
};