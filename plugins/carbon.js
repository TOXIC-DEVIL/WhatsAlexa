let WhatsAlexa = require('../events');
let {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
let axios = require('axios');
let Config = require('../config');
let Language = require('../language');
let Lang = Language.getString('carbon');

if (Config.WORKTYPE == 'private') {

    WhatsAlexa.addCommand({pattern: 'carbon ?(.*)', fromMe: true, desc: Lang.CARBON_DESC, warn: Lang.CARBON_WARN}, (async (message, match) => {

        if (message.jid === '905524317852-1612300121@g.us') {

            return;
        }


        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.CARBON_NEEDWORD, MessageType.text, {contextInfo: { forwardingScore: 1000, isForwarded: true }})

        var respoimage = await axios.get(`https://carbonnowsh.herokuapp.com/?code=${match[1].replace(/#/gi, "%250A").replace(/Ö/g, "%C3%96").replace(/ö/g, "%C3%B6").replace(/ü/g, "%C3%BC").replace(/Ü/g, "%C3%9C").replace(/Ğ/g, "%C4%9E").replace(/ğ/g, "%C4%9F").replace(/ş/g, "%C5%9F").replace(/Ş/g, "%C5%9E").replace(/ç/g, "%C3%A7").replace(/Ç/g, "%C3%87").replace(/ı/g, "%C4%B1").replace(/i/g, "%69").replace(/"/g, "%22").replace(/İ/g, "%C4%B0")}&theme=blackboard&exportSize=3x&paddingVertical=200px&paddingHorizontal=200px&language=JavaScript`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid,Buffer.from(respoimage.data), MessageType.image, {mimetype: Mimetype.png, quoted: message.data, contextInfo: { forwardingScore: 1000, isForwarded: true }, caption: '*Made by WhatsAlexa*'})

    }));
}
else if (Config.WORKTYPE == 'public') {

    WhatsAlexa.addCommand({pattern: 'carbon ?(.*)', fromMe: false, desc: Lang.CARBON_DESC, warn: Lang.CARBON_WARN}, (async (message, match) => {

        if (message.jid === '905524317852-1612300121@g.us') {

            return;
        }


        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.CARBON_NEEDWORD, MessageType.text, {contextInfo: { forwardingScore: 1000, isForwarded: true }})

        var respoimage = await axios.get(`https://carbonnowsh.herokuapp.com/?code=${match[1].replace(/#/gi, "%250A").replace(/Ö/g, "%C3%96").replace(/ö/g, "%C3%B6").replace(/ü/g, "%C3%BC").replace(/Ü/g, "%C3%9C").replace(/Ğ/g, "%C4%9E").replace(/ğ/g, "%C4%9F").replace(/ş/g, "%C5%9F").replace(/Ş/g, "%C5%9E").replace(/ç/g, "%C3%A7").replace(/Ç/g, "%C3%87").replace(/ı/g, "%C4%B1").replace(/i/g, "%69").replace(/"/g, "%22").replace(/İ/g, "%C4%B0")}&theme=blackboard&exportSize=3x&paddingVertical=200px&paddingHorizontal=200px&language=JavaScript`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid,Buffer.from(respoimage.data), MessageType.image, {mimetype: Mimetype.png, quoted: message.data, contextInfo: { forwardingScore: 1000, isForwarded: true }, caption: '*Made by WhatsAlexa*'})

    }));
}

