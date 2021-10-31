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
        conn.query(sql);

        

        return ['Alaskan Cod', 10, 'COMMON']
    }
    else if (randnum < (base_chance*2)){ // Bass
        let sql;
        sql = `UPDATE player SET money = (money + 10) where id = '${userid}'`;
        conn.query(sql);
        return ['Bass', 10, 'COMMON']
    }
    else if (randnum < (base_chance*3)){ // Carp
        let sql;
        sql = `UPDATE player SET money = (money + 10) where id = '${userid}'`;
        conn.query(sql);
        return ['Carp', 10, 'COMMON']
    }
    else if (randnum < (base_chance*4)){ // Catfish
        let sql;
        sql = `UPDATE player SET money = (money + 10) where id = '${userid}'`;
        conn.query(sql);
        return ['Catfish', 10, 'COMMON']
    }
    else if (randnum < (base_chance*5)){ // Peruvian Anchoveta
        let sql;
        sql = `UPDATE player SET money = (money + 10) where id = '${userid}'`;
        conn.query(sql);
        return ['Peruvian Anchoveta', 10, 'COMMON']
    }
    else if (randnum < (base_chance*6)){ // Tuna
        let sql;
        sql = `UPDATE player SET money = (money + 10) where id = '${userid}'`;
        conn.query(sql);
        return ['Tuna', 10, 'COMMON']
    }
    else if (randnum < (base_chance*7)){ // Salmon
        let sql;
        sql = `UPDATE player SET money = (money + 10) where id = '${userid}'`;
        conn.query(sql);
        return ['Salmon', 10, 'COMMON']
    }
    else if (randnum < (base_chance*8)){ // Tilapia
        let sql;
        sql = `UPDATE player SET money = (money + 10) where id = '${userid}'`;
        conn.query(sql);
        return ['Tilapia', 10, 'COMMON']
    }
    else if (randnum < (base_chance*9)){ // Alaskan Pollock
        let sql;
        sql = `UPDATE player SET money = (money + 10) where id = '${userid}'`;
        conn.query(sql);
        return ['Alaskan Pollock', 10, 'COMMON']
    }
    else if (randnum < (base_chance*9) + rare_chance){ // Coelacanth
        let sql;
        sql = `UPDATE player SET money = (money + 100) where id = '${userid}'`;
        conn.query(sql);
        return ['Coelacanth', 100, 'RARE']
    }
    else if (randnum < (base_chance*9) + rare_chance*2){ // Sturgeon
        let sql;
        sql = `UPDATE player SET money = (money + 100) where id = '${userid}'`;
        conn.query(sql);
        return ['Sturgeon', 100, 'RARE']
    }
    else if (randnum < (base_chance*9) + rare_chance*3){ // Eel
        let sql;
        sql = `UPDATE player SET money = (money + 100) where id = '${userid}'`;
        conn.query(sql);
        return ['Eel', 100, 'RARE']
    }
    else if (randnum < (base_chance*9) + rare_chance*4){ // Smalltooth Sawfish
        let sql;
        sql = `UPDATE player SET money = (money + 100) where id = '${userid}'`;
        conn.query(sql);
        return ['Smalltooth Sawfish', 100, 'RARE']
    }
    else if (randnum < (base_chance*9) + rare_chance*5){ // Big Catfish
        let sql;
        sql = `UPDATE player SET money = (money + 100) where id = '${userid}'`;
        conn.query(sql);
        return ['Big Catfish', 100, 'RARE']
    }
    else if (randnum < (base_chance*9) + rare_chance*6){ // Sunfish
        let sql;
        sql = `UPDATE player SET money = (money + 100) where id = '${userid}'`;
        conn.query(sql);
        return ['Sunfish', 100, 'RARE']
    }
    else if (randnum < (base_chance*9) + (rare_chance*6) + (legendary_chance +3)){ // Devils Hole Pupfish
        let sql;
        sql = `UPDATE player SET money = (money + 5000) where id = '${userid}'`;
        conn.query(sql);
        return ['Devils Hole Pupfish', 5000, 'LEGENDARY']
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

    commands?.create({
        name: 'stats',
        description: 'Shows player stats'
    })

    commands?.create({
        name: 'inventory',
        description: 'Displays player inventory.'
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

    else if (commandName ==='inventory'){
        let inventory = [];
        const userid = Interaction.user.id
        conn.query(`SELECT * FROM fish WHERE id = '${userid}' ORDER BY fish_rarity`, (err, rows) =>{
            // FISH INVENTORY
            for (var i =0; i < rows.length; i++) {
                fish_rarity = rows[i].fish_rarity
                fish_name = rows[i].fish_name;
                fish_count = rows[i].fish_count;
                inventory = `${inventory}` +  `${fish_name}: ${fish_count}\n    Rarity: ${fish_rarity}\n`
            }
            //PUT PVE ITEMS HERE


            Interaction.reply({
                content: `-----FISH CAUGHT-----\n${inventory}`,
                ephemeral: true
            })
        })
    }

    else if (commandName === 'stats'){
        const userid = Interaction.user.id
        
        conn.query(`SELECT * FROM player WHERE id = '${userid}'`, (err, rows) =>{
            if(err) throw err;
            //console.log(rows);
            let displayname = rows[0].username;
            let hp = rows[0].hp;
            let hunger = rows[0].hunger;
            let money = rows[0].money;
            let pole = rows[0].pole;
            let location = rows[0].location;
            Interaction.reply({
                content: `Name: ${displayname}\nHP: ${hp}\nHunger: ${hunger}\nMoney: ${money}\nPole: ${pole}\nLocation: ${location}`,
                ephemeral: true
            })
        })
    }
    else if (commandName === 'fish'){
        const userid = Interaction.user.id
        const user_name = (Interaction.user.tag)
        console.log(`${user_name} has fished. ${userid}`)

        conn.query(`SELECT * FROM player WHERE id = '${userid}';`, (err, rows) =>{
            if(err) throw err;
            console.log(rows);
            let sql;

            if (rows.length <1) {
                sql = `INSERT INTO player(id, username, hp, hunger, money, pole, location) VALUES ('${userid}','${user_name}',100,100,0,'Default','Default')`
                conn.query(sql);
            }
            

            var fish_caught = fish(userid);

            conn.query(`SELECT * FROM fish WHERE id = '${userid}' AND fish_name = '${fish_caught[0]}';`, (err, rows) =>{
                if(err) throw err;
                //console.log(rows);
                let sql;
    
                if (rows.length <1) {
                    sql = `INSERT INTO fish(fish_name, fish_value, fish_count, id, fish_rarity) VALUES ('${fish_caught[0]}', ${fish_caught[1]}, 1, '${userid}', '${fish_caught[2]}');`;
                    conn.query(sql);
                }
                
                if (rows.length >0){
                    sql = `UPDATE fish SET fish_count = (fish_count + 1) WHERE id = '${userid}' AND fish_name = '${fish_caught[0]}';`;
                    conn.query(sql);
                }
                
            })

            Interaction.reply({
                content: `${user_name} caught a(n) ${fish_caught[0]}!`,
                ephemeral: false
            })
        })
    }
})

client.login(config.token)
