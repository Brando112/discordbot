from tinydb import TinyDB, Query

db = TinyDB('fishing_game.json')
table = db.table('Players')

allcontent = table.all()

print(allcontent)