const shoppingList = [
    {name : 'Butter',
    quantity : 2,
    bought : true,
    price : 5,
    sum : 10, },

    {name : 'Bread',
    quantity : 4,
    bought : false,
    price : 3,
    sum : 12, },

    {name : 'Meat',
    quantity : 3,
    bought : true,
    price : 3,
    sum : 9, },

    {name : 'Salt',
    quantity : 3,
    bought : false,
    price : 3,
    sum : 9, }
]

for (let i=0; i< shoppingList.length; i++){
    console.log(shoppingList[i].name + ' ' + shoppingList[i].bought)
    }

// Sort
shoppingList.sort((a, b) => b.bought - a.bought)




let buy = function (product) {
for (i = 0; i < shoppingList.length; i++) {
    if (shoppingList[i].name == product )
    shoppingList[i].bought = true
    }
}

buy('Salt')

console.log(shoppingList)




