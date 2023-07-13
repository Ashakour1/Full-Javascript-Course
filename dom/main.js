//  Author : A.shakour mohammed v

// selecting dom

/*

by id #id
by classname .class
by tagname h1,p,
*/

// by tagname
// let element = document.querySelector("h1");

// console.log(element);
// // by id
// let element2 = document.querySelector("#element2");
// console.log(element2);
// // by class
// let element3 = document.querySelector(".element3");
// console.log(element3);


// let element = document.getElementById("element2");
// console.log(element)
// let element2 = document.getElementsByTagName("h1");
// console.log(element2);


// // Adding and removing
// let main = document.querySelector("#main")

// let newElement = document.createElement("P");

// let newContent = document.createTextNode("welcome to dom element");

// newElement.append(newContent);
// main.append(newElement);
// let newElement2 = document.createElement("P");

// let newContent2 = document.createTextNode("welcome to dom element2");

// newElement2.appendChild(newContent2);
// main.append(newElement2);

// console.log(newElement);

// newElement2.remove();

let error = document.querySelector("div")
error.classList.add("success")
error.style.background = "Blue";
// error.classList.remove("success")


let pragraph = document.querySelector("p")
pragraph.style.color = "white";

