// objects

let students = [{
    name : "abdishakuur",
    class : "CA219",
    Address : {
        district : 'Warta nabada',
        street : "wadada hurwaa",
        home : "Guriga 5"
    },
    // array
    hobies :[
    "footbal","watching movies","icecream"
    ],
    // functions
    Age : function(){
        console.log("22")
    }

},
{
     name : "john Doa",
     class : "Ca219",
     Address :{
        district : "waabari",
        street : "somalia"
     },
        // array
    hobies :[
        "footbal","watching movies","icecream"
        ],
        // functions
        Age : function(){
            console.log("22")
        }
    
},
{
    name : "john Do",
    class : "Ca219",
    Address :{
       district : "waabari",
       street : "somalia"
    },
       // array
   hobies :[
       "footbal","watching movies","icecream"
       ],
       // functions
       Age : function(){
           console.log("22")
       }
   
}

]

// console.log(student[1].magac);
// console.log(student[0].Age);


// foreach method loogu talagalay inuu kudul wareego
students.forEach((student) =>{

    // concationatin
    console.log(`name :  ${student.name} \n class :   ${student.class} \n hobbies :  ${student.hobies} Address : ${student.Address.district}`)
})
