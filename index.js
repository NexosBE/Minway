const Discord = require('discord.js');
const bot = new Discord.Client();
bot.login(process.env.TOKEN)
var prefix = ("?")

bot.on('ready', function() {
    bot.user.setPresence({ game: { name: 'les clients..', type: 2} })
    console.log("Connected");
});

bot.on("guildMemberAdd", member => {
    const bvn = member.guild.channels.find(m => m.name === "🎭aéroport")
    if (!bvn) return;
    const embed = new Discord.RichEmbed()
    .setColor('#009114')
    .setAuthor(member.user.tag)
    .setThumbnail(member.user.avatarURL)
    .setDescription("J'éspère que tu te plairas a nos côté")
    .addField(`Nombre de membres après son arrivée`, member.guild.memberCount)
    .setTimestamp()
    bvn.send(embed)
})

bot.on('guildMemberAdd', member => {
    var role = member.guild.roles.find('name', 'Nouveau')
    member.addRole(role)
})
bot.on("message", async function(message) {
    if (message.author.equals(bot.user)) return;

    if (!message.content.startsWith(prefix)) return;

    var args = message.content.substring(prefix.length).split(" ");


    switch(args[0].toLowerCase()) {
        case "maintenance":
        message.channel.send("", {
            embed: {
                color: 0xFF0000,
                author: message.author.name,
                title: '',
                fields: [{
                    name: "**⚠️ Le serveur est en maintenance ! ⚠️**",
                    value: "[**Invite discord (partage quand même a tes potes !)**](https://discord.gg/RJcxGct)",
                    inline: false
                }],
                footer: {
                    footer: "Partager ce lien a tous vos amis !",
                },
            }
        });
        message.delete()
        break;
    }
});
