async function sendMessage({ number, message, client }) {
    await client.sendMessage(`${number}@c.us`, message); // Send the message
}

module.exports = sendMessage;
