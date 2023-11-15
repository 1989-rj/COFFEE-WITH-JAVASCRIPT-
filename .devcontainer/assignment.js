//q1

let number = 5;
let string = "5";

// Using loose equality (==)
console.log(number == string); // true

// Using strict equality (===)
console.log(number === string); // false


//if you're comparing a number like 5 and a string like "5", JS will try to convert the string into a number so it can compare them
//In this case it turns the string "5" into the number 5 and if we do normal comparison using this operator "==" it will give the ouput as true
//if we do strict  comparison which can be done  usinf this operator "===" it will give the ouput as false


//q2
//primitive data type: it directly stores in the memory 
//Numbers:it represent numeric values Example: let num = 42
//Strings: it epresent sequences of characters Example: let str = "Hello World!"
//Booleans:it  represent true or false values Example: let isTrue = true

//number
let nume=19
console.log(nume)
//strings
let word="hello world";
console.log(word);//"hello world"
//boolean
let age = 54;
let isAdult = age >= 18;

console.log(isAdult)




//non primitive data type:
//object: Objects are used to store and structure data in a way that allows for the organization of related information
//example :

let person = {
    name: "Rutuj",
    age: 19,
    isStudent: true
  };
  
  console.log(person.name); // "Rutuj"
  console.log(person["age"]); // 19

//#behaviour in memory

//Primitive data types are stored directly in memory,
//They are allocated a fixed amount of space in memory, which is determined by the type of the primitive

//Non-primitive types are stored as references in memory,
//The variable holds a reference (memory address) pointing to the location where the actual data is stored
  
  



//q3
// Primitive Data Types
let num = 42;
let str = "Hello, World!";
let bool = true;
let nul = null;
let undef;
let symb = Symbol("symbol");

console.log(typeof num);   // Output: number
console.log(typeof str);   // Output: string
console.log(typeof bool);  // Output: boolean
console.log(typeof nul);   // Output: object 
console.log(typeof undef); // Output: undefined
console.log(typeof symb);  // Output: symbol

// Non-Primitive Data Type (Object)
let obj = { key: "value" };
console.log(typeof obj);   // Output: object

// Non-Primitive Data Type (Array)
let arr = [1, 2, 3];
console.log(typeof arr);   // Output: object

// Non-Primitive Data Type (Function)
let func = function() {};
console.log(typeof func);  // Output: function







//q4
// prefix:in this case operator comes before the variable//++x
//postfix:in this case operator comes after the variable//x++


//example for prefix
//let x=6;
//let y=++x;
//as we can see the output
//console.log(x)//7
//console.log(y)//7
//operator comes before the variable because of which first increment will occur then value will be printed

//example for postfix
let x=6;
let y=x++;
console.log(x)
console.log(y)

//operator comes after the variable because of which first value x is printed then increment will happen if we print this agasin then output will be incremented









//q5

//In simple words, being "weakly typed" in JavaScript means that the data type of a variable can change without telling the prograsm to that
variable="hello world"
console.log(variable)//hello world
//now its a string and the output is hello world






