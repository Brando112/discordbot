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
            case 'Iron':
                base_attack = 2
                attack_mod = 4
                return Math.floor(Math.random() * ((base_attack+attack_mod) - base_attack + 1) + 1);
            default:
                break;
        }
    },

    spawnEnemy: function()
    {
        const enemies = ["Skeleton", "Zombie", "Goblin", "Mercenary"]
        enemy_chosen = Math.floor(Math.random() * ((enemies.length) - 0 + 1));
        enemy_spawned = enemies[enemy_chosen]
        let base_hp = 50
        MAX_ATTACK = 10;
        switch (enemy_spawned)
        {
            
            case "Skeleton":
                hp_mod = 50
                BASE_ATTACK = 2;
                enemyHP =  Math.floor(Math.random() * ((base_hp+hp_mod) - base_hp + 1) + 1);
                enemyAttack = Math.floor(Math.random() * ((MAX_ATTACK - BASE_ATTACK)) + this.BASE_ATTACK);
                return ["Skeleton", enemyHP, enemyAttack]
            case "Zombie":
                hp_mod = 75
                BASE_ATTACK = 3;
                enemyHP =  Math.floor(Math.random() * ((base_hp+hp_mod) - base_hp + 1) + 1);
                enemyAttack = Math.floor(Math.random() * ((MAX_ATTACK - BASE_ATTACK)) + this.BASE_ATTACK);
                return ["Zombie", enemyHP, enemyAttack]
            case "Goblin":
                hp_mod = 100
                BASE_ATTACK = 1;
                enemyHP =  Math.floor(Math.random() * ((base_hp+hp_mod) - base_hp + 1) + 1);
                enemyAttack = Math.floor(Math.random() * ((MAX_ATTACK - BASE_ATTACK)) + this.BASE_ATTACK);
                return ["Goblin", enemyHP, enemyAttack]
            case "Mercenary":
                hp_mod = 150;
                BASE_ATTACK = 4;
                enemyHP =  Math.floor(Math.random() * ((base_hp+hp_mod) - base_hp + 1) + 1);
                enemyAttack = Math.floor(Math.random() * ((MAX_ATTACK - BASE_ATTACK)) + this.BASE_ATTACK);
                return ["Mercenary", enemyHP, enemyAttack]    
            default:
                break;
        }
    }
}