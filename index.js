const Discord = require('discord.js');
const bot = new Discord.Client();
bot.login(process.env.TOKEN)
var prefix = ("?")

bot.on('ready', function() {
    bot.user.setPresence({ game: { name: 'la Minway', type: 2} })
    console.log("Connected");
});

bot.on("guildMemberAdd", member => {
    const bvn = member.guild.channels.find(m => m.name === "nouvelles-arrivées👥")
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
