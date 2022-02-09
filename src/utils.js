/* eslint-disable max-len */

module.exports = {
    tryToSend: (channel, text) => channel.send(text || 'Message vide'),
    oneOf    : (arr) => arr[Math.floor(Math.random() * arr.length)]
};