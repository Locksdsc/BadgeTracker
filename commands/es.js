const Discord = require("discord.js"),
client = new Discord.Client();

module.exports.run = async (client, message, args) => {
const members = message.guild.members.cache.array();
const userFlag = [];
  let usersOnArray = "**Members with Early Supporter**";
for (const member of members) {
    const flag = (member.user.flags || await member.user.fetchFlags()).toArray().includes("EARLY_SUPPORTER");
    if (flag) {
      usersOnArray +=`\n<:dbearly:849069427412303903>** \`${member.user.tag}\`** ID: (\`${member.user.id}\`)`;
    }
}
const embed = new Discord.MessageEmbed()
	.setDescription(usersOnArray)

message.channel.send(embed)
};



exports.config = {
  name: "es",
  guildOnly: true,
  aliases: ["early_supporter","early"],
};