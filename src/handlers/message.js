const commands = require('../commands');
const {tryToSend} = require('../utils');
const {errorMessage} = require('../../data');

module.exports = (client, msg) => {
    const words = msg.content.split(' ');
    const command = words.shift().substr(1).toLowerCase();
    const message = words.join(' ');

    if (msg.author.bot) return;
    if (command.length === 0) return;
    if (/^!{2,}/.test(msg.content)) return;

    // ----------------------------------
    // MESSAGES IN DISCORD SERVER
    // ----------------------------------
    if (msg.channel.type === 'text' && msg.content[0] == '!') {
        // All commands here
        const mapping = {
            juif: () => commands.juif(msg.channel),
        };

        // Handle any bug in commands
        try {
            if (command in mapping) return mapping[command](message);
        } catch (error) {
            console.log(error);
            return tryToSend(msg.channel, errorMessage);
        }
    }
};
