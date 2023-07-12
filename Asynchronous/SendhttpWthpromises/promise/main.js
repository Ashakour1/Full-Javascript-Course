// SEND HTTP REQUEST WITH PROMISES


const getPosts = (resources) => {
   

    return new Promise ( (resolve, reject) => {

        let request = new XMLHttpRequest();
        request.addEventListener('readystatechange',() =>{
            if(request.readyState === 4 && request.status === 200){
                let data = JSON.parse(request.responseText);
                resolve(data);
            }else if(request.readyState  === 4) {
                reject("wrong something")
            }
        })
    
        request.open('GET',resources);
        request.send();
    });
    
}
getPosts('https://jsonplaceholder.typicode.com/posts').then((data) => {
    console.log(data);
}).catch((error) =>{
    console.log(error);
})
