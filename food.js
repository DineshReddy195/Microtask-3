const food=require('./foodList.json')

let mapped=food.map(ele=>ele.foodname)
// console.log(mapped)

let filtered=food.filter(ele=>ele.category==='Vegetable')
// console.log(filtered);
let fruits=food.filter(element=>element.category==='Fruit')
// console.log(fruits)
let protein=food.filter(element=>element.category==='Protein')
// console.log(protein)
let nuts=food.filter(element=>element.category==='Nuts')
// console.log(nuts);
let grains=food.filter(ele=>ele.category==='Grain')
// console.log(grains);
let dairy=food.filter(element=>element.category==='Dairy')
// console.log(dairy)
let above=food.filter(element=>element.calorie>100)
// console.log(above);
let below=food.filter(element=>element.calorie<100)
// console.log(below);
let descending=food.sort(function(highest,lowest){return lowest.protiens-highest.protiens})
// console.log(descending);
let ascending=food.sort(function(highest,lowest){return highest.cab-lowest.cab})
console.log(ascending);

