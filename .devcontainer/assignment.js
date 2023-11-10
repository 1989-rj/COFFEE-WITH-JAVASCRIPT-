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

