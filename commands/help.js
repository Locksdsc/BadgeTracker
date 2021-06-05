const Discord = require("discord.js"),
client = new Discord.Client();

module.exports.run = async (client, message, args) => {
message.channel.send({embed: {
    color: '#RRGGBB',
  description:
`<:dbimportant:849073337959579658> **Thanks for using BadgeTracker**

<a:dbspecial2:849072663560454194> Here are the commands:
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬  
**bb.Help** Shows the commands

**bb.(badge name)** Searches People with discord badges

<a:dbspecial2:849072663560454194> How to use
▬▬▬▬▬▬▬▬▬▬▬ 
Example : **bb.hbr** **\`hbr = house of bravery\`**

Type **bb.bl** for the badgelist / names

Type **bb.imghelp** to get help in images

\`🥇\` **Other Commands :**

**\`invite\`** , **\`support\`** , **\`vote\`**`
}});
};

exports.config = {
  name: "help",
  guildOnly: true,
  aliases: ["commands"],
};