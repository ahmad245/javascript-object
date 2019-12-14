let object={name:'ah',hobbies:['read']};

// using spread copy the object but hobbies array is still reference in memory 
// spread not deep for array in object 

let objectSpread={...object};

let objectSpreadAndModif={...object,hobbies:[...object.hobbies],name:'ahmadAlmasri'}

// using assign
let objectAssign=Object.assign({},object);

// object destructuring
let {name:nameAhmad,...otherProperty}=object




