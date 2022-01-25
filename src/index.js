const path = require('path'); 
require('dotenv').config({path: path.join(__dirname, '../.env')});
const handlers = require('./handlers');

const Discord = require('discord.js');
const client = new Discord.Client();

client.inProcessAdvert = {};

// All DiscordJs events here: https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-channelCreate
client.on('ready', () => handlers.ready(client));
client.on('message', msg => handlers.message(client, msg));

client.login(process.env.TOKEN);
