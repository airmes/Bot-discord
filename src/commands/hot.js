const {oneOf} = require ('../utils');

module.exports = (channel, text) => {
    const imgUrls = [
        'https://media.discordapp.net/attachments/941327509356695552/941337048042831882/iStock-1011128754.png?width=870&height=580',
    ];
    
    channel.send(text, {files: [oneOf(imgUrls)]}).then(message => {
        message.react('🥵');
        message.react('🥶');
    }).catch((error) => console.log(error));
};