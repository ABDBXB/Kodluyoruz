//String

const Name= "11";
//object literal 
const araba ={
    //Property 
    model: "Reno",
    lenght: 5.3,
    driving: false,
    wheelcount:4,
    drive: function(){
        this.drive=true;
        console.log("I drive",this.drive);
    },
    otherspec:{
        year:2016,
    },
};

console.log("Model: " , araba.model);
araba.model = "Mar";
console.log("Model: " , araba.model);

//----------------------

araba.drive();

console.log(araba.otherspec);
console.log(araba["otherspec"]);


console.log(araba?.model);

console.log(araba.color); // undefined
//console.log(araba.lights.light1); // Error
console.log(araba?.lights?.light1);

