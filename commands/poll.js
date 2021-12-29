exports.run = (client,message,array) => {
    const Discord = require("discord.js");
    const question = array.join(" ");
    const pollEmbed = new Discord.MessageEmbed()
        //.setFooter("Account created on ")
        .setColor(message.member.displayColor)
        .setDescription(question)
        .setTitle(message.member.nickname+"'s poll")
        //.setTimestamp(user.createdAt)
        //.setThumbnail(user.avatarURL({format:"png",size:512,dynamic:true}))
        //.setImage(user.bannerURL({format:"png",size:512,dynamic:true}))
}
exports.desc = "doesnt work yet"
exports.inp = ["[question]"]