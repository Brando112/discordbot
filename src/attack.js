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
    }
}