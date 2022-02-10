const commands = require('../commands');
const {tryToSend} = require('../utils');
const {errorMessage} = require('../../data');

module.exports = (client, msg) => {
    const words = msg.content.split(' ');
    const command = words.shift().substr(1).toLowerCase();
    const text = words.join(' ');

    if (msg.author.bot) return;
    if (command.length === 0) return;
    if (/^!{2,}/.test(msg.content)) return;

    // ----------------------------------
    // MESSAGES IN DISCORD SERVER
    // ----------------------------------
    if (msg.channel.type === 'text' && msg.content[0] == '!') {
        // All commands here
        const mapping = {
            juif: (text) => commands.juif(msg.channel, text),
            drip: (text) => commands.drip(msg.channel, text),
            gay : (text) => commands.gay(msg.channel, text),
        };
        // Handle any bug in commands
        try {
            if (command in mapping) return mapping[command](text);
        } catch (error) {
            console.log(error);
            return tryToSend(msg.channel, errorMessage);
        }
    }
};
