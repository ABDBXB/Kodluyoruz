// Array Literal []
let array = [1, 2, 3];





// Iterating arrays

array.forEach((element,index) => {
    console.log(`Element : ${element}, index of it : ${index} `)    
});

const sum = array.reduce((a,c)=>{
    return a+c;
},0);
console.log(sum)


// Reading, writing and deleting elements
// Array Methods