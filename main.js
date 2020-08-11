const Discord = require('discord.js');
const client = new Discord.Client();
const MyId = "606239365320147004"
const LeosId = '287794972479193098'
const prefix = '/';
const AlastairId = '405502769387274243'
 
const fs = require('fs');
 
client.commands = new Discord.Collection();
 
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    client.commands.set(command.name, command);
}
 
 
client.once('ready', () => {
    console.log('Bot is online!');
});

client.on('message', message =>{
    if(message.author.id === AlastairId){
        message.channel.send('*says in a deep voice*');
    }
    if(!message.content.startsWith(prefix) || message.author.bot) return; //if the message dosent start with the prefix it returns
 
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    let role = message.guild.roles.cache.find(r => r.name === "Special")//finds the admin role and assigns it
    let pugChannel = message.guild.channels.cache.get(c => c.name === 'onlypug')

    
 
    if(command === 'ping'){ //the command
        client.commands.get('ping').execute(message, args); //calls the other 

    } else if(command === 'twitch'){
        client.commands.get('twitch').execute(message,args);

    }else if(command === 'jahfrog'){
        client.commands.get('jahfrog').execute(message,args);

    }else if(command === 'LiveOnTwitch'){
        client.commands.get('LiveOnTwitch').execute(message,args);

    }else if(command === 'special'){
        if(message.author.id === MyId){
            
            message.member.roles.add(role);
            message.delete();
            message.channel.send('hello master u are special');
        }else{
            message.channel.send('you are not mickey you are not special');
        
        }

    }else if(command === 'dm'){ 
        mention = message.mentions.users.first();
        if(mention == null){return;}
        message.delete();
        Mentionmessage = message.content.slice(4);
        mention.send(Mentionmessage + ' from ' + message.author.mention);
        message.channel.send('the dm has been sent');

    }else if(command ==='pug'){
            //message.pugChannel.send('https://media.discordapp.net/attachments/723115969555333283/739625089087045682/734693256134131718.gif');
            message.channel.send('pug was posted in pug-only');
    }

    
    
    


});
 
client.login('NzM5OTA4MjczODU1MTM1NzU2.XyhTRw._dlBAg3X9jqvqu5bcWFXrAqVphk');
 
 
