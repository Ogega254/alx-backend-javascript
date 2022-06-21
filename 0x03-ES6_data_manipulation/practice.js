// =============================== Array =================================

const fruits = ['Apples', 'mangoes', 'pineapple', 'Avocado', 'passion fruit'];
console.log(fruits.length);

const fruit = new Array('Apple', 'mango', 'banana');
console.log(fruit.length);

const Fruits = 'Apple, Banana, pineapple'.split(', ');
console.log(Fruits.length);
console.log(Fruits);

// creating a string from an array
const fruitString = fruits.join(', ');
console.log(fruitString);

console.log(`I love eating ${fruits[0]}`);
console.log(fruits[fruits.length - 1]);

// finding the index of an item in an array
console.log(fruits.indexOf('pineapple'));

// checking if an array contain a certain element
console.log(fruits.includes('Apples'));
console.log(fruits.includes('Strawberry'));

// appending an item into a an array
fruit.push('Strawberry');
console.log('Appending an item to an array.....')
console.log(fruit);

// removing the last item of an array
fruit.pop();
console.log(fruit);

// removing multiple items from the end of an array
const removedItem = fruit.splice(-2);
console.log(fruit);
console.log(removedItem);

// removing the first item from an array using shift()
const fruitS = ['Apples', 'mangoes', 'pineapple', 'Avocado', 'passion fruit'];
const removeditem = fruitS.shift();
console.log(removeditem);

// adding an item to an array at index 0
const newLength = fruitS.unshift('Strawberry');
console.log(fruitS);
// console.log(newLength);


// replacing multiple items in an array
const removedItems = fruitS.splice(0, 1, 'grape');
console.log(fruitS);
for (const fruit of fruitS){
    console.log(fruit);
}


fruitS.forEach(function(item, index, array){
    console.log(item, index);
});

// copying an array
const fruitCopy = [...fruits];
const FruitsCopy = Array.from(fruitS);
const deepcopy = JSON.parse(JSON.stringify(fruitS));
console.log(deepcopy);
