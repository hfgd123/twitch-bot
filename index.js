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
client.on('message', onMessageHandler);
client.on('connected', onConnectedHandler);
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
        client.say(target, "Ich bin ein Bot, der von @hfgd_gaming in Node.js gemacht wurde. Meinen Code findest du auf https://github.com/hfgd123/twitch-bot. Solltest du dich damit auskennen, klicke da aber bitte nicht drauf. Augenkrebsgefahr!");
    } else if(splitMessage[0] === "!ping"){
        client.say(target, "Pong! Ja, das geht. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et ju");
    }
}
function onConnectedHandler (addr, port) {
    console.log(`Successfully Connected to ${addr}:${port}`);
}