
// clicked event
let button = document.querySelector("button");

button.addEventListener("click" , ()=>{
    alert("Thank you");
});

// mousover

let btn = document.querySelector("#muus");

btn.addEventListener("mouseover", ()=>{
    alert("Thank you");
});
// mouseLeave
let bn = document.querySelector("#us");

bn.addEventListener("mouseleave", ()=>{
    alert("Thank you");
});
// Changed backround
let bg = document.querySelector(".Bg");
bg.addEventListener("click", () =>{
    document.body.style = "background : #434344 ";
});

// Mouse Over And MouseLeave

let Mg = document.querySelector(".Mg");
Mg.addEventListener("mouseover", () =>{
    document.body.style = "background : #434388 ";
});

Mg.addEventListener("mouseleave" , ()=>{
    document.body.style = "background : #453433"
})