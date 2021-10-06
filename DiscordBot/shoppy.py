import discord
import random
from discord import player
from tinydb import TinyDB, Query, where
from tinydb.operations import decrement, increment
from tinydb.utils import D

db = TinyDB('fishing_game.json')
Players = db.table('Players')
Fish = db.table('Fish')
Shop = db.table('Shop')
dhp_remain = 35

def shop_cmd(player_id):
    shop_inventory = Shop.all()
    shop_inventory = str(shop_inventory)

    Item = shop_inventory.split(':')[2]
    Item = str(Item)
    item_bamboo = Item.split("'")[1]
    item_cost = Item.split("'")[3]
    item_cost_value_bamboo = shop_inventory.split(":")[3]
    item_cost_value_bamboo = item_cost_value_bamboo.split("'")[1]

    fiberglass_Name = Shop.search(where('Name') == 'Fiberglass_Rod')
    fiberglass_name = str(fiberglass_Name).split("'")[7]
    fiberglass_cost = str(fiberglass_Name).split("'")[9]
    fiberglass_cost_value = str(fiberglass_Name).split("'")[11]

    Iridium_Rod_Name = Shop.search(where('Name') == 'Iridium_Rod')
    Iridium_Rod_name = str(Iridium_Rod_Name).split("'")[7]
    Iridium_Rod_cost = str(Iridium_Rod_Name).split("'")[9]
    Iridium_Rod_cost_value = str(Iridium_Rod_Name).split("'")[11]

    return ('-----------FISHING RODS-------\n' + 
        item_bamboo.strip() + ' | ' + 
        item_cost.strip() + ": $" + item_cost_value_bamboo.strip() + "\n" + 
        fiberglass_name.strip() + " | " + fiberglass_cost.strip() + ": $" + fiberglass_cost_value.strip() + '\n' +
        Iridium_Rod_name.strip() + " | " + Iridium_Rod_cost.strip() + ": $" + Iridium_Rod_cost_value.strip())
