console.clear();

const fish = require('./fish');
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

// Turns the bot online... is the bot
//Also where the commands are stored
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

    // Command generation
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
        name: 'shop',
        description: 'The place where you buy things.'
    })

    commands?.create({
        name: 'buy',
        description: 'The place where you buy things part 2.',
        options: [
            {
                name: 'item',
                description: 'The item you wish to buy.',
                required: false,
                type: Discord.Constants.ApplicationCommandOptionTypes.STRING
            }
        ]
    })

    commands?.create({
        name: 'inventory',
        description: 'Displays player inventory.',
        options: [
            {
                name: 'username',
                description: 'The player you wish to view. CASE SENSITIVE',
                required: false,
                type: Discord.Constants.ApplicationCommandOptionTypes.STRING
            }
        ]
    })
});

// Is fired when an interaction is done (/fish)
client.on('interactionCreate', async (Interaction) => {
    if (!Interaction.isCommand()) { // Checks to see if the interaction is a command and if it isn't ignores the following checks
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

    else if (commandName ==='shop'){
        let item_list = '';
        conn.query(`SELECT * FROM shop`, (err, rows) =>{
            for (var i =0; i < rows.length; i++) {
                item_name = rows[i].item_name;
                item_cost = rows[i].item_cost;
                item_list = `${item_list}` + `${item_name}: $${item_cost}\n`
            }
            Interaction.reply({
                content: `${item_list}`,
                ephemeral: true
            })
        })
    }

    else if (commandName ==='buy'){
        const userid = Interaction.user.id
        const bought = options.getString('item')
        let item_dlist;
        conn.query(`SELECT * FROM shop`, (err, rows) =>{
            try{ 
                conn.query(`SELECT * from shop where item_name = '${bought}'`, (err, rows) =>{
                    if (rows.length >0){
                        for (var i =0; i < rows.length; i++) {
                            itemname = rows[i].item_name;
                            item_dlist = `${item_dlist} ` + `${itemname}`
                        }
                        if ((item_dlist != null) || (item_dlist != '')){
                            item_cost = rows[0].item_cost
                            item_id = rows[0].item_id
                            conn.query(`SELECT * FROM player where id = '${userid}'`, (err, rows) =>{
                                user_money = rows[0].money
                                new_user_money = user_money-item_cost;
                                if (user_money >= item_cost){
                                    sql = `UPDATE player SET money = ${new_user_money} WHERE id = '${userid}'`
                                    conn.query(sql)
                                    sql = `UPDATE player SET pole = '${bought}' WHERE id = '${userid}'`
                                    console.log(bought)
                                    conn.query(sql)
                                    conn.query(`SELECT * FROM bought_items where id = '${userid}' AND item_name = '${bought}'`, (err, rows) =>{ 
                                        if (rows.length <1){
                                            sql = `INSERT INTO bought_items(item_id, item_name, item_cost, id) VALUES(${item_id}, '${bought}',${item_cost}, '${userid})`
                                            Interaction.reply({
                                                content: `You bought a(n) ${bought}`,
                                                ephemeral: true
                                            })
                                        }
                                        else{
                                            Interaction.reply({
                                                content: 'You already own this item.',
                                                ephemeral: true
                                            })
                                        }
                                    })
                                }
                                else{
                                    Interaction.reply({
                                        content: "You don't have enough money.",
                                        ephemeral:true
                                    })
                                }
                            })
                        }
                    }
                    else{
                        Interaction.reply({
                            content: 'That item is not in the shop.',
                            ephemeral: true
                        })
                    }
                })
            }
            catch(error) {
                console.log(error);
            }
        })
    }    

    else if (commandName ==='inventory'){
        const dusername = options.getString('username')

        let common_inventory = '';
        let rare_inventory = '';
        let legendary_inventory = '';
        const userid = Interaction.user.id
        if (dusername != null){
            conn.query(`SELECT * FROM fish join player on player.id=fish.id WHERE player.username LIKE '${dusername}%'`, (err, rows) =>{
                // FISH INVENTORY
                for (var i =0; i < rows.length; i++) {
                    fish_rarity = rows[i].fish_rarity
                    fish_name = rows[i].fish_name;
                    fish_count = rows[i].fish_count;
                    if (fish_rarity === 'COMMON'){
                        common_inventory = `${common_inventory}` +  `${fish_name}: ${fish_count}\n`;
                    }
                    else if (fish_rarity === 'RARE'){
                        rare_inventory = `${rare_inventory}` +  `${fish_name}: ${fish_count}\n`;
                    }
                    else if (fish_rarity === 'LEGENDARY'){
                        legendary_inventory = `${LEGENDARY_inventory}` +  `${fish_name}: ${fish_count}\n`;
                    }
                }
                if (rare_inventory == null){
                    rare_inventory = '';
                }
                if (legendary_inventory == null){
                    legendary_inventory = '';
                }
                Interaction.reply({
                    content: `-----${dusername}-----\n-----COMMON-----\n${common_inventory}\n-----RARE------\n${rare_inventory}\n-----LEGENDARY-----\n${legendary_inventory}`,
                    ephemeral: false
                })
            })
        }
        else {
            conn.query(`SELECT * FROM fish WHERE id = '${userid}'`, (err, rows) =>{
                // FISH INVENTORY
                for (var i =0; i < rows.length; i++) {
                    fish_rarity = rows[i].fish_rarity
                    fish_name = rows[i].fish_name;
                    fish_count = rows[i].fish_count;
                    if (fish_rarity === 'COMMON'){
                        common_inventory = `${common_inventory}` +  `${fish_name}: ${fish_count}\n`;
                    }
                    else if (fish_rarity === 'RARE'){
                        rare_inventory = `${rare_inventory}` +  `${fish_name}: ${fish_count}\n`;
                    }
                    else if (fish_rarity === 'LEGENDARY'){
                        legendary_inventory = `${LEGENDARY_inventory}` +  `${fish_name}: ${fish_count}\n`;
                    }
                }
                if (rare_inventory == null){
                    rare_inventory = '';
                }
                if (legendary_inventory == null){
                    legendary_inventory = '';
                }
                Interaction.reply({
                    content: `-----FISH CAUGHT-----\n-----COMMON-----\n${common_inventory}\n-----RARE------\n${rare_inventory}\n-----LEGENDARY-----\n${legendary_inventory}`,
                    ephemeral: false
                })
            })
        }
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
                ephemeral: false
            })
        })
    }
    
    else if (commandName === 'fish'){
        const userid = Interaction.user.id
        //const userid = '616788057584304199';
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

            pole = rows[0].pole
            console.log(pole)
            
            let fish_chances = fish.get_rand_fish_num(userid, pole);
            let fish_caught = fish.fish_cmd(userid, fish_chances);

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
