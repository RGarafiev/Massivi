//Zadacha 1

let nums = [5, 2, 4];

nums[99] = 3;

let squares = [];

for (let i = 0; i < nums.length; i++) {
    squares.push(nums[i] * nums[i]);
}

squares.push(nums[99] * nums[99]);


console.log(squares);  

//Zadacha 2

let list = [
    {product: "Apple", price: 25},
    {product: "Cherry", price: 32},
    {product: "Strawberry", price: 45}
];

let maxPrice = -Infinity;
let maxProduct = "";

for (let item of list) {
    if (item.price > maxPrice) {
        maxPrice = item.price;
        maxProduct = item.product;
    }
}


console.log(maxProduct); 

//Zadacha 3

const products = ["apple", "banana", "tomato", "cucumber", "lettuce", "carrot", "onion", "pepper", "garlic", "spinach"];

let basket = [];

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const numItems = getRandomInt(10, 30);

for (let i = 0; i < numItems; i++) {
    const productName = products[getRandomInt(0, products.length - 1)];
    const price = getRandomInt(10, 100);

    let productInBasket = basket.find(item => item.product === productName);

    if (productInBasket) {
        productInBasket.cnt += 1;
    } else {
        basket.push({product: productName, price: price, cnt: 1});
    }
}

const totalSum = basket.reduce((sum, item) => sum + item.price * item.cnt, 0);


console.log(basket);
console.log(`Total sum: ${totalSum}`);