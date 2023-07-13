//  Author : A.shakour mohammed 

// Async and wait


const getData = async() => {
    const request = await fetch('https://jsonplaceholder.typicode.com/posts');

    const response = await request.json();

    return response;
}

getData().then(data =>{
    console.log(data)
}).catch((error)=>
    console.error(error));