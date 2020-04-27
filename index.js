const Discord = require("discord.js"),
chalk = require("chalk"),
os = require("os"),
colors = require("colors"),
figlet = require("figlet"),
client = new Discord.Client({disableEveryone: true}),
conf = require('./config.json'),
prefix = conf.prefix,
owners = conf.Owners,
memoire = Math.ceil(process.memoryUsage().heapTotal / 1000000),
ram_1 = Math.ceil((os.totalmem() - os.freemem()) / 1000000),
ram_2 = Math.ceil(os.totalmem() / 1000000);
/////////////////////////////////////////////////
client.setMaxListeners(Number.POSITIVE_INFINITY);
/////////////////////////////////////////////////

client.on('ready', () => {
    
	client.user.setActivity("Playing with colors! :) (By Dany-LF#6669)");
    console.log(
        "----------------------------------------------------" + "\n" +
        colors.rainbow(figlet.textSync('Dany-LF')) + "\n" +
        "----------------------------------------------------" + "\n" +
        "--> " + (chalk.blue('Name Bot            : ')) + `[ ${client.user.username} ]` + "\n" +
        "--> " + (chalk.blue('Memory used         : ')) + `[ ${memoire} MB ]` + "\n" +
        "--> " + (chalk.blue('RAM used            : ')) + `[ ${ram_1} on ${ram_2} ]` + "\n" +
        "----------------------------------------------------" + "\n" +
        (chalk.green('                      Ready !')) + "\n" +
        "----------------------------------------------------"
    );

});

client.on("guildCreate", async (guild) => {
if(client.guilds.size >= 2){
	console.info("Don't use a rainbow role bot in multiples guilds he can be ban AND the owner of the bot also!!");
	return guild.leave();
};
})

client.on('message', async (message) => {
	
	let args = message.content.split(' ').slice(1);

  if (message.content.startsWith(`${prefix}rainbowrole`)) {//Start

    //Start Verifying users
    if(!owners.includes(message.author.id) || !message.member.hasPermission("MANAGE_ROLES")) return message.reply("You must be authorized to use the bot or you must have the MANAGE_ROLES permission.")
    //End Verifying users
  
  if(!args[0]) return message.reply("Please specify a role!");
  let rrole = message.mentions.roles.first() || message.guild.roles.find(r=> r.name === args[0]) || message.guild.roles.find(r=> r.id === args[0]),
  n = rrole.name;
	if (!message.guild.roles.find("name", n)) return message.reply('Please specify a __**VALID**__ role!')

  message.reply('Activated!').then((message) => {message.delete(3000);})
  //if(message.deletable) message.delete();
  var thebigmix = message.guild.roles.find("name", n)
  let interval = setInterval(function () {
  thebigmix.setColor("RANDOM").catch(console.error);
  }, conf.time*1000)//config.time in seconds

}//End

})


client.login(conf.token)
