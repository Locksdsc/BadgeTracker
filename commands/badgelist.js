const Discord = require("discord.js"),
client = new Discord.Client();

module.exports.run = async (client, message, args) => {
message.channel.send({embed: {
    color: '#RRGGBB',
  description:
`
<a:dbbadges:849281282424307783> **Discord Badges**

**Hypesquad Houses :**
\`hb\` , \`hbl\` , \`hbr\`

**Rare Badges :**
\`es\` , \`dev\` , \`he\`

**Bug Hunters :**
\`bh1\` , \`bh2\`

**VIP badges :**
\`dp\` , \`de\` 

**Discord Moderation**
\`cm\`

**You can also search the badges by typing their name**

Example : **bb.early_supporter*️*️

\`⚠️\` **Badge searching can take some time when it is in a large server

\`📁\` 10 badges , \`✔️\` 2 official badges️️ ️`}});
};
exports.config = {
  name: "badgelist",
  guildOnly: true,
  aliases: ["bl"],
};