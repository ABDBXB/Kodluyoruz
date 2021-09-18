//Primitive Types:
console.log("----------------Primitive Types----------------");
//.Numbers:
    let a=5;let b=parseFloat("5.44");
    console.log("Nubers A: ",a," B: ",b);
//.Strings:
    let Name = "Abdulrahman";
    console.log("Hey My Name is: ",Name);
//.Boolean:
    let GateStatus = true;
    console.log("Gate Status is:" , GateStatus);
    GateStatus = false;
    console.log("Gate Status is:" , GateStatus,"Now");
//.Null:
    let Variable= null;
    console.log(Variable);
//.Undefined:
    let UnVariable= undefined;
    console.log(UnVariable); // Java Script undefined değişkenleri kullanıyor / undefined kullanmak tercih edilmiyor
//===========================================================================

//Typof:
    console.log("----------------Typeof----------------");
    console.log(typeof a,typeof b);
    console.log(typeof GateStatus);
    console.log(typeof Variable);
    console.log(typeof UnVariable);

//===========================================================================
//javascript operators
console.log("----------------javascript operators----------------");
//. = Operator
    let Num = 5;
    Num = " Type : String";
    console.log("= Operator : ",typeof Num);
    Num = 123;
    console.log("= Operator : ",typeof Num);
//. ++ Operator
    Num++;
    console.log("++ Operator : ",Num);
//. -- Operator
    Num--;
    console.log("-- Operator : ",Num);
//. +=/-= Operator
    FirstNumber=77;
    Num+=FirstNumber; // Num = Num + FirstNumber
    console.log("+= Operator : ",Num);