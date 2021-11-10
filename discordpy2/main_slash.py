import fishy
import discord

from discord.ext import commands
from discord import SlashCommand, SlashContext
from discord.utils.manage_commands import create_choice, create_option



client = commands.Bot(command_prefix="!")
slash = SlashCommand(client, sync_commands=True)
token= "OTAwNDQyMDQ3NzEyOTg5MjU0.YXBYAQ.geTgkzvegSYkLRirjlHDe423Zqo"

@slash.slash(name="fish", description="Fishes up a random fish.", guild_ids=[900543981132337193])
async def fish(ctx):
    fish_caught = fishy.fish_cmd()
    await ctx.send('You caught a(n) ' + fish_caught)

@client.event
async def on_ready():
    print('We have logged in as {0.user}'.format(client))



client.run(token)