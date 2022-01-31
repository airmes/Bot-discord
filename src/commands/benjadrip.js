module.exports = (channel) => {
    const imgUrl = 'https://i.ibb.co/R4hn4km/Dripoupasdrip.png';
    
    channel.send({files: [imgUrl]}).then(message => {
        message.react('👍');
        message.react('👎');
    }).catch((error) => console.log(error));
};