let fruits = ["Banana","Mangoes","Apple"];
// adding last
fruits.push("heloo man")
// removing last
fruits.pop() 
console.log(fruits);

// removing 
let pos = fruits.indexOf("Mangoes");

let remove = fruits.splice(pos,1);

console.log(fruits)

// array loop through

let fruit = ["Banana","Apple", "Mangoes"];

fruit.forEach(function  (item){
    console.log(item)
})
