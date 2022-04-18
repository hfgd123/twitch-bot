const TMI = require('tmi.js');

const { name, tmi_oauth, channel } = require('./config.json');

const TMI_OPTIONS = {
    identity: {
        username: name,
        password: tmi_oauth
    },
    channels: [
        channel
    ]
}
// Connect bot to channels and get client instance
const client = new TMI.client(TMI_OPTIONS);
client.on('connected', onConnectedHandler);
client.on('message', onMessageHandler);
client.connect();

function onMessageHandler(target, tags, message, self){
    if(self){ return;}

    let trimmedMessage = message.trim();
    let splitMessage = trimmedMessage.split(" ");
    let targetUser = "";
    if(splitMessage.length > 1){
        targetUser = splitMessage[1];
    }

    if(splitMessage[0] === "!merch"){
        client.say(target, "https://store.sc-network.net");
    } else if(splitMessage[0] === "!info"){
        client.say(target, "Ich bin ein Bot, der von @hfgd_gaming in Node.js gemacht wurde.");
    }
}