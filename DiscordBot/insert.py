from tinydb import TinyDB, Query

db = TinyDB('fishing_game.json')
Players = db.table('Players')

Players.insert({'ID': 129461583968468993, 'userName': 'Old70ham', 'Money': 0, 'Pole': 'Default', 'Bass': 0, 'Perch': 0, 'Carp': 0, 'Catfish': 0, 'Peruvian Anchoveta': 0, 'Tuna': 0, 'Salmon': 0, 'Tilapia': 0, 'Alaskan Pollock': 0,
'Coelacanth': 0, 'Sturgeon': 0, 'Eel': 0, 'Smalltooth Sawfish': 0, 'Big Catfish': 0, 'Sunfish': 0, 'Devils Hole Pupfish': 0, 'Hunger': 100})