// concatenate method it gives add the two arrays
// splice method it gives add or remove the array elements
// push method it gives add the array elements at the end of the array
// pop method it gives remove the last element of the array
// shift method it gives remove the first element of the array
// delete method it gives remove the specified element of the array
// indexOf method it gives the index of the specified element of the array
// lastIndexOf method it gives the last index of the specified element of the array
// sort method it gives sort the array elements in ascending order
// reverse method it gives sort the array elements in descending order
// objects in javascript gives key and values at the curly braces
// array a list of multiple values
// if else gives an output of true or false
// nested if it inside the if statement
//loops iterates every line of code 
// while loop it executes when the conditions is true
// for loops executes when we rach the range
// nested loops inside the loops  called it inner loops
// function BASIC function the uses of syntax
// writing a function: function functionName()
// arrow function to use this we need declared it in to variables then call it the variables function()
//forEach it print out each items in the array using the arrow function
//spread function this has three dots for referencing a variables name
//rest parameter ... inside the function 
// return in arrow function this is cannot type or called the word function
//class is a blueprint of an object
//constructor store the parameter
//properties we it declared using THIS
//method were we call and is like a function
//object were the value stored
//split() this will concert the srting to array but i depend on the parenthesis
//concat() this will combined the two string in one word
// join() this will convert the array to string 


// let myWork = [];
// let valueStatus;
// let lesson;
// for(let items = 0; items < 11; items++){
//     valueStatus = ( items % 2 == 0) ? "true": "false";
//     lesson = {
//         name: "Lesson " + items, status: valueStatus
//     }
//     myWork.push(lesson)
    
// }
// console.log(myWork)

// let arrayName = ["erwin", "Angel", "Apey", "dok","budang"]

// for(let names = 0; names < arrayName.length; names++){
 
//     if(arrayName[names].startsWith("d")){
//         delete arrayName[names];
//         continue;
//     }
//     arrayName[names] = "hi " + arrayName[names];
// };
// console.log(arrayName)

// let listItem = {
//     cpu: "Ryzen 5000",
//     ram: "ddr5",
//     motherboard: "Mobo"
// };
// for (let names in listItem){
//     console.log(names, ":", listItem[names])
// }


// let arrayList = ["amzing", "brilliant", "calm", "creative", "delightful"]
// function nameUser(){
//     user = prompt("Enter your name: ");
//     rand = arrayList[Math.floor(Math.random() * arrayList.length)]

//     console.log(user + " is " + rand)
// };
// nameUser()


// let functionName = function(a, b){
//     return a + b;
// };
//     let num1 = Number(prompt("Enter first number: "));
//     let num2 = Number(prompt("Enter second number: "));
// console.log(functionName(num1, num2));
// let num1 = 20;
// let num2 = 12;

// function calcuFunction(numOne, numTwo, operator){
//     if(operator === "+"){
//         return numOne + numTwo;
//     }
//     else if (operator === "-"){
//         return numOne - numTwo
//     }
//     else{
//         return "Invalid operator"
//     }
// };
// console.log(calcuFunction(num1, num2, "+"));
// console.log(calcuFunction(num1, num2, "-"));
//let arrayName = ["erwin", "apey", "angel"]
// arrayName.forEach(e => console.log(e))


//exercise
// let ansArray = [];
// for (let number = 0; number < 10; number++){
//     let count = number + 5;
//     ansArray.push(calcuFunction(number, count));
// };
//  console.log(ansArray)


// function calcuFunction(value1, value2){
//         return value1 *  value2;
//     };
// let noReturn = (x, y) => x + y;
// console.log(noReturn(3,4)) //this arrow function doesn't give a return word compared to the function 
// let arrowF = (x, b) => console.log(x + b);
// arrowF(4,5);

// function doOutter(number){
//     console.log("this outer and first execute");
//     function doInner(x){
//         console.log(x + 5)
//         console.log("i can access the inner variables", number)
//     }
//     doInner(number);
// }
// doOutter(5);

// Function Callbacks
// let anoFuntions = function(){
//     console.log("this anonymous");
// }; 
// let secondFunction = function(){
//     console.log("secret function")
// };
// function hiddenFunction(tryrun, oneTry){
//     console.log("this is hidden function")
//     tryrun();
//     oneTry();
// }
// hiddenFunction(secondFunction, anoFuntions);

//class this is the blueprint

// class Person {
//     constructor(name, age , yearLevel){
//         this.name = name;
//         this.age = age;
//         this.yearLevel = yearLevel
//     }
//     college(){
//         console.log(this.name, " is a ", this.yearLevel)
//     }
//     birthday(day){
//         this.age =+ day
//         console.log("next year he is ", this.age, " years old.")
//     }
// }
// class Student extends Person{
//     constructor(name, age, yearLevel, course){
//         super(name, age , yearLevel)
//         this.course = course
//     }
//     isStudent(){
//         console.log(this.name, "is a college student of Dct")
//     }
// }
// let student = new Student("erwin", 24, "third year")
// student.birthday(24);
// student.college();
// student.isStudent();
// let currentDate = new Date(1000);
// console.log(currentDate)

