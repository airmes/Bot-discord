const commands = require('../commands');
const {tryToSend, firstSuccess} = require('../utils');
const {errorMessage} = require('../../data');

module.exports = (client, msg) => {
    const words = msg.content.split(' ');
    const command = words.shift().substr(1).toLowerCase();
    let text = words.join(' ');

    if (msg.author.bot) return;
    if (command.length === 0) return;
    if (/^!{2,}/.test(msg.content)) return;

    // ----------------------------------
    // MESSAGES IN DISCORD SERVER
    // ----------------------------------
    if (msg.channel.type === 'text' && msg.content[0] == '!') {
        // All commands here
        const mapping = {
            drip: (text) => commands.drip(msg.channel, text),
            gay : (text) => commands.gay(msg.channel, text),
            hot : (text) => commands.hot(msg.channel, text),
            juif: (text) => commands.juif(msg.channel, text),
        };
        // Handle any bug in commands
        try {
            if (command in mapping) {
                msg.delete();

                // If message ID is sent (18 digits)
                if (text.match(/\d{18}/)) {
                    getMessageContent(client, text).then(content => {
                        text = content;
                        return mapping[command](text);
                    });
                }
                else return mapping[command](text);
            }
        } catch (error) {
            console.log(error);
            return tryToSend(msg.channel, errorMessage);
        }
    }
};

const getMessageContent = async (client, messageId) => {
    const channels = client.guilds.cache.get(process.env.SERVER_ID).channels.cache;
    
    // FIND MESSAGE
    const promises = [];
    for (let channel of channels) {
        // channel[0] is just the ID
        // channel[1] is the actual channel object
        channel = channel[1];
    
        // Try to fetch in each text channel
        if (channel.type === 'text') promises.push(channel.messages.fetch(messageId));
    }
    
    const foundMessage = await firstSuccess(promises);
    return foundMessage.content;
};