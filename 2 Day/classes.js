class person {
    constructor(){
        this.FirstName= "abd";
        this.LastName="basaleh";
    }
}
class person1 {
    constructor(firstname,lastname){
        this.FirstName= firstname;
        this.LastName=lastname;
    }
}
const kisi = new person();
kisi.FirstName="abd";
kisi.LastName="BxB"
console.log(kisi.LastName);
const kisi1 = new person1("BxB","abd");
console.log(kisi1.LastName);