const qrcode = require('qrcode-terminal');
const { Client, LocalAuth } = require('whatsapp-web.js');
const { ChatAIHandler } = require('./chatai');



const client = new Client({
    authStrategy: new LocalAuth()
});



client.on('qr', qr => {
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.on('message', async msg => {

    const text = msg.body.toLowerCase() || '';

    //check conn tol
    if (text === '!ping') {
        msg.reply('bacot asu......');
    }

    // tanya bot gagu
    if (text.includes("!tanya/")) {
        await ChatAIHandler(text, msg);
    }

});

client.initialize();



