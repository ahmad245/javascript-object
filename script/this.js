
let ah2={
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

// 
ah2.outFn()();
ah2.outFn2()();
