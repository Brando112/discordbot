module.exports = 
{
    playerAttack: function (userid, weapon)
    {
        const mysql = require('mysql');
        var conn = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "DiscordtheGame1",
            database: "discordbot"
        })

        switch(weapon)
        {
            case 'wooden':
                base_attack = 1
                attack_mod = 2
                return Math.floor(Math.random() * ((base_attack+attack_mod) - base_attack + 1) + 1);
                break;
            case 'Iron':
                base_attack = 2
                attack_mod = 4
                return Math.floor(Math.random() * ((base_attack+attack_mod) - base_attack + 1) + 1);
                break;
            default:
                break;
        }
    },

    spawnEnemy: function()
    {
        const enemies = ["Skeleton", "Zombie", "Goblin", "Mercenary"]
        enemy_chosen = Math.floor(Math.random() * ((enemies.length) - 0 + 1)+1);
        enemy_spawned = enemies[enemy_chosen]
        let base_hp = 50
        switch (enemy_spawned)
        {
            case "Skeleton":
                let hp_mod = 50
                let enemyHP =  Math.floor(Math.random() * ((base_hp+hp_mod) - base_hp + 1) + 1);
                return ["Skeleton", enemyHP]
            case "Zombie":
                let hp_mod = 75
                let enemyHP =  Math.floor(Math.random() * ((base_hp+hp_mod) - base_hp + 1) + 1);
                return ["Zombie", enemyHP]
            case "Goblin":
                let hp_mod = 100
                let enemyHP =  Math.floor(Math.random() * ((base_hp+hp_mod) - base_hp + 1) + 1);
                return ["Goblin", enemyHP]
            case "Mercenary":
                let hp_mod = 150
                let enemyHP =  Math.floor(Math.random() * ((base_hp+hp_mod) - base_hp + 1) + 1);
                return ["Mercenary", enemyHP]    
            default:
                break;
        }
    }
}