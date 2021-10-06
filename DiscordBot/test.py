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

inventory1 = Players.search(where('ID') == player_id)
inventory1 = str(inventory1)
inventory = inventory1[33:]
Money = inventory.split(':')
money = Money[1]
currency = Money[2]
Money = money.split(',')
money = Money[1]
money = money.split("'")
money = money[1]
currency = currency.split('}]')[0]
currency = currency.split(',')[0]
currency = currency.strip()
currency = int(currency)

def fish_cmd(msg_author, player_id):
    while True:
                fish_num = random.randint(1, 10000)
                # fish_num = 10

                if fish_num < 1100:
                    Players.update(increment('Bass'), where('ID') == player_id)
                    # await message.channel.send('You caught a(n) Bass!')

                    fish_inv = Players.search(where('ID') == player_id)
                    Fish_inv = str(fish_inv).split(',')
                    Bass = Fish_inv[4].strip("'").split(":")[1]
                    Bass = Bass.strip()
                    Bass = int(Bass)

                    # print(currency)
                    # print(Bass)

                    new_currency = currency + 10

                    Players.update({'Money': new_currency}, where('ID') == player_id)

                    fished = 'bass'

                    return fished
                elif fish_num < 2200:
                    Players.update(increment('Perch'), where('ID') == player_id)
                    # await message.channel.send('You caught a(n) Perch!')
                    fish_inv = Players.search(where('ID') == player_id)
                    Fish_inv = str(fish_inv).split(',')
                    perch = Fish_inv[5].strip("'").split(":")[1]
                    perch = perch.strip()
                    perch = int(perch)

                    # print(currency)
                    # print(perch)

                    new_currency = currency + 10

                    Players.update({'Money': new_currency}, where('ID') == player_id)
                    fished = 'perch'

                    return fished
                elif fish_num < 3300:
                    Players.update(increment('Carp'), where('ID') == player_id)
                    # await message.channel.send('You caught a(n) Carp!')

                    fish_inv = Players.search(where('ID') == player_id)
                    Fish_inv = str(fish_inv).split(',')
                    Carp = Fish_inv[6].strip("'").split(":")[1]
                    Carp = Carp.strip()
                    Carp = int(Carp)

                    # print(currency)
                    # print(Carp)

                    new_currency = currency + 10

                    Players.update({'Money': new_currency}, where('ID') == player_id)

                    fished = 'carp'

                    return fished
                elif fish_num < 4400:
                    Players.update(increment('Catfish'), where('ID') == player_id)
                    # await message.channel.send('You caught a(n) Catfish!')

                    fish_inv = Players.search(where('ID') == player_id)
                    Fish_inv = str(fish_inv).split(',')
                    Catfish = Fish_inv[7].strip("'").split(":")[1]
                    Catfish = Catfish.strip()
                    Catfish = int(Catfish)

                    # print(currency)
                    # print(Catfish)

                    new_currency = currency + 10

                    Players.update({'Money': new_currency}, where('ID') == player_id)
                    fished = 'catfish'

                    return fished
                elif fish_num < 5500:
                    Players.update(increment('Peruvian Anchoveta'), where('ID') == player_id)
                    # await message.channel.send('You caught a(n) Peruvian Anchoveta!')

                    fish_inv = Players.search(where('ID') == player_id)
                    Fish_inv = str(fish_inv).split(',')
                    Peruvian_Anchoveta = Fish_inv[8].strip("'").split(":")[1]
                    Peruvian_Anchoveta = Peruvian_Anchoveta.strip()
                    Peruvian_Anchoveta = int(Peruvian_Anchoveta)

                    # print(currency)
                    # print(Peruvian_Anchoveta)

                    new_currency = currency + 10

                    Players.update({'Money': new_currency}, where('ID') == player_id)
                    fished = 'perivoan anchoveta'

                    return fished
                elif fish_num < 6600:
                    Players.update(increment('Tuna'), where('ID') == player_id)
                    # await message.channel.send('You caught a(n) Tuna!')


                    fish_inv = Players.search(where('ID') == player_id)
                    Fish_inv = str(fish_inv).split(',')
                    Tuna = Fish_inv[9].strip("'").split(":")[1]
                    Tuna = Tuna.strip()
                    Tuna = int(Tuna)

                    # print(currency)
                    # print(Tuna)

                    new_currency = currency + 10

                    Players.update({'Money': new_currency}, where('ID') == player_id)

                    fished = 'tuna'

                    return fished
                elif fish_num < 7700:
                    Players.update(increment('Salmon'), where('ID') == player_id)
                    # await message.channel.send('You caught a(n) Salmon!') 

                    fish_inv = Players.search(where('ID') == player_id)
                    Fish_inv = str(fish_inv).split(',')
                    Salmon = Fish_inv[10].strip("'").split(":")[1]
                    Salmon = Salmon.strip()
                    Salmon = int(Salmon)

                    # print(currency)
                    # print(Salmon)

                    new_currency = currency + 10

                    Players.update({'Money': new_currency}, where('ID') == player_id) 
                    fished = 'salmon'

                    return fished          
                elif fish_num < 8800:
                    Players.update(increment('Tilapia'), where('ID') == player_id)
                    # await message.channel.send('You caught a(n) Tilapia!')

                    fish_inv = Players.search(where('ID') == player_id)
                    Fish_inv = str(fish_inv).split(',')
                    Tilapia = Fish_inv[11].strip("'").split(":")[1]
                    Tilapia = Tilapia.strip()
                    Tilapia = int(Tilapia)

                    # print(currency)
                    # print(Tilapia)

                    new_currency = currency + 10

                    Players.update({'Money': new_currency}, where('ID') == player_id)
                    fished = 'tilapia'

                    return fished
                elif fish_num < 9900:
                    Players.update(increment('Alaskan Pollock'), where('ID') == player_id)
                    # await message.channel.send('You caught a(n) Alaskan Pollock!')


                    fish_inv = Players.search(where('ID') == player_id)
                    Fish_inv = str(fish_inv).split(',')
                    Alaskan_Pollock = Fish_inv[12].strip("'").split(":")[1]
                    Alaskan_Pollock = Alaskan_Pollock.strip()
                    Alaskan_Pollock = int(Alaskan_Pollock)

                    # print(currency)
                    # print(Alaskan_Pollock)

                    new_currency = currency + 10

                    Players.update({'Money': new_currency}, where('ID') == player_id)
                    fished = 'alaskan pollock'

                    return fished
                elif fish_num < 9916:
                    Players.update(increment('Coelacanth'), where('ID') == player_id)
                    # await message.channel.send('You caught a(n) Coelacanth!')

                    fish_inv = Players.search(where('ID') == player_id)
                    Fish_inv = str(fish_inv).split(',')
                    Coelacanth = Fish_inv[13].strip("'").split(":")[1]
                    Coelacanth = Coelacanth.strip()
                    Coelacanth = int(Coelacanth)

                    print(currency)
                    print(Coelacanth)

                    new_currency = currency + 100

                    Players.update({'Money': new_currency}, where('ID') == player_id)
                    fished = 'coelacanth'

                    return fished
                elif fish_num < 9932:
                    Players.update(increment('Sturgeon'), where('ID') == player_id)
                    # await message.channel.send('You caught a(n) Sturgeon!')

                    fish_inv = Players.search(where('ID') == player_id)
                    Fish_inv = str(fish_inv).split(',')
                    Sturgeon = Fish_inv[14].strip("'").split(":")[1]
                    Sturgeon = Sturgeon.strip()
                    Sturgeon = int(Sturgeon)

                    print(currency)
                    print(Sturgeon)

                    new_currency = currency + 100

                    Players.update({'Money': new_currency}, where('ID') == player_id)
                    fished = 'sturgeon'

                    return fished
                elif fish_num < 9948:
                    Players.update(increment('Eel'), where('ID') == player_id)
                    # await message.channel.send('You caught a(n) Eel!')

                    fish_inv = Players.search(where('ID') == player_id)
                    Fish_inv = str(fish_inv).split(',')
                    Eel = Fish_inv[15].strip("'").split(":")[1]
                    Eel = Eel.strip()
                    Eel = int(Eel)

                    print(currency)
                    print(Eel)

                    new_currency = currency + 100

                    Players.update({'Money': new_currency}, where('ID') == player_id)
                    fished = 'Eel'

                    return fished
                elif fish_num < 9964:
                    Players.update(increment('Smalltooth Sawfish'), where('ID') == player_id)
                    # await message.channel.send('You caught a(n) Smalltooth Sawfish!')

                    fish_inv = Players.search(where('ID') == player_id)
                    Fish_inv = str(fish_inv).split(',')
                    Smalltooh_Sawfish = Fish_inv[16].strip("'").split(":")[1]
                    Smalltooh_Sawfish = Smalltooh_Sawfish.strip()
                    Smalltooh_Sawfish = int(Smalltooh_Sawfish)

                    print(currency)
                    print(Smalltooh_Sawfish)

                    new_currency = currency + 100

                    Players.update({'Money': new_currency}, where('ID') == player_id)
                    fished = 'smalltooh sawfish'

                    return fished
                elif fish_num < 9980:
                    Players.update(increment('Big Catfish'), where('ID') == player_id)
                    # await message.channel.send('You caught a(n) Big Catfish!')

                    fish_inv = Players.search(where('ID') == player_id)
                    Fish_inv = str(fish_inv).split(',')
                    Big_Catfish = Fish_inv[17].strip("'").split(":")[1]
                    Big_Catfish = Big_Catfish.strip()
                    Big_Catfish = int(Big_Catfish)

                    print(currency)
                    print(Big_Catfish)

                    new_currency = currency + 100

                    Players.update({'Money': new_currency}, where('ID') == player_id)
                    fished = 'big catfish'

                    return fished
                elif fish_num < 9996:
                    Players.update(increment('Sunfish'), where('ID') == player_id)
                    # await message.channel.send('You caught a(n) Sunfish!')
                

                    fish_inv = Players.search(where('ID') == player_id)
                    Fish_inv = str(fish_inv).split(',')
                    Sunfish = Fish_inv[18].strip("'").split(":")[1]
                    Sunfish = Sunfish.strip()
                    Sunfish = int(Sunfish)

                    print(currency)
                    print(Sunfish)

                    new_currency = currency + 100

                    Players.update({'Money': new_currency}, where('ID') == player_id)
                    fished = 'sunfish'

                    return fished
                elif fish_num < 9999:
                    fName = 'Devils Hole Pupfish'
                    dhp_remain = Fish.search(where('Name') == 'Devils Hole Pupfish')
                    dhp_remain = str(dhp_remain).split(':')[-1]
                    dhp_remain = dhp_remain.split('}]')[0]
                    dhp_remain = int(dhp_remain)
                    if dhp_remain > 0:
                        Fish.update(decrement('Count'), where('Name') == fName)
                        dhp_remain = Fish.search(where('Name') == 'Devils Hole Pupfish')
                        dhp_remain = str(dhp_remain).split(':')[-1]
                        dhp_remain = str(dhp_remain).split('}]')[0]
                        Players.update(increment('Devils Hole Pupfish'), where('ID') == player_id)
                        # await message.channel.send('You caught a(n) Devils Hole Pupfish!' + '\n------------Only' + str(dhp_remain) + " remain!------------")

                        fish_inv = Players.search(where('ID') == player_id)
                        Fish_inv = str(fish_inv).split(',')
                        devils_Hole_Pupfish = Fish_inv[19].strip("'").split(":")[1]
                        devils_Hole_Pupfish = devils_Hole_Pupfish.strip()
                        devils_Hole_Pupfish = int(devils_Hole_Pupfish)

                        print(currency)
                        print(devils_Hole_Pupfish)

                        new_currency = currency + 10000

                        Players.update({'Money': new_currency}, where('ID') == player_id)

                        fished = 'devils hole pupfish'

                        return fished
                    else:
                        continue