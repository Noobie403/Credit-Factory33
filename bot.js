const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("543752674055553029")
setInterval(function() {
channel.send(`ich will dein arsch ficken damit ich grosse penis habe und mehr ficken kann ابي انييييك زيادة عشان يصير زبي 10 متر واتيك من تعب واطلع من طيازكم الحجر واطفشكم من البقر`);
}, 30)
})

client.login(process.env.BOT_TOKEN);