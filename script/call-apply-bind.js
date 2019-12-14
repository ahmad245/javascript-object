
let ah={
    name:"ah",
    age:33,
    getBirth:function(param){
        let date=new Date().getFullYear();
        console.log(param);
        
      return date-this.age;
    },
    outFn:function(){
           let count=5;
           console.log(this);
           
          return  function inFn(){
                console.log(this);
                
            }
    },
    outFn2:function(){
        let count=5;
        console.log(this);
        
       return   ()=>{
             console.log(this);
             
         }
 }
}

let bassam={
    name:"bassam",
    age:7,
}


//call(this,arg) // execute immediately // erorr bassam.getBirth(); 
ah.getBirth.call(bassam,'kghj')
console.log(ah.getBirth.call(bassam,'kjgh'));


// apply //execute immediately   accept an array if function take un array
ah.getBirth.apply(bassam,['bassam'])
console.log(ah.getBirth.apply(bassam,['bassam']));


// bind // execute later in future this very usefull when we use event listener for pass parameter  addMovie.addEventListener('click', handlerAddMovie); for   addMovie.addEventListener('click', handlerAddMovie.bind(id))  handlerAddMovie(id){}
let executeLater=ah.getBirth.bind(bassam);

console.log(executeLater('later'));
function calc(arr,num,fn){
    arr.push(fn(num));
    console.log(arr);
}

const sumTo2=num=>num+2;
let exe=calc([1,2,3],5,sumTo2.bind(null,2))


// 
ah.outFn()();
ah.outFn2()();








