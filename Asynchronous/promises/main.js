//  Author : A.shakour mohammed 

// Promises labo prameter ayu qaata 

//  Succes \\ Error

let condition = false;


const testPromises = new Promise( (resolve,reject) =>{

    if(condition){
        resolve("promise is  succes")
    }else{
        reject(" siuuuuuuuuuuuuuu failure")
    }
} )
// .then waxa laisticmala succes massage

testPromises.then((successMessage) =>{
    console.log(successMessage)
    // .cath waxa lasiticmala error inu soosaro
}).catch((error) => {
    console.log(error);
})


