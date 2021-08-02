const Discord = require("discord.js")
const client = new Discord.Client();
const config = require("./config.js")    
const fs = require("fs");   
require('./util/Loader.js')(client);


//Kap.#1338 

//ici en bas c'est pour voir les serv ou vos bots on EtE add enlevez si vous voulez en faire un bot perso pour votre serveur
client.on("guildCreate", gui => {
    let embed = new Discord.MessageEmbed()
          .setTitle("A server Has Just Added Me !.")
          .addField('**__Server Name__**', `${gui.name}`,)
          .addField('**__Server Creator__**', `${gui.owner}`,)
          .addField('**__Server ID__**', `${gui.id}`,)
          .addField('**__Server Members__**', `${gui.memberCount}`,)
          .setThumbnail(gui.iconURL({ dynamic: true }))
          .setFooter(`BadgeDetector Add`, client.user.displayAvatarURL())
          client.guilds.cache.get("id de votre serveur(server)").channels.cache.get("id du salon(channel)").send(embed)
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
          client.guilds.cache.get("id de votre serveur(channel").channels.cache.get("id de votre salon(channel)").send(embed)
});

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./commands/', (err, files) => {
  if (err) console.error(err);
  console.log(`${files.length} Chargement de la commande`);
  files.forEach(f => {
    let props = require(`./commands/${f}`);
    console.log(`${props.config.name} [commande chargée]`);
    console.log(`Le bot a été démarré avec succès [Kap.#1338 BadgeTracker]`)
    client.commands.set(props.config.name, props);
    props.config.aliases.forEach(alias => {
      client.aliases.set(alias, props.config.name);
    });
  });
})

client.login(config.token)
