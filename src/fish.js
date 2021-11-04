module.exports = { 
    fish_cmd: function(userid, fish_chances, conn){
        const mysql = require('mysql');
        var conn = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "DiscordtheGame1",
            database: "discordbot"
        })
        
        base_chance = fish_chances[0]
        console.log(base_chance)
        rare_chance = fish_chances[1]
        legendary_chance = fish_chances[2]
        randnum = fish_chances[3];
        if (randnum < (base_chance)){ // Alaskan cod
            let sql;
            sql = `UPDATE player SET money = (money + 10) where id = '${userid}'`;
            conn.query(sql)
            return ['Alaskan Cod', 10, 'COMMON', true]
        }
        else if (randnum < (base_chance*2)){ // Bass
            let sql;
            sql = `UPDATE player SET money = (money + 10) where id = '${userid}'`;
            conn.query(sql);
            return ['Bass', 10, 'COMMON', true]
        }
        else if (randnum < (base_chance*3)){ // Carp
            let sql;
            sql = `UPDATE player SET money = (money + 10) where id = '${userid}'`;
            conn.query(sql);
            return ['Carp', 10, 'COMMON', true]
        }
        else if (randnum < (base_chance*4)){ // Catfish
            let sql;
            sql = `UPDATE player SET money = (money + 10) where id = '${userid}'`;
            conn.query(sql);
            return ['Catfish', 10, 'COMMON', true]
        }
        else if (randnum < (base_chance*5)){ // Peruvian Anchoveta
            let sql;
            sql = `UPDATE player SET money = (money + 10) where id = '${userid}'`;
            conn.query(sql);
            return ['Peruvian Anchoveta', 10, 'COMMON', true]
        }
        else if (randnum < (base_chance*6)){ // Tuna
            let sql;
            sql = `UPDATE player SET money = (money + 10) where id = '${userid}'`;
            conn.query(sql);
            return ['Tuna', 10, 'COMMON', true]
        }
        else if (randnum < (base_chance*7)){ // Salmon
            let sql;
            sql = `UPDATE player SET money = (money + 10) where id = '${userid}'`;
            conn.query(sql);
            return ['Salmon', 10, 'COMMON', true]
        }
        else if (randnum < (base_chance*8)){ // Tilapia
            let sql;
            sql = `UPDATE player SET money = (money + 10) where id = '${userid}'`;
            conn.query(sql);
            return ['Tilapia', 10, 'COMMON', true]
        }
        else if (randnum < (base_chance*9)){ // Alaskan Pollock
            let sql;
            sql = `UPDATE player SET money = (money + 10) where id = '${userid}'`;
            conn.query(sql);
            return ['Alaskan Pollock', 10, 'COMMON', true]
        }
        else if (randnum < (base_chance*9) + rare_chance){ // Coelacanth
            let sql;
            sql = `UPDATE player SET money = (money + 100) where id = '${userid}'`;
            conn.query(sql);
            return ['Coelacanth', 100, 'RARE', false]
        }
        else if (randnum < (base_chance*9) + rare_chance*2){ // Sturgeon
            let sql;
            sql = `UPDATE player SET money = (money + 100) where id = '${userid}'`;
            conn.query(sql);
            return ['Sturgeon', 100, 'RARE', false]
        }
        else if (randnum < (base_chance*9) + rare_chance*3){ // Eel
            let sql;
            sql = `UPDATE player SET money = (money + 100) where id = '${userid}'`;
            conn.query(sql);
            return ['Eel', 100, 'RARE', false]
        }
        else if (randnum < (base_chance*9) + rare_chance*4){ // Smalltooth Sawfish
            let sql;
            sql = `UPDATE player SET money = (money + 100) where id = '${userid}'`;
            conn.query(sql);
            return ['Smalltooth Sawfish', 100, 'RARE', false]
        }
        else if (randnum < (base_chance*9) + rare_chance*5){ // Big Catfish
            let sql;
            sql = `UPDATE player SET money = (money + 100) where id = '${userid}'`;
            conn.query(sql);
            return ['Big Catfish', 100, 'RARE', false]
        }
        else if (randnum < (base_chance*9) + rare_chance*6){ // Sunfish
            let sql;
            sql = `UPDATE player SET money = (money + 100) where id = '${userid}'`;
            conn.query(sql);
            return ['Sunfish', 100, 'RARE', false]
        }
        else if (randnum < (base_chance*9) + (rare_chance*6) + (legendary_chance +3)){ // Devils Hole Pupfish
            let sql;
            sql = `UPDATE player SET money = (money + 5000) where id = '${userid}'`;
            conn.query(sql);
            return ['Devils Hole Pupfish', 5000, '-----LEGENDARY-----', true]
        }
    },

    get_rand_fish_num: function(userid, pole){
        if (pole === 'Default'){
            base_chance = 1100
            rare_chance = 16
            legendary_chance = 1
            var randnum = Math.floor(Math.random() * (10000 - 1 + 1) ) + 1;
            return [1100, 16, 1, (Math.floor(Math.random() * (10000 - 1 + 1) ) + 1)]
        }
        else if (pole === 'Bamboo Rod'){
            base_chance = 1089 
            rare_chance = 32
            legendary_chance = 2
            var randnum = Math.floor(Math.random() * (9995 - 1 + 1) ) + 1;
            return [base_chance, rare_chance, legendary_chance, randnum]
        }
        else if (pole ==='Treated Wood Rod'){
            base_chance = 1079 
            rare_chance = 46
            legendary_chance = 3
            var randnum = Math.floor(Math.random() * (10002 - 1 + 1) ) + 1;
            return [1079, 46, 3, randnum]
        }
        else if (pole ==='Wyrdwood Rod'){
            base_chance = 1069 
            rare_chance = 64
            legendary_chance = 4
            var randnum = Math.floor(Math.random() * (10009 - 1 + 1) ) + 1;
            return [1069, 64, 4, randnum]
        }
        else if(pole ==='Ironwood Rod'){
            base_chance = 1058 
            rare_chance = 80
            legendary_chance = 5
            var randnum = Math.floor(Math.random() * (10007 - 1 + 1) ) + 1;
            return [1058, 80, 5, randnum]
        }
        else{
            return "I'm stupid"
        }
    }

}

