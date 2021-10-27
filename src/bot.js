console.clear();

const Discord = require('discord.js');
const config = require("./config.json");

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

    commands?.create({
        name: 'add',
        description: 'Adds two numbers.',
        options: [
            {
                name: 'num1',
                description: 'The first number.',
                required: true,
                type: Discord.Constants.ApplicationCommandOptionTypes.NUMBER
            },
            {
                name: 'num2',
                description: 'The second number.',
                required: true,
                type: Discord.Constants.ApplicationCommandOptionTypes.NUMBER
            }
        ]
    })

    commands?.create({
        name: 'subtract',
        description: 'Subtracts two numbers.',
        options: [
            {
                name: 'num1',
                description: 'The first number.',
                required: true,
                type: Discord.Constants.ApplicationCommandOptionTypes.NUMBER
            },
            {
                name: 'num2',
                description: 'The second number.',
                required: true,
                type: Discord.Constants.ApplicationCommandOptionTypes.NUMBER
            }
            

        ]
    })

    commands?.create({
        name:'marco/polo',
        description: "The name says it all.",
        options:[
            {
                name:'marco',
                description:'marco.',
                required:true,
                type: Discord.Constants.ApplicationCommandOptionTypes.STRING
            }
        ]
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
    else if (commandName === 'add'){
        const num1 = options.getNumber('num1')
        const num2 = options.getNumber('num2')

        Interaction.reply({
            content: `The sum is ${num1 + num2}`, // Keep in mind that template literals uses "grave" instead of single quotes
            ephemeral: true
        })
    }
    if(commandName==='subtract'){
        const num1=options.getNumber('num1')
        const num2=options.getNumber('num2')

        Interaction.reply ({
            content: `The result is${num1-num2}`, // Keep in mind that template literals uses "grave" instead of single quotes
            ephemeral:true
        })
    }
    if(commandName==="marco"){
        const marco=options.getString('marco')

        Interaction.reply({
            content:`polo`,
            ephemeral:true
        })
    }
})
// coment
client.login(config.token)
