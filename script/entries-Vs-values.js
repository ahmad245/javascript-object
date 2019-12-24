 let  obj = { 0: '23', 1: 'geeksforgeeks', 2: 'true' };
       console.log(Object.values(object));
       console.log(Object.entries(object));

// Array ["23", "geeksforgeeks", "true"]
  //      Array [["0", "23"],  ["1", "geeksforgeeks"],["2", "true"]]

 // Object.entries() method in JavaScript returns an array consisting of enumerable property [key, value] pairs of the object which are passed as the parameter whereas
 // Object.values() method in JavaScript returns an array whose elements are the enumerable property values found on the object. Follow the example below for better understanding of the differences between these two functions.