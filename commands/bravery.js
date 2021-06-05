const Discord = require("discord.js"),
client = new Discord.Client();

module.exports.run = async (client, message, args) => {
const members = message.guild.members.cache.array();
const userFlag = [];
  let usersOnArray = "**Members with Bravery**";
for (const member of members) {
    const flag = (member.user.flags || await member.user.fetchFlags()).toArray().includes("HOUSE_BRAVERY");
    if (flag) {
      usersOnArray += `\n<:dbhbr:849069585796694059>** \`${member.user.tag}\`** ID: (\`${member.user.id}\`)`;
    }
}
const embed = new Discord.MessageEmbed()
	.setDescription(usersOnArray)

message.channel.send(embed)
};



exports.config = {
  name: "hbr",
  guildOnly: true,
  aliases: ["house_bravery","bravery"],
};