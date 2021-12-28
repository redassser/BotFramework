exports.run = (client,message,array) => {
    if(!message.member.permissions.has("MANAGE_MESSAGES")) {
        message.channel.send("Sorry! Mods only.")
        return;
    }
	if(!message.guild.me.permissions.has("MANAGE_CHANNELS")) {
        message.channel.send("Sorry! I don't have the *manage channels* permission.");
        return;
    }
    var numb = parseInt(array.shift());
    if (!Number.isInteger(numb) || numb>99 ||numb<1) {
		message.channel.send("Please use an integer between 1 and 99.");
		return;
	}
    message.channel.bulkDelete(numb+1)
    	.then(messages => message.channel.send(`${messages.size-1} messages be gone`))
    	.catch(console.error);
}
exports.desc="Delete this many messages."
exports.inp=["[number 1-99]"]