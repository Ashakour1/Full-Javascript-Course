// Callback Functions

// example one
function shouldPrintFirst (Cl) {
    setTimeout(()=>{
        console.log("first")
        Cl();
    },1000)
}


function shouldPrintSecond () {
    console.log('second');
}


shouldPrintFirst (shouldPrintSecond);


// example two

function sumUpNumbers (num1,num2,Callback){

    let sMNumbers;
    setTimeout( () => {
        
       sMNumbers = num1 + num2;
       Callback(sMNumbers);
    },1000);
    
}

function printResult (value){
    console.log(`the Result it is ${value}`);

}

sumUpNumbers(20,40,printResult);