//object literal:
//.Create an Object
console.log("----------------Create an Object----------------");
    const Person = {
        Name : "Abdulrahman Basaleh",
        Height : parseFloat("1.80"),
        Gender : false, // 0=>Male / 1=>Female
        Age : 35,
        //.Function Take Variable From Hem self Whith (this.Variable);
        IsHeYoung : function(){
            if (this.Age < 40){console.log("Yes He Is");} 
        },
        //.Function Take Variable From User
        WGender: function(object){          //what is person's gender
            if (object.Gender == false) {
                console.log(object.Name,"is Male");
            }else{console.log(object.Name,"is feMale");}
        },
        FistChild : {
            ChildName : "Hamza"
        },
    };
    console.log("-------------------Created.✔-------------------");
//==================================END=========================================//
//Use Initialized Object.
    console.log("\n----------------Use Initialized Object.----------------");
    //.Print Object In Console:
    console.log(Person.Name,"'s First Child Name Is : ",Person.FistChild.ChildName);
    //.Change Object Value:
    Person.Age=25;
    console.log(Person.Age);
    //.Run Function:
    Person.IsHeYoung();

    const Abdulrahman =  Person;
    Abdulrahman.Gender=true;
    Person.WGender(Abdulrahman);

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
console.log("Car Properties:")
let array  = Object.getOwnPropertyNames(araba);
for (let i = 0; i < array.length; i++) {
    console.log(i,"-)",array[i]);
    
}
//console.log(Object.getOwnPropertyNames(araba));



console.log(araba?.model);

console.log(araba.color); // undefined
//console.log(araba.lights.light1); // Error
console.log(araba?.lights?.light1);

