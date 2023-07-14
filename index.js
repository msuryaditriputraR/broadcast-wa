const qrcode = require("qrcode-terminal");
const { Client, LocalAuth } = require("whatsapp-web.js");
const sendMessage = require("./utils/sendMessages");
const data = require("./stored/data");
const templateMessage = require("./utils/templateMessage");

const client = new Client({
    authStrategy: new LocalAuth(),
});

client.on("qr", (qr) => {
    qrcode.generate(qr, { small: true });
});

client.on("ready", () => {
    console.log("Client is ready!");

    data.forEach((d) => {
        const message = templateMessage({
            name: d.name,
            jalur: "Prestasi Akademik",
        });

        sendMessage({ number: d.number, message, client });
    });
});

client.initialize();
