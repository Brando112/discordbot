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

function fish(userid, money){
    var randnum = Math.floor(Math.random() * (10000 - 1 + 1) ) + 1;
    let base_chance = 1100
    let rare_chance = 16
    let legendary_chance = 1


    if (randnum < (base_chance)){ // Alaskan cod
        let sql;
        sql = `UPDATE player SET money = (money + 10) where id = '${userid}'`;
        conn.query(sql, console.log);
        return 'Alaskan Cod'
    }
    else if (randnum < (base_chance*2)){ // Bass
        let sql;
        sql = `UPDATE player SET money = (money + 10) where id = '${userid}'`;
        conn.query(sql, console.log);
        return 'Bass'
    }
    else if (randnum < (base_chance*3)){ // Carp
        let sql;
        sql = `UPDATE player SET money = (money + 10) where id = '${userid}'`;
        conn.query(sql, console.log);
        return 'Carp'
    }
    else if (randnum < (base_chance*4)){ // Catfish
        let sql;
        sql = `UPDATE player SET money = (money + 10) where id = '${userid}'`;
        conn.query(sql, console.log);
        return 'Catfish'
    }
    else if (randnum < (base_chance*5)){ // Peruvian Anchoveta
        let sql;
        sql = `UPDATE player SET money = (money + 10) where id = '${userid}'`;
        conn.query(sql, console.log);
        return 'Peruvian Anchoveta'
    }
    else if (randnum < (base_chance*6)){ // Tuna
        let sql;
        sql = `UPDATE player SET money = (money + 10) where id = '${userid}'`;
        conn.query(sql, console.log);
        return 'Tuna'
    }
    else if (randnum < (base_chance*7)){ // Salmon
        let sql;
        sql = `UPDATE player SET money = (money + 10) where id = '${userid}'`;
        conn.query(sql, console.log);
        return 'Salmon'
    }
    else if (randnum < (base_chance*8)){ // Tilapia
        let sql;
        sql = `UPDATE player SET money = (money + 10) where id = '${userid}'`;
        conn.query(sql, console.log);
        return 'Tilapia'
    }
    else if (randnum < (base_chance*9)){ // Alaskan Pollock
        let sql;
        sql = `UPDATE player SET money = (money + 10) where id = '${userid}'`;
        conn.query(sql, console.log);
        return 'Alaskan Pollock'
    }
    else if (randnum < (base_chance*9) + rare_chance){ // Coelacanth
        let sql;
        sql = `UPDATE player SET money = (money + 100) where id = '${userid}'`;
        conn.query(sql, console.log);
        return 'Coelacanth'
    }
    else if (randnum < (base_chance*9) + rare_chance*2){ // Sturgeon
        let sql;
        sql = `UPDATE player SET money = (money + 100) where id = '${userid}'`;
        conn.query(sql, console.log);
        return 'Sturgeon'
    }
    else if (randnum < (base_chance*9) + rare_chance*3){ // Eel
        let sql;
        sql = `UPDATE player SET money = (money + 100) where id = '${userid}'`;
        conn.query(sql, console.log);
        return 'Eel'
    }
    else if (randnum < (base_chance*9) + rare_chance*4){ // Smalltooth Sawfish
        let sql;
        sql = `UPDATE player SET money = (money + 100) where id = '${userid}'`;
        conn.query(sql, console.log);
        return 'Smalltooth Sawfish'
    }
    else if (randnum < (base_chance*9) + rare_chance*5){ // Big Catfish
        let sql;
        sql = `UPDATE player SET money = (money + 100) where id = '${userid}'`;
        conn.query(sql, console.log);
        return 'Big Catfish'
    }
    else if (randnum < (base_chance*9) + rare_chance*6){ // Sunfish
        let sql;
        sql = `UPDATE player SET money = (money + 100) where id = '${userid}'`;
        conn.query(sql, console.log);
        return 'Sunfish'
    }
    else if (randnum < (base_chance*9) + (rare_chance*6) + (legendary_chance +3)){ // Devils Hole Pupfish
        let sql;
        sql = `UPDATE player SET money = (money + 5000) where id = '${userid}'`;
        conn.query(sql, console.log);
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
        Interaction.reply({
            content: `The sum is ${num1 + num2}`, // Keep in mind that template literals uses "grave" instead of single quotes
            ephemeral: true
        })
    }
    else if (commandName === 'fish'){
        const userid = Interaction.user.id
        const user_name = (Interaction.user.tag)

        conn.query(`SELECT * FROM player WHERE id = '${userid}'`, (err, rows) =>{
            if(err) throw err;
            console.log(rows);
            let sql;

            if (rows.length <1) {
                sql = `INSERT INTO player(id, username, hp, hunger, money, pole, location) VALUES ('${userid}','${user_name}',100,100,0,'Default','Default')`
            }
            conn.query(sql, console.log);

            var fish_caught = fish(userid);
            Interaction.reply({
                content: `You caught a(n) ${fish_caught}!`,
                ephemeral: false
            })
        })

        
    }
})

client.login(config.token)
