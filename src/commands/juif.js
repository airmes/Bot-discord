module.exports = (channel) => {
    const imgUrl = 'https://i.ibb.co/7R4WjQr/juifoupasjuif-copie-2.png';
    
    channel.send({files: [imgUrl]}).then(message => {
        message.react('✡');
        message.react('✝');
    }).catch((error) => console.log(error));
};