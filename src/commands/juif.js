module.exports = (channel) => {
    const imgUrl = 'https://i.ibb.co/C79WMKx/juifoupasjuif-copie.png';
    
    channel.send({files: [imgUrl]}).then(message => {
        message.react('👍');
        message.react('👎');
    }).catch((error) => console.log(error));
};