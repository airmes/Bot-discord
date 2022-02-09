const {oneOf} = require ('../utils');

module.exports = (channel) => {
    const imgUrls = [
        'https://i.ibb.co/7R4WjQr/juifoupasjuif-copie-2.png',
    ];
    
    channel.send({files: [oneOf(imgUrls)]}).then(message => {
        message.react('✡');
        message.react('✝');
    }).catch((error) => console.log(error));
};