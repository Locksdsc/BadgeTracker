const Discord = require("discord.js")
const client = new Discord.Client();
const config = require("./config.js")    
const fs = require("fs");   
require('./util/Loader.js')(client);

require('http').createServer((req, res) => res.end('Hosted By Kap!')).listen(3000)

//Marveryk.#1337 , ne pas leak le script bande de fdp

client.on("guildCreate", gui => {
    let embed = new Discord.MessageEmbed()
          .setTitle("A server Has Just Added Me !.")
          .addField('**__Server Name__**', `${gui.name}`,)
          .addField('**__Server Creator__**', `${gui.owner}`,)
          .addField('**__Server ID__**', `${gui.id}`,)
          .addField('**__Server Members__**', `${gui.memberCount}`,)
          .setThumbnail(gui.iconURL({ dynamic: true }))
          .setFooter(`BadgeDetector Add`, client.user.displayAvatarURL())
          client.guilds.cache.get("848966762514219039").channels.cache.get("849440850861883392").send(embed)
});

client.on("guildDelete", gui => {
    let embed = new Discord.MessageEmbed()
          .setTitle("A server removed me :(.")
          .addField('**__Server Name__**', `${gui.name}`,)
          .addField('**__Server Creator__**', `${gui.owner}`,)
          .addField('**__Server ID__**', `${gui.id}`,)
          .addField('**__Server Members__**', `${gui.memberCount}`,)
          .setThumbnail(gui.iconURL({ dynamic: true }))
          .setFooter(`BadgeDetector Remove`, client.user.displayAvatarURL())
          client.guilds.cache.get("848966762514219039").channels.cache.get("849440921548488744").send(embed)
});

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./commands/', (err, files) => {
  if (err) console.error(err);
  console.log(`${files.length} Chargement de la commande`);
  files.forEach(f => {
    let props = require(`./commands/${f}`);
    console.log(`${props.config.name} [commande chargée]`);
    console.log(`Le bot a été démarré avec succès [Locks.#1337 BadgeTracker]`)
    client.commands.set(props.config.name, props);
    props.config.aliases.forEach(alias => {
      client.aliases.set(alias, props.config.name);
    });
  });
})

client.login(config.token)