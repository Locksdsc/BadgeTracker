const Discord = require("discord.js"),
client = new Discord.Client();

module.exports.run = async (client, message, args) => {
const members = message.guild.members.cache.array();
const userFlag = [];
  let usersOnArray = "**Members with Balance**";
for (const member of members) {
    const flag = (member.user.flags || await member.user.fetchFlags()).toArray().includes("HOUSE_BALANCE");
    if (flag) {
      usersOnArray += `\n<:dbhbl:849069747680837643>** \`${member.user.tag}\`** ID: (\`${member.user.id}\`)`;
    }
}
const embed = new Discord.MessageEmbed()
    .setDescription(usersOnArray)

message.channel.send(embed)
};



exports.config = {
  name: "hbl",
  guildOnly: true,
  aliases: ["house_balance","balance"],
};