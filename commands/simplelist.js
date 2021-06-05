const Discord = require("discord.js"),
client = new Discord.Client();

module.exports.run = async (client, message, args) => {
message.channel.send({embed: {
    color: '#RRGGBB',
  description:
`
<a:dbbadges:849281282424307783> **BadgeList ( Easy )**

Early Supporter \`bb.early\`

Certified Developer \`bb.dev\`

House Balance \`bb.balance\`

House Bravery \`bb.bravery\`

House Brilliance \`bb.brilliance\`

Bug Hunter Lvl 1 \`bb.\`
`}});
};
exports.config = {
  name: "blsimple",
  guildOnly: true,
  aliases: ["easybl"],
};