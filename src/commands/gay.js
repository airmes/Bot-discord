const {oneOf} = require ('../utils');

module.exports = (channel, text) => {
    const imgUrls = [
        'https://i.ibb.co/W5dh5yB/dddddd.png',
    ];
    
    channel.send(text, {files: [oneOf(imgUrls)]}).then(message => {
        message.react('🏳️‍🌈');
        message.react('🧦');
    }).catch((error) => console.log(error));
};