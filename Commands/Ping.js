module.exports = {
    name: 'Ping',
    description: 'Checks bot latency!',
    execute(message, args) {
        message.channel.send(`ping_pong: Latency is ${Date.now() - message.createdTimestamp} ms.API Latency is ${Math.round(client.ws.ping)} ms`);
    }
}