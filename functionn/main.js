//  Author : A.shakour mohammed 

// function definition / function declaration
function square(num){
    return num + num ;
}
// function calling
console.log( "siuuuu " ,square(12));

// function expression

const esquare = function(nun){
    return nun * nun ;
}

console.log(esquare(14))

// Arrow function
const asquare = (Nam) => {
    return Nam * Nam ;
}
console.log(asquare (2))


// 
const add = (edd,odd) =>  edd * odd ;

console.log(add(2,4))


let result = 1
for(let i = 0 ; i <= 5 ; i++){
    result = result * 3
}
console.log(result)

// function * power
const power = (base , exponent) => {
    let result2 = 1;
    for(let i = 0 ; i < exponent ; i++){
        result2 = result2 * base
    }
    return result2 ;
}
console.log(power(2,10))