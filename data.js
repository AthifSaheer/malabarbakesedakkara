// rice, noodles, soup, starter, biriyani, nonvegcurries, vegcurries, fish, bread, hot, lime, juice, shakes, icecream, lessi, fruitsalad, falooda, mojito
var data = {
    "rice": [
        {
            "name": "Mixed fried rice",
            "price": 160,
        },
        {
            "name": "Chicken fried rice",
            "price": 140,
        },
        {
            "name": "Egg fried rice",
            "price": 130,
        },
        {
            "name": "Veg fried rice",
            "price": 120,
        },
        {
            "name": "Jeera rice",
            "price": 80,
        },
        {
            "name": "Lemon rice",
            "price": 80,
        },
        {
            "name": "Garlic rice",
            "price": 90,
        },
        {
            "name": "Mandhi rice Q/H/F",
            "price": "80/150/280",
        },
        {
            "name": "Curd rice",
            "price": 70,
        },
        {
            "name": "Tomato rice*",
            "price": 80,
        },
        {
            "name": "Schezwan mixed fried rice",
            "price": 170,
        },
        {
            "name": "Schezwan chicken fried rice",
            "price": 150,
        },
        {
            "name": "Schezwan egg fried rice",
            "price": 140,
        },
        {
            "name": "Schezwan veg fried rice",
            "price": 130,
        },
    ],
    "noodles": [
        {
            "name": "Chicken noodles",
            "price": 140
        },
        {
            "name": "Egg noodles",
            "price": 130
        },
        {
            "name": "Veg noodles",
            "price": 120
        },
        {
            "name": "Schezwan noodles chicken/egg/veg",
            "price": "160/140/130"
        },
        {
            "name": "Schezwan mixed noodles",
            "price": 170
        },
    ],
    "soup": [
        {
            "name": "Sweet corn chicken",
            "price": 100
        },
        {
            "name": "Sweet corn veg",
            "price": 90
        },
        {
            "name": "Hot & sour veg",
            "price": 100
        },
        {
            "name": "Hot & sour chicken",
            "price": 110
        },
        {
            "name": "Manchow chicken",
            "price": 120
        },
        {
            "name": "Manchow veg",
            "price": 100
        },
        {
            "name": "Chicken clear soup",
            "price": 100
        },
        {
            "name": "Veg clear soup",
            "price": 80
        },
        
    ],
    "starter": [
        {
            "name": "Chicken 65 Q/H/F",
            "price": "140/250/470"
        },
        {
            "name": "Chicken kondattam Q/H/F",
            "price": "150/260/480"
        },
        {
            "name": "Dragon chicken",
            "price": "250"
        },
        {
            "name": "Chilly chicken dry Q/H/F",
            "price": "150/250/450"
        },
        {
            "name": "Chilly gobi dry",
            "price": 130
        },
        {
            "name": "Gobi manchurian",
            "price": 130
        },
        {
            "name": "Chilly paneer dry",
            "price": 140
        },
        {
            "name": "Paneer 65",
            "price": 150
        },
        {
            "name": "Hot & sweet malabar chicken*",
            "price": "----"
        },
        {
            "name": "American chopsy*",
            "price": "----"
        },
        {
            "name": "Chicken tikka",
            "price": 220
        },
        {
            "name": "Lollypop*",
            "price": "----"
        },
        {
            "name": "Crispy veg*",
            "price": "----"
        },
    ],
    "biriyani": [
        {
            "name": "Chicken biriyani*",
            "price": 130
        },
        {
            "name": "Motton biriyani*",
            "price": 190
        },
        {
            "name": "Fish biriyani*",
            "price": 150
        },
        {
            "name": "Aykora biriyani*",
            "price": 180
        },
        {
            "name": "Veg biriyani*",
            "price": 100
        },
        {
            "name": "Prawns biriyani*",
            "price": 220
        },
        {
            "name": "Avoli biriyani",
            "price": 220
        },
        {
            "name": "Amur biriyani",
            "price": 220
        },
    ],
    "nonvegcurries": [
        {
            "name": "Chicken curry *",
            "price": "---"
        },
        {
            "name": "Chilly chicken Q/H/F",
            "price": "140/240/460"
        },
        {
            "name": "Ginger chicken Q/H/F",
            "price": "140/250/480"
        },
        {
            "name": "Garlic chicken Q/H/F",
            "price": "140/250/480"
        },
        {
            "name": "Malabar chicken Q/H/F",
            "price": "130/250/480"
        },
        {
            "name": "Pepper chicken Q/H/F",
            "price": "160/260/490"
        },
        {
            "name": "Kadayi chicken Q/H/F",
            "price": "140/260/480"
        },
        {
            "name": "Chicken mugulai Q/H/F *",
            "price": "150/260/480"
        },
        {
            "name": "Butter chicken Q/H/F",
            "price": "160/260/500"
        },
        {
            "name": "Schezwan chicken Q/H/F",
            "price": "150/260/490"
        },
        {
            "name": "Chicken Manchurian Q/H/F",
            "price": "140/240/460"
        },
        {
            "name": "Chicken kuruma Q/H/F",
            "price": "160/240/490"
        },
        {
            "name": "Chicken stew Q/H/F",
            "price": "160/260/490"
        },
        {
            "name": "Chicken chettinad Q/H/F",
            "price": "140/260/480"
        },
    ],
    "vegcurries": [
        {
            "name": "Veg kuruma Q/H/F",
            "price": "80/150/300"
        },
        {
            "name": "Veg curry",
            "price": 70
        },
        {
            "name": "Veg masala",
            "price": 80
        },
        {
            "name": "Chilly gobi Q/H/F",
            "price": "110/230/450"
        },
        {
            "name": "Gobi manchoorian Q/H/F",
            "price": "110/230/450"
        },
        {
            "name": "Alu gobi masala",
            "price": 120
        },
        {
            "name": "Paneer butter masala",
            "price": 140
        },
        {
            "name": "Kadayi paneer",
            "price": 150
        },
        {
            "name": "Mashroom masala",
            "price": 130
        },
        {
            "name": "Chilly Mashroom",
            "price": 130
        },
        {
            "name": "Mashroom manchoorian",
            "price": 130
        },
        {
            "name": "Veg manchoorian",
            "price": 130
        },
        {
            "name": "Veg kadayi",
            "price": 130
        },
        {
            "name": "Kadayi mashroom",
            "price": 130
        },
        {
            "name": "Veg stew",
            "price": 130
        }
    ],
    "fish": [
        {
            "name": "Prowns",
            "price": "as per size"
        },
        {
            "name": "Koonthal",
            "price": "as per size"
        },
        {
            "name": "Avoli",
            "price": "as per size"
        },
        {
            "name": "Aykora fish",
            "price": "as per size"
        },
        {
            "name": "Ayla fry",
            "price": "as per size"
        },
        {
            "name": "Manthal fry",
            "price": "as per size"
        },
        {
            "name": "Vathal(Natholi) fry",
            "price": "as per size"
        },
        {
            "name": "Crab",
            "price": "as per size"
        },
        {
            "name": "Karimeen",
            "price": "as per size"
        },
        {
            "name": "Fish pollichath",
            "price": "as per size"
        },
    ],
    "breads": [
        {
            "name": "Kerala porotta",
            "price": 10
        },
        {
            "name": "Chappathi",
            "price": 10
        },
        {
            "name": "Wheat porotta",
            "price": 15
        },
        {
            "name": "Rotti",
            "price": 20
        },
        {
            "name": "Nan",
            "price": 25
        },
        {
            "name": "Butter nan",
            "price": 35
        },
        {
            "name": "Garlic nan",
            "price": 40
        },
        {
            "name": "Kuboos",
            "price": 10
        },
    ],
    "hot": [
        {
            "name": "Tea",
            "price": 12
        },
        {
            "name": "Coffee",
            "price": 25
        },
        {
            "name": "Horlics",
            "price": 25
        },
        {
            "name": "Boost",
            "price": 25
        },
    ],
    "lime": [
        {
            "name": "Fresh lime",
            "price": 15
        },
        {
            "name": "Grape lime",
            "price": 20
        },
        {
            "name": "Pineapple lime",
            "price": 20
        },
        {
            "name": "Mint lime",
            "price": 20
        },
        {
            "name": "Chily lime",
            "price": 20
        },
        {
            "name": "Blue lime",
            "price": 40
        },
        {
            "name": "Dark lime",
            "price": 40
        },
    ],
    "juice": [
        {
            "name": "Grape",
            "price": 50
        },
        {
            "name": "Pineapple",
            "price": 60
        },
        {
            "name": "Orange",
            "price": 60
        },
        {
            "name": "Musambi",
            "price": 60
        },
        {
            "name": "Watermelon",
            "price": 50
        },
        {
            "name": "Carrot",
            "price": 60
        },
        {
            "name": "Sharja",
            "price": 50
        },
        {
            "name": "Chicku",
            "price": 60
        },
        {
            "name": "Apple",
            "price": 60
        },
        {
            "name": "Mango",
            "price": 60
        },
        {
            "name": "Pappaya",
            "price": 50
        },
        {
            "name": "Saudi",
            "price": 60
        },
        {
            "name": "Strawberry",
            "price": 60
        },
        {
            "name": "Shammam",
            "price": 50
        },
        {
            "name": "Badam",
            "price": 50
        },
        {
            "name": "Guava",
            "price": 50
        },
        {
            "name": "Anar",
            "price": 60
        },
        {
            "name": "Chocolate",
            "price": 60
        },
        {
            "name": "Kiwi",
            "price": 60
        },
        {
            "name": "Tender coconut",
            "price": 60
        },
        {
            "name": "Butter",
            "price": 60
        },
        {
            "name": "Jackfruit",
            "price": 60
        },
    ],
    "shakes": [
        {
            "name": "Sharja",
            "price": 70
        },
        {
            "name": "Chicku",
            "price": 80
        },
        {
            "name": "Apple",
            "price": 80
        },
        {
            "name": "Mango",
            "price": 60
        },
        {
            "name": "Pappaya",
            "price": 70
        },
        {
            "name": "Avacado",
            "price": 80
        },
        {
            "name": "Anar",
            "price": 80
        },
        {
            "name": "Saudi",
            "price": 80
        },
        {
            "name": "Strawberry",
            "price": 80
        },
        {
            "name": "Shammam",
            "price": 70
        },
        {
            "name": "Badam",
            "price": 70
        },
        {
            "name": "Guava",
            "price": 70
        },
        {
            "name": "Tender coconut",
            "price": 90
        },
        {
            "name": "Spanish delight",
            "price": 90
        },
        {
            "name": "Jack fruit",
            "price": 90
        },
    ],
    "icecream": [
        {
            "name": "Vanilla",
            "price": 60
        },
        {
            "name": "Strawberry",
            "price": 70
        },
        {
            "name": "Pista",
            "price": 70
        },
        {
            "name": "Chocolate",
            "price": 80
        },
        {
            "name": "Butter scotch",
            "price": 80
        },
        {
            "name": "Tender coconut",
            "price": 80
        },
        {
            "name": "Jack fruit",
            "price": 80
        },
        {
            "name": "Black currant",
            "price": 80
        },
        {
            "name": "Spanish delight",
            "price": 80
        },
    ],
    "lessi": [
        {
            "name": "Normal lessi",
            "price": 50
        },
        {
            "name": "Mango lessi",
            "price": 60
        },
        {
            "name": "Ginger lessi",
            "price": 60
        },
        {
            "name": "Strawberry lessi",
            "price": 60
        },
        {
            "name": "Dry fruit lessi",
            "price": 60
        },
    ],
    "fruitsalad": [
        {
            "name": "Fruit salad",
            "price": 60
        },
        {
            "name": "Special salad",
            "price": 80
        },
        {
            "name": "Dry fruit salad",
            "price": 100
        },
        {
            "name": "Malabar salad",
            "price": 100
        },
    ],
    "falooda": [
        {
            "name": "Falooda",
            "price": 110
        },
        {
            "name": "Special falooda",
            "price": 150
        },
        {
            "name": "Royal falooda",
            "price": 170
        },
        {
            "name": "Malabar falooda",
            "price": 200
        },
    ],
    "mojito": [
        {
            "name": "Orange mojito",
            "price": 70
        },
        {
            "name": "Blue mojito",
            "price": 70
        },
        {
            "name": "Green apple mojito",
            "price": 70
        },
        {
            "name": "Strawberry mojito",
            "price": 70
        },
        {
            "name": "Kiwi mojito",
            "price": 70
        },
        {
            "name": "Mint mojito",
            "price": 70
        },
    ],
    "samoona": [
        {
            "name": "Chicken samoona",
            "price": 40
        },
        {
            "name": "Beef samoona",
            "price": 50
        },
        {
            "name": "Egg samoona",
            "price": 40
        },
        {
            "name": "Veg samoona",
            "price": 30
        },
        {
            "name": "Nuggets samoona",
            "price": 30
        },
        {
            "name": "Zinger samoona",
            "price": 70
        },
    ],
    "soda": [
        {
            "name": "Lime soda",
            "price": 15
        },
        {
            "name": "Sweet soda",
            "price": 40
        },
        {
            "name": "Chilly soda",
            "price": 20
        },
        {
            "name": "Sweet & Salt soda",
            "price": 40
        },
        {
            "name": "Orange soda",
            "price": 40
        },
        {
            "name": "Grape soda",
            "price": 40
        },
        {
            "name": "Pineapple soda",
            "price": 40
        },
    ],
    "burger": [
        {
            "name": "Chicken burger",
            "price": 70
        },
        {
            "name": "Beef burger",
            "price": 80
        },
        {
            "name": "Zinger burger",
            "price": 100
        },
        {
            "name": "Veg burger",
            "price": 50
        },
    ],
    "sandwichClub": [
        {
            "name": "Chicken sandwich",
            "price": 70
        },
        {
            "name": "Egg sandwich",
            "price": 50
        },
        {
            "name": "Veg sandwich",
            "price": 60
        },
        {
            "name": "Zinger sandwich",
            "price": 100
        },
        {
            "name": "Chicken club",
            "price": 90
        },
        {
            "name": "Veg club",
            "price": 70
        },
        {
            "name": "Beef club",
            "price": 100
        },
    ],
}
