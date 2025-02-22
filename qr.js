/* Copyright (C) 2021 KAVIYAAH - Alexa Team  ,  Lusifar whatsapp bot owner
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
kaviyaah - kavishka sandaruwan (v 8.0.0 avalable)
*/

const chalk = require('chalk');
const {WAConnection, MessageOptions, MessageType} = require('@adiwajshing/baileys');
const {StringSession} = require('./lusifar/');
const fs = require('fs');

async function LUSIFAR () {
    const conn = new WAConnection();
    const Session = new StringSession();  
    conn.version = [2, 2119, 6]
    conn.logger.level = 'warn';
    conn.regenerateQRIntervalMs = 50000;
    
    conn.on('connecting', async () => {
        console.log(`${chalk.green.bold('BOT')}${chalk.blue.bold('Lusifar')}
${chalk.white.italic('LusifarString Kodu Alıcı')}
${chalk.blue.italic('ℹ️  Connecting to Whatsapp kaveesha bot💛👀👇... Please Wait.')}`);
    });
    

    conn.on('open', async () => {
        var st = Session.createStringSession(conn.base64EncodedAuthInfo());
        console.log(
            chalk.green.bold('lusifar String Kodunuz: '), Session.createStringSession(conn.base64EncodedAuthInfo())
        );
        
        if (!fs.existsSync('config.env')) {
            fs.writeFileSync('config.env', `LUSIFAR_SESSION="${st}"`);
        }
        if (conn.user.jid.startsWith('90')) {
            await conn.sendMessage(conn.user.jid,st, MessageType.text)
            await conn.sendMessage(conn.user.jid,'*Bu Kodu Kimseyle Paylaşmayın!*', MessageType.text)
            console.log(
                chalk.blue.bold('Locale kuruyorsanız node bot.js ile botu başlatabilirsiniz.')
            );
        }
        else {
            await conn.sendMessage(conn.user.jid,st, MessageType.text)
            await conn.sendMessage(conn.user.jid,'* 👀Do Not Share This Code With Anyone👀👇 !*', MessageType.text)
            console.log(
                chalk.blue.bold('If you are installing locale, you can start the bot with node bot.js')
            );
        }
        
        process.exit(0);
    });

    await conn.connect();
}

LUSIFAR()
