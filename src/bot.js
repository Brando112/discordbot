console.clear();

const Discord = require('discord.js');
const config = require("./data/config.json");

const intents = new Discord.Intents(32767);
const client = new Discord.Client({ intents });

client.on('ready', () => {
    console.log("Bot is online")

    const guildId = '900543981132337193'
    const guild = client.guilds.cache.get(guildId)
    let commands

    if (guild) {
        commands = guild.commands
    }
    else {
        commands = client.application?.commands
    }

    commands?.create({
        name: 'ping',
        description: 'Replies with pong.'
    })
});

client.on('interactionCreate', async (Interaction) => {
    if (!Interaction.isCommand()) {
        return
    }

    const { commandName, options } = Interaction

    if (commandName === 'ping') {
        Interaction.reply({
            content: 'pong',
            ephemeral: true
        })
    }
})

client.login(config.token)
