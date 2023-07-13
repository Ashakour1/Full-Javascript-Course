

function counter () {
    setTimeout (() =>{
        console.log("one")
        setTimeout(() =>{
            console.log("two")
            setTimeout(() =>{
                console.log("three")
                setTimeout(() =>{
                    console.log("four")
                    setTimeout(() =>{
                        console.log("five")
                    },1000)
                },200)
            },600)
        },800)
    },1000)
}

counter()