from tinydb import TinyDB, Query

db = TinyDB('fishing_game.json')

Players = db.table('Players')
Players.insert({'ID': 192054149464981504, 'userName': 'Brando', 'Money': 0, 'Pole': 'Default', 'Bass': 0, 'Perch': 0, 'Carp': 0, 'Catfish': 0, 'Peruvian Anchoveta': 0, 'Tuna': 0, 'Salmon': 0, 'Tilapia': 0, 'Alaskan Pollock': 0,
'Coelacanth': 0, 'Sturgeon': 0, 'Eel': 0, 'Smalltooth Sawfish': 0, 'Big Catfish': 0, 'Sunfish': 0, 'Devils Hole Pupfish': 0, 'Hunger': 100 })
Players.insert({'ID': 262777450294018048, 'userName': 'Banya', 'Money': 0, 'Pole': 'Default', 'Bass': 0, 'Perch': 0, 'Carp': 0, 'Catfish': 0, 'Peruvian Anchoveta': 0, 'Tuna': 0, 'Salmon': 0, 'Tilapia': 0, 'Alaskan Pollock': 0,
'Coelacanth': 0, 'Sturgeon': 0, 'Eel': 0, 'Smalltooth Sawfish': 0, 'Big Catfish': 0, 'Sunfish': 0, 'Devils Hole Pupfish': 0, 'Hunger': 100})
Players.insert({'ID': 235853907836796928, 'userName': 'Yared', 'Money': 0, 'Pole': 'Default', 'Bass': 0, 'Perch': 0, 'Carp': 0, 'Catfish': 0, 'Peruvian Anchoveta': 0, 'Tuna': 0, 'Salmon': 0, 'Tilapia': 0, 'Alaskan Pollock': 0,
'Coelacanth': 0, 'Sturgeon': 0, 'Eel': 0, 'Smalltooth Sawfish': 0, 'Big Catfish': 0, 'Sunfish': 0, 'Devils Hole Pupfish': 0, 'Hunger': 100})
Players.insert({'ID': 344249499302101002, 'userName': 'Bobangortat', 'Money': 0, 'Pole': 'Default', 'Bass': 0, 'Perch': 0, 'Carp': 0, 'Catfish': 0, 'Peruvian Anchoveta': 0, 'Tuna': 0, 'Salmon': 0, 'Tilapia': 0, 'Alaskan Pollock': 0,
'Coelacanth': 0, 'Sturgeon': 0, 'Eel': 0, 'Smalltooth Sawfish': 0, 'Big Catfish': 0, 'Sunfish': 0, 'Devils Hole Pupfish': 0, 'Hunger': 100})
Players.insert({'ID': 151493449034629130, 'userName': 'Kliewer', 'Money': 0, 'Pole': 'Default', 'Bass': 0, 'Perch': 0, 'Carp': 0, 'Catfish': 0, 'Peruvian Anchoveta': 0, 'Tuna': 0, 'Salmon': 0, 'Tilapia': 0, 'Alaskan Pollock': 0,
'Coelacanth': 0, 'Sturgeon': 0, 'Eel': 0, 'Smalltooth Sawfish': 0, 'Big Catfish': 0, 'Sunfish': 0, 'Devils Hole Pupfish': 0, 'Hunger': 100})
Players.insert({'ID': 655528410088472608, 'userName': 'eyraptor', 'Money': 0, 'Pole': 'Default', 'Bass': 0, 'Perch': 0, 'Carp': 0, 'Catfish': 0, 'Peruvian Anchoveta': 0, 'Tuna': 0, 'Salmon': 0, 'Tilapia': 0, 'Alaskan Pollock': 0,
'Coelacanth': 0, 'Sturgeon': 0, 'Eel': 0, 'Smalltooth Sawfish': 0, 'Big Catfish': 0, 'Sunfish': 0, 'Devils Hole Pupfish': 0, 'Hunger': 100})
Players.insert({'ID': 129461583968468993, 'userName': 'Old70ham', 'Money': 0, 'Pole': 'Default', 'Bass': 0, 'Perch': 0, 'Carp': 0, 'Catfish': 0, 'Peruvian Anchoveta': 0, 'Tuna': 0, 'Salmon': 0, 'Tilapia': 0, 'Alaskan Pollock': 0,
'Coelacanth': 0, 'Sturgeon': 0, 'Eel': 0, 'Smalltooth Sawfish': 0, 'Big Catfish': 0, 'Sunfish': 0, 'Devils Hole Pupfish': 0, 'Hunger': 100})

# Common
Fish = db.table('Fish')
Fish.insert({'ID': 1, 'Name': 'Bass', 'Rarity': 'Common'})
Fish.insert({'ID': 2, 'Name': 'Perch', 'Rarity': 'Common'})
Fish.insert({'ID': 3, 'Name': 'Carp', 'Rarity': 'Common'})
Fish.insert({'ID': 4, 'Name': 'Catfish', 'Rarity': 'Common'})
Fish.insert({'ID': 5, 'Name': 'Peruvian Anchoveta', 'Rarity': 'Common'})
Fish.insert({'ID': 6, 'Name': 'Tuna', 'Rarity': 'Common'})
Fish.insert({'ID': 7, 'Name': 'Salmon', 'Rarity': 'Common'})
Fish.insert({'ID': 8, 'Name': 'Tilapia', 'Rarity': 'Common'})
Fish.insert({'ID': 9, 'Name': 'Alaskan Pollock', 'Rarity': 'Common'})
# Rare
Fish.insert({'ID': 10, 'Name': 'Coelacanth', 'Rarity': 'Rare'})
Fish.insert({'ID': 11, 'Name': 'Sturgeon', 'Rarity': 'Rare'})
Fish.insert({'ID': 12, 'Name': 'Eel', 'Rarity': 'Rare'})
Fish.insert({'ID': 13, 'Name': 'Smalltooth Sawfish', 'Rarity': 'Rare'})
Fish.insert({'ID': 14, 'Name': 'BigCatfish', 'Rarity': 'Rare'})
Fish.insert({'ID': 15, 'Name': 'Sunfish', 'Rarity': 'Rare'})
# Legendary
Fish.insert({'ID': 16, 'Name': 'Devils Hole Pupfish', 'Rarity': 'Legendary', 'Count': 35})


# SHOP

# Rods
Shop = db.table('Shop')
Shop.insert({'Type': 'Rod', 'Name': 'Bamboo_Pole', 'Cost': '5000'})
Shop.insert({'Type': 'Rod', 'Name': 'Fiberglass_Rod', 'Cost': '18000'})
Shop.insert({'Type': 'Rod', 'Name': 'Iridium_Rod', 'Cost': '75000'})

# House
Shop.insert({'Type': 'House', 'Name': 'Tent', 'Cost': '45000'})
Shop.insert({'Type': 'House', 'Name': 'Hut', 'Cost': '90000'})
Shop.insert({'Type': 'House', 'Name': 'One_Story', 'Cost': '180000'})

