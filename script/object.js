const userChosenKey='level';

let person = {
    name: 'ahmad',               //string
    age: 33,                    //number
    hobbies: ['read', 'gym'],   //array
    greet: function () {        //function  
        
        console.log(this);
        
        console.log('hi there!');
    },
    otherFunciont:()=>{ console.log(this);},
    shorthand(){
        console.log(this);
        
    },
    "is Mared": true,             // key with space
    1: 'hi',                      //key is number
    1.5: 'hi1.5',
    [userChosenKey]:5     ,// key is 1.5 person['1.5']
    get title(){return this._title},// person.title
    set title(value){this._title=value} // person.title='dfg'          
}

//access property
person.name;
person['is Mared'];
person['hobbies'];
let ageAhmad=33;
person[ageAhmad];
person.greet();
person.level;

//add
person.isAdmin = true;

//modify
person.age = 99;

//delete
person.age = undefined // this mains the person does have not thes property 
person.age = null // person have this property but not yet has value
delete person.age;

//spread object 
let personSpread={...person};

//check
 if('name' in person){
     console.log(true);
     
 }

 if(person.name!==undefined){
    console.log(true);
    
}


// this 
person.greet(); //function
person.otherFunciont(); // arrow function 
person.shorthand();