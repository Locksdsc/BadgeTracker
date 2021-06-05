const Discord = require("discord.js"),
client = new Discord.Client();

module.exports.run = async (client, message, args) => {
const members = message.guild.members.cache.array();
const userFlag = [];
  let usersOnArray = "**Members with Hypesquad Events**";
for (const member of members) {
    const flag = (member.user.flags || await member.user.fetchFlags()).toArray().includes("HYPESQUAD_EVENTS");
    if (flag) {
      usersOnArray += `\n<:dbhype:849246740409876500>** \`${member.user.tag}\`** ID: (\`${member.user.id}\`)`;
    }
}
const embed = new Discord.MessageEmbed()
	.setDescription(usersOnArray)

message.channel.send(embed)
};



exports.config = {
  name: "he",
  guildOnly: true,
  aliases: ["hypesquad_events","hypesquad"],
};