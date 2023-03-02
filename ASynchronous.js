//Synchronous means the code runs in a particular sequence of instructions given in the program

console.log("hi");
console.log("hello");
console.log("how are you?");
//output-hi
//hello
//how are you?

//Asynchronous code execution allows to execution of the upcoming instructions immediately

console.log("hi");

setTimeout(function(){
console.log("hello");},5000
)

console.log("how are you?");
//output-hi
//how are you?
//hello
//Because of asynchronous programming we can avoid the blocking of tasks due to the previous instructions