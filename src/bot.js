console.clear();

const Discord = require('discord.js');
const config = require("./data/config.json");
const mysql = require('mysql');

const intents = new Discord.Intents(32767);
const client = new Discord.Client({ intents });

var conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "DiscordtheGame1",
    database: "discordbot"
})

function fish(){
    var randnum = Math.floor(Math.random() * (10000 - 1 + 1) ) + 1;
    let base_chance = 1100
    let rare_chance = 16
    let legendary_chance = 1

    if (randnum < (base_chance)){ // Alaskan cod
        return 'Alaskan Cod'
    }
    else if (randnum < (base_chance*2)){ // Bass
        return 'Bass'
    }
    else if (randnum < (base_chance*3)){ // Carp
        return 'Carp'
    }
    else if (randnum < (base_chance*4)){ // Catfish
        return 'Catfish'
    }
    else if (randnum < (base_chance*5)){ // Peruvian Anchoveta
        return 'Peruvian Anchoveta'
    }
    else if (randnum < (base_chance*6)){ // Tuna
        return 'Tuna'
    }
    else if (randnum < (base_chance*7)){ // Salmon
        return 'Salmon'
    }
    else if (randnum < (base_chance*8)){ // Tilapia
        return 'Tilapia'
    }
    else if (randnum < (base_chance*9)){ // Alaskan Pollock
        return 'Alaskan Pollock'
    }
    else if (randnum < (base_chance*9) + rare_chance){ // Coelacanth
        return 'Coelacanth'
    }
    else if (randnum < (base_chance*9) + rare_chance*2){ // Sturgeon
        return 'Sturgeon'
    }
    else if (randnum < (base_chance*9) + rare_chance*3){ // Eel
        return 'Eel'
    }
    else if (randnum < (base_chance*9) + rare_chance*4){ // Smalltooth Sawfish
        return 'Smalltooth Sawfish'
    }
    else if (randnum < (base_chance*9) + rare_chance*5){ // Big Catfish
        return 'Big Catfish'
    }
    else if (randnum < (base_chance*9) + rare_chance*6){ // Sunfish
        return 'Sunfish'
    }
    else if (randnum < (base_chance*9) + (rare_chance*6) + (legendary_chance +3)){ // Devils Hole Pupfish
        return 'Devils Hole Pupfish'
    }
}

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
        name: 'fish',
        description: "Fishes up a random fish."
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

        const userid = Interaction.user.id
        console.log(userid)
        conn.query(`SELECT * FROM player where id = '${userid}'`, (err, rows) =>{
            if(err) throw err;
            console.log(rows);
        })

        Interaction.reply({
            content: `The sum is ${num1 + num2}`, // Keep in mind that template literals uses "grave" instead of single quotes
            ephemeral: true
        })
    }
    else if (commandName === 'fish'){
        var fish_caught = fish()
        Interaction.reply({
            content: `Congrats you caught a(n) ${fish_caught}`,
            ephemeral: false
        })
    }
})

client.login(config.token)
