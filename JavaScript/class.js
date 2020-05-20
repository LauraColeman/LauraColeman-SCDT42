class Person {
    
    static personCount = 0;
    
    
    constructor(first, last, age, eye) {
        this.first = first;
        this.last = last;
        this.age = age;
        this.eye = eye;
        Person.personCount = Person.personCount + 1;

    }
    


    fullname()
    {
        return this.first + ' ' + this.last;
        
        
    } 


}

myFather = new Person("John", "Doe", 50, "brown");
myMother = new Person("Jane", "Doe", 51, "blue");
console.log(myFather.first);
console.log(myMother.fullname());
console.log(Person.personCount);


