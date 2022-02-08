module.exports = (channel) => {
    const imgUrl = 'https://i.ibb.co/W5dh5yB/dddddd.png';
    
    channel.send({files: [imgUrl]}).then(message => {
        message.react('🏳️‍🌈');
        message.react('🧦');
    }).catch((error) => console.log(error));
};