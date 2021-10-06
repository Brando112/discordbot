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

def inventory_cmd(player_id):
        print(player_id)
        inventory1 = Players.search(where('ID') == player_id)
        inventory1 = str(inventory1)
        inventory = inventory1[33:]
        Name = inventory[0:4]
        User = inventory.split(':')
        user = User[1]
        User = user.split("'")
        user = User[1] # Final
        Money = inventory.split(':')
        money = Money[1]
        currency = Money[2]
        Money = money.split(',')
        money = Money[1]
        money = money.split("'")
        money = money[1]
        currency = currency.split('}]')[0]
        currency = currency.split(',')[0]
        Pole = inventory1.split(',')[3]
        Pole = Pole.split("'")
        pole = Pole[1]
        Pole = Pole[3]

        fish_inv = Players.search(where('ID') == player_id)
        Fish_inv = str(fish_inv).split(',')
        Bass = Fish_inv[4].strip("'")
        perch = Fish_inv[5]
        Carp = Fish_inv[6]
        Catfish = Fish_inv[7]
        Peruvian_Anchoveta = Fish_inv[8]
        Tuna = Fish_inv[9]
        Salmon = Fish_inv[10]
        Tilapia = Fish_inv[11]
        Alaskan_Pollock = Fish_inv[12]
        Coelacanth = Fish_inv[13]
        Sturgeon = Fish_inv[14]
        Eel = Fish_inv[15]
        Smalltooh_Sawfish = Fish_inv[16]
        Big_Catfish = Fish_inv[17]
        Sunfish = Fish_inv[18]
        devils_Hole_Pupfish = Fish_inv[19]
        Devils_Hole_Pupfish = devils_Hole_Pupfish.split(":")[0]
        dhp = Devils_Hole_Pupfish
        devil_count = devils_Hole_Pupfish.split(":")[1]
        devil_count = devil_count.split("}]")[0]

        hunger = Players.search(where("ID") == player_id)
        hunger = str(hunger).split(":")[21].split("}]")[0]
        hunger = str(hunger).strip()

        return (Name + ": " + user + '\n' + pole + ": " + Pole + "\n" + "Money: " + "$" +  currency.strip() + "\n" + "Hunger: " + hunger + "\n----------COMMON-----\n" +
         Bass.strip() +" | " + perch.strip() +" | "+  Catfish.strip() + " | " + Peruvian_Anchoveta.strip() + "\n" + 
        Tuna.strip() + " | " + Salmon.strip() + " | " + Tilapia.strip() + " | " + Alaskan_Pollock.strip() + " | " + "\n" + Carp.strip() + "\n" + 
        "-----------RARE-----------\n" + 
        Coelacanth.strip() + " | " + Sturgeon.strip() + " | " + Eel.strip() + " | " + Smalltooh_Sawfish.strip() + "\n" +
        Big_Catfish.strip() + " | " + Sunfish.strip() + "\n"
        "-----------LEGENDARY------\n" +
        dhp.strip() + ": " + devil_count.strip())