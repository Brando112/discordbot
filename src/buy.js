module.exports = {
    buy_cmd: function(userid, bought, item_dlist){
        const mysql = require('mysql');
        var conn = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "DiscordtheGame1",
            database: "discordbot"
        })
        
        conn.query(`SELECT * FROM shop`, (err, rows) =>{
            try{ 
                conn.query(`SELECT * from shop where item_name = '${bought}'`, (err, rows) =>{
                    if (rows.length >0){
                        let item_dlist;
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
                                            return `You bought a(n) ${bought}`
                                        }
                                        else{
                                            
                                            return 'You already own this item.'
                                        }
                                    })
                                }
                                else{
                                    
                                    return "You don't have enough money."
                                }
                            })
                        }
                    }
                    else{
                        return 'That item is not in the shop.'
                    }
                })
            }
            catch(error) {
                console.log(error);
            }
        })

    }
    
}