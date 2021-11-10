import random

def fish_cmd(author_id, fish_chances):
    base_chance = 1100
    rare_chance = 16
    legendary_chance = 1
    fish_num = random.randint(1, 10000)
    if fish_num < (base_chance):
        return ['Alaskan Cod', 10, 'COMMON', True]
    elif fish_num < (base_chance*2):
        return ['Bass', 10, 'COMMON', True]
    elif fish_num < (base_chance*3):
        return ['Carp', 10, 'COMMON', True]
    elif fish_num < (base_chance*4):
        return ['Catfish',10, 'COMMON', True]
    elif fish_num < (base_chance*5):
        return ['Peruvian Anchoveta', 10, 'COMMON', True]
    elif fish_num < (base_chance*6):
        return ['Tuna', 10, 'COMMON', True]
    elif fish_num < (base_chance*7):
        return ['Salmon', 10, 'COMMON', True]
    elif fish_num < (base_chance*8):
        return ['Tilapia', 10, 'COMMON', True]
    elif fish_num < (base_chance*9):
        return ['Alaskan Pollock', 10, 'COMMON', True]
    elif fish_num < (base_chance*9 + rare_chance):
        return ['Coelacanth', 100, 'RARE', True]
    elif fish_num < (base_chance*9 + rare_chance*2):
        return ['Sturgeon', 100, 'RARE', False]
    elif fish_num < (base_chance*9 + rare_chance*3):
        return ['Eel', 100, 'RARE', False]
    elif fish_num < (base_chance*9 + rare_chance*4):
        return ['Smalltooth Sawfish', 100, 'RARE', False]
    elif fish_num < (base_chance*9 + rare_chance*5):
        return ['Big Catfish', 100, 'RARE', False]
    elif fish_num < (base_chance*9 + rare_chance*6):
        return ['Sunfish', 100, 'RARE', False]
    elif fish_num < (base_chance*9 + rare_chance*2 + legendary_chance +3):
        return ['Sturgeon', 100, 'RARE', False]

def get_rand_fish_num(pole):
    if (pole == 'Default'):
        base_chance = 1100
        rare_chance = 16
        legendary_chance = 1
        randnum = random.randint(1, 10000)
        return [1100, 16, 1, randnum]
    elif(pole == 'Bamboo Rod'):
        base_chance = 1089 
        rare_chance = 32
        legendary_chance = 2
        randnum = random.randint(1, 9995)
        return [base_chance, rare_chance, legendary_chance, randnum]
    elif(pole == 'Treated Wood Rod'):
        base_chance = 1079 
        rare_chance = 46
        legendary_chance = 3
        randnum = random.randint(1, 10002)
        return [base_chance, rare_chance, legendary_chance, randnum]
    elif(pole =='Wyrdwood Rod'):
        base_chance = 1069 
        rare_chance = 64
        legendary_chance = 4
        randnum = random.randint(1, 10009)
        return [base_chance, rare_chance, legendary_chance, randnum]
    elif(pole == 'Ironwood Rod'):
        base_chance = 1058 
        rare_chance = 80
        legendary_chance = 5
        randnum = random.randint(1, 10007)
        return [base_chance, rare_chance, legendary_chance, randnum]
            