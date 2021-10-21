import discord
import fish, inventory, shoppy, eat
from discord import player
from tinydb import TinyDB, Query, where
from tinydb.operations import decrement, increment
from tinydb.utils import D


db = TinyDB('fishing_game.json')
Players = db.table('Players')
Fish = db.table('Fish')
Shop = db.table('Shop')
dhp_remain = 35
hunger = 1000

client = discord.Client()

@client.event
async def on_ready():
    print('We have logged in as {0.user}'.format(client))

@client.event
async def on_message(message):
    if message.author == client.user:
        return

    if message.content.startswith('$ping'):
        await message.channel.send('pong')

    elif message.content.startswith('$fish'):
        player_id = message.author.id

        hunger = Players.search(where("ID") == player_id)
        hunger = str(hunger).split(":")[21].split("}]")[0]
        hunger = str(hunger).strip()
        hunger = int(hunger)
        if hunger > 0:
            fish_caught = fish.fish_cmd(player_id)
            fish_caught = str(fish_caught)

            user_name = Players.search(where('ID') == player_id)
            user_name = str(user_name).split(":")[2].split("'")[1].strip()
            user_name = str(user_name)
            hunger = hunger - 10
            Players.update({'Hunger': hunger}, where('ID') == player_id)

            if fish_caught.startswith("RARE") or fish_caught.startswith("LEGENDARY"):
                await message.channel.send(user_name.title() + " caught a " + fish_caught)
            else:
                await message.channel.send(user_name.title() + " caught a(n) " + fish_caught)

            #print(user_name)
        else:
            await message.channel.send("You are too hungry to fish.")
        

    elif message.content.startswith('$inventory'):
        player_id = message.mentions
        player_id = str(player_id).split("=")[1].split(" ")[0].strip()
        player_id = int(player_id)
            
        inventory1 = Players.search(where("ID") == player_id)
        fish_inv = Players.search(where('ID') == player_id)

        inventory1 = str(inventory1)
        inventory3 = inventory1[33:]
        Name = inventory3[0:4]
        User = inventory3.split(':')
        user = User[1]
        User = user.split("'")
        user = User[1] # Final
        Money = inventory3.split(':')
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
        print(hunger)
        
        await message.channel.send(str(Name) + ": " + str(user) + '\n' + str(pole) + ": " + str(Pole) + "\n" + "Money: " + "$" +  str(currency).strip() + "\n" + "Hunger: " + str(hunger) + "\n----------COMMON-----\n" +
         Bass.strip() +" | " + perch.strip() +" | "+  Catfish.strip() + " | " + Peruvian_Anchoveta.strip() + "\n" + 
        Tuna.strip() + " | " + Salmon.strip() + " | " + Tilapia.strip() + " | " + Alaskan_Pollock.strip() + " | " + "\n" + Carp.strip() + "\n" + 
        "-----------RARE-----------\n" + 
        Coelacanth.strip() + " | " + Sturgeon.strip() + " | " + Eel.strip() + " | " + Smalltooh_Sawfish.strip() + "\n" +
        Big_Catfish.strip() + " | " + Sunfish.strip() + "\n"
        "-----------LEGENDARY------\n" +
        dhp.strip() + ": " + devil_count.strip())


    elif message.content.startswith('$shop'):
        player_id = message.author.id
        game_shop = shoppy.shop_cmd(player_id)

        await message.channel.send(game_shop)

    elif message.content.startswith('$buy bamboo pole'):
        player_id = message.author.id
        pInv = Players.search(where('ID') == player_id)
        pInvPole = str(pInv).split(':')[4]
        pInvPole = str(pInvPole).split("'")[1]
        pInvMon = str(pInv).split(":")[3]
        pInvMon = str(pInvMon).split(",")[0]
        pInvMon = pInvMon.strip()
        pInvMon = int(pInvMon)

        if pInvPole != 'Bamboo Pole':
            if pInvMon >= 5000:
                Players.update({'Pole': 'Bamboo Pole'}, where('ID') == player_id)
                inventory1 = Players.search(where('ID') == player_id)
                inventory1 = str(inventory1)
                inventory2 = inventory1[33:]
                Money = inventory2.split(':')
                money = Money[1]
                currency = Money[2]
                currency = currency.split(",")[0].strip()
                new_currency = int(currency) - 5000
                print(currency)
                Players.update({'Money': new_currency}, where("ID") == player_id)
                await message.channel.send("You have bought a Bamboo Pole!")
            else:
                await message.channel.send("You don't have enough money.")
        else:
            await message.channel.send("You already own a Bamboo Pole")
        
    elif message.content.startswith('$eat'):
        player_id = message.author.id

        eats = eat.eat_cmd(player_id)

        await message.channel.send(eats)


client.run('ODg2MDgxODkyODcxNDU0Nzkw.YTwaEQ.dGLg2ZjCz6DxEf_Jra1GSBIUAlU')