from tinydb import TinyDB, Query, where
from tinydb.operations import decrement, increment
from tinydb.utils import D

db = TinyDB('fishing_game.json')
Players = db.table('Players')
Fish = db.table('Fish')
Shop = db.table('Shop')

def eat_cmd(player_id):

    hunger = Players.search(where("ID") == player_id)
    hunger = str(hunger).split(":")[21].split("}]")[0]
    hunger = str(hunger).strip()
    hunger = int(hunger)
    new_hunger = hunger + 10

    inventory1 = Players.search(where('ID') == player_id)
    inventory1 = str(inventory1)
    inventory2 = inventory1[33:]
    Money = inventory2.split(':')
    currency = Money[2]
    currency = currency.split(",")[0].strip()
    new_currency = int(currency) - 2
    
    User = inventory1.split(':')
    user = User[2]
    User = user.split("'")
    user = User[1] # Final

    if int(hunger) >= 0 and int(hunger) < 100:
        if int(currency) > 0:
            Players.update({"Hunger": new_hunger}, where("ID") == player_id)
            Players.update({"Money": new_currency}, where("ID") == player_id)
            return(user + " ate!")
        else:
            return(user + " does not have enough money!")
    
    else:
        return(user + " is already full")