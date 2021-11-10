import discord
import fishy
import mysql.connector
from discord.ext import commands

client = discord.Client()

token = "OTAwNDQyMDQ3NzEyOTg5MjU0.YXBYAQ.geTgkzvegSYkLRirjlHDe423Zqo"

@client.event
async def on_ready():
    print('Bot is ready.')

@client.event
async def on_message(message):
    db = mysql.connector.connect(
        host="localhost",
        user='root',
        passwd='DiscordtheGame1',
        database="discordbot"
    )
    mycursor = db.cursor(buffered=True)
    if message.author == client.user:
        return
    
    if message.content.startswith('$fish'):
        author = message.author
        author_id = message.author.id
        x = 0
        pole = mycursor.execute("SELECT pole FROM player WHERE id = '{}'".format(author_id))
        fish_chances = fishy.get_rand_fish_num(pole)
        fish_caught = fishy.fish_cmd(author_id, fish_chances)
        mycursor.execute("SELECT * FROM fish WHERE id = '{}' AND fish_name = '{}'".format(author_id, fish_caught[0]))
        for fish in mycursor:
            x += 1
        if x == 0:
            mycursor.execute("INSERT INTO fish(fish_name, fish_value, fish_count, id, fish_rarity) VALUES ('{}', '{}', 1, '{}', {}".format(fish_caught[0],fish_caught[1],1,author_id, fish_caught[2],))
            db.commit()
        else:
            mycursor.execute("UPDATE fish SET fish_count = (fish_count + 1) WHERE id = '{}' and fish_name = '{}'".format(author_id, fish_caught[0]))    
            db.commit()
        await message.channel.send('{} caught a(n) {}'.format(author, fish_caught[0]))
    elif message.content.startswith('$stats'):
        pass
    elif message.content.startswith('$inventory'):
        pass

client.run(token)
