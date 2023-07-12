let keyboard = document.querySelector("#keyb")
let clone = document.querySelector("#clone")

// keyboard.addEventListener("keyup" , () =>{
//     clone.innerHTML = keyboard.value
// })

keyboard.addEventListener("keyup",(event) =>{
    if(event.key == "a")
    document.body.style = "background : blue"
     else if(event.key == "b")
    document.body.style = "background : black"
    else if(event.key == "c")
    document.body.style = "background : green"
    else if(event.key == "d")
    document.body.style = "background : yellow"
    else if(event.key == "e")
    document.body.style = "background : orange"
    
});

// keyboard.addEventListener("keydown", (event) => {
//     if(event.altKey){
//      console.log("som")
//     }
//  });

