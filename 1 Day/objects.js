//object literal
//.Create an Object:
console.log("----------------Create an Object----------------");
    const Person = {
        //Properties
        Name : "Abdulrahman Basaleh",
        Height : parseFloat("1.80"),
        Gender : true, // 0=>Male / 1=>Female
        Age : 35,
        //.Function Take Variable From Hem self With (this.Variable);
        IsHeYoung : function(){
            if (this.Age < 40){console.log("Yes He Is");} 
        },
        //.Function Take Variable From User
        WGender: function(object){          //what is person's gender
            if (object.Gender == false) {
                console.log(object.Name,"is Male");
            }else{console.log(object.Name,"is feMale");}
        },
        FirstChild : {
            ChildName : "Hamza"
        },
    };
    console.log("-------------------Created.✔-------------------");
//==================================END=========================================//
//Use Initialized Object:
    console.log("\n----------------Use Initialized Object.----------------");
    //.Print Object In Console:
    console.log(Person.Name,"'s First Child Name Is : ",Person.FirstChild.ChildName);
    //.Change Object Value And Property Access:
    Person.Age=25;
    console.log(Person.Age);
    console.log(Person["Age"]);
    //.Run Function:
    Person.IsHeYoung();
    //.Create New Person And Change Same Value:
    const Abdulrahman =  Person;
    Abdulrahman.Gender=false;
    //.Run Function With Parameter :
    Person.WGender(Abdulrahman);
    //.Print All Object Properties:
    console.log("Person Properties:")
    let array = Object.getOwnPropertyNames(Person);
    for (let i = 0; i < array.length; i++) {
        console.log(i,"-)",array[i]);
        
    }
    //console.log(Object.getOwnPropertyNames(Person));
//==================================END=========================================//
//Some Important Note
    // Optional Propery Access -> ?.
    console.log(Person.Region); // undefined
    //console.log(Person.Region.Region1); // Error
    console.log(Person?.Region?.Region1); // undefined

    // Ternary Operator x ? y : z
    console.log(
        Person.Gender == false
        ? "Male"
        :"Female"
    );
    // Delete Property:
    delete Person.Age;
    console.log(Person.Age);


