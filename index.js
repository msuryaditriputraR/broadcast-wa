const qrcode = require("qrcode-terminal");
const { Client, LocalAuth } = require("whatsapp-web.js");
const sendMessage = require("./utils/sendMessages");
const data = require("./stored/data");
const templateMessage = require("./utils/templateMessage");

const client = new Client({
    webVersionCache: {
        type: "remote",
        remotePath:
            "https://raw.githubusercontent.com/wppconnect-team/wa-version/main/html/2.3000.1014840070-alpha.html",
    },
});

client.on("qr", (qr) => {
    qrcode.generate(qr, { small: true });
});

client.on("ready", () => {
    console.log("Client is ready!");

    data.forEach((d) => {
        const message = templateMessage({
            name: d.name,
        });

        sendMessage({ number: d.number, message, client });
    });
});

client.initialize();
