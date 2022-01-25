module.exports = (channel) => {
    const imgUrl = 'https://media.discordapp.net/attachments/908626742552449036/935554811426930718/juifoupasjuif.png';
    
    channel.send({files: [imgUrl]}).then(message => {
        message.react('👍');
        message.react('👎');
    }).catch((error) => console.log(error));
};