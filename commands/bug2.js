const Discord = require("discord.js"),
client = new Discord.Client();

module.exports.run = async (client, message, args) => {
const members = message.guild.members.cache.array();
const userFlag = [];
  let usersOnArray = "**Members with Bug Hunter Lvl 2**";
for (const member of members) {
    const flag = (member.user.flags || await member.user.fetchFlags()).toArray().includes("BUGHUNTER_LEVEL_2");
    if (flag) {
      usersOnArray += `\n<:dbbh2:849069859484205116>** \`${member.user.tag}\`** ID: (\`${member.user.id}\`)`;
    }
}
const embed = new Discord.MessageEmbed()
	.setDescription(usersOnArray)

message.channel.send(embed)
};



exports.config = {
  name: "bh2",
  guildOnly: true,
  aliases: ["bughunter_level_2"],
};