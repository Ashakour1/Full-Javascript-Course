// Xhr http request


let request = new XMLHttpRequest();


// GET POST PUT ........ 


// GET : wax waaye markaa date aad so aqrineysid

// POST : waxa waaye marka information database udireysid 

// PUT :markaa rabtid inaa date update dhahdid


// unsent
// console.log(request.readyState);

request.addEventListener('readystatechange',() =>{
    if(request.readyState === 4 && request.status === 200){
        console.log(request.responseText);
    }else if(request.readyState  === 4) {
        alert("ERROR NOT FOUND !")
    }
})

// how to send request 

request.open('GET','https://jsonplaceholder.typicode.com/posts/1');

// when i opened

// console.log(request.readyState);


request.send();
// when i sending

// console.log(request.readyState);


// readyState have four situatuon

// -- 0 : unsent
// -- 1 : opened
// -- 2 : header_recieved
// -- 3 : Loading 
// -- 4 : Done


