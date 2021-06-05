const Discord = require("discord.js"),
client = new Discord.Client();

module.exports.run = async (client, message, args) => {
const members = message.guild.members.cache.array();
const userFlag = [];
  let usersOnArray = "**Members with Certified Moderator**";
for (const member of members) {
    const flag = (member.user.flags || await member.user.fetchFlags()).toArray().includes("CERTIFIED_MODERATOR");
    if (flag) {
      usersOnArray += `\n<:dbcertifiedmod:849969030928531507>** \`${member.user.tag}\`** ID: (\`${member.user.id}\`)`;
    }
}
const embed = new Discord.MessageEmbed()
	.setDescription(usersOnArray)

message.channel.send(embed)
};



exports.config = {
  name: "cm",
  guildOnly: true,
  aliases: ["certified_moderator","moderator","mod"],
};