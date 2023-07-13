//  Author : A.shakour mohammed 

// FETCHING API IN  EASY

fetch('https://jsonplaceholder.typicode.com/posts')
.then((resolve) =>{
    return resolve.json();
}).then( data =>{
    console.log(data);
}).catch((error)=>{
    console.log(error)
})