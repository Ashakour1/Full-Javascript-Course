const getPosts = (resources) =>{
    let request = new XMLHttpRequest();



    request.addEventListener('readystatechange',() =>{
        if(request.readyState === 4 && request.status === 200){
            let data = JSON.parse(request.responseText);
            console.log(data);
        }else if(request.readyState  === 4) {
            alert("ERROR NOT FOUND !")
        }
    })

    request.open('GET',resources);
    request.send();
}

getPosts('https://jsonplaceholder.typicode.com/posts')