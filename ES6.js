//ES6
//1]Class->

// A JavaScript class is not an object.

// It is a template for JavaScript objects.

class Car {
  constructor(fname, tyear) {
    this.name = fname;
    this.year = tyear;
  }

  //Function
  Details(){
    console.log(`My Name is ${this.name}. This is the year of ${this.year}.`)
  }
}

const car =new Car("yashwanth",1995);//object1
car.Details();

const car1 = new Car("Lucy",1991);//object2
car1.Details();

//-----------------------------------------------------------------------------------------------------------------------

//Models
//1]export->
//Derived variables
export var n = 'Rainbow'
 
var name = 'Rainbow';
var age = '24';
export {name, age};
 
//Derived constant
export const sqrt = Math.sqrt;
 
//derived function
export function Module(someArg) {
  return someArg;
}

//2]import->
import {Module} from 'Module'; //Structure assignment is used
import {name,age} from 'test';

//---------------------------------------------------------------------------------------------------------------------

//Arrow function->

//Fat Arrow function

//ES5 Regular Function

// var sum = function(){
//     var a = 5;
//     var b = 10;
//     return a + b;
// }
// console.log(sum());

//ES6 Fat Arrow Function

// var sum = ()=>{
//     var a = 5;
//     var b = 10;
//     return a + b; //if more than 1 statements are present inside the function then you should return it.

// }
// console.log(sum());

//-------------------------------------------------------------------------------------------------------------------

//if single statement is present inside the body

// let a = 5;
// let b = 10;
//var sum = ()=>{return a + b}; //here no need to write return or {} braces because only 1 statement is there.

// var sum = ()=>a + b;
// console.log(sum());

//--------------------------------------------------------------------------------------------------------------------

//Refactor above e.g

let a1 = 5;

var sum = (b)=>a1 + b;
console.log(sum(15));

//or we can write like this.

var sum = (a1,b)=>a1 + b;
console.log(sum(15,20));

// Examples of arrow functions
()=>1
v=>v+1;

(a,b) => a+b;

()=> {
    alert("hi");
}
a=>{
    if (a == 0){
        return "zero";
    }
    return a;
}

//---------------------------------------------------------------------------------------------------------------------


//Default Parameters->

//e.g

//ES6

//function multiplication(a,b){//parameters are 2
    //console.log(b) //undefined because we havn't pass any arguments for b.

    // b = (typeof b !== 'undefined') ? b :2;//we can write b like this but this is not an efficient way for multiple parameters/arguments if we are passing.

    // console.log(a*b);
//}

//multiplication(4); //We have passed 1 argument

//output-NAN(Not a Number)

//-----------------------------------------------------------------------------------------------------------

//To tackle above problem

//ES6 1st way--- using Regular function
// function multiplication(a,b=5){

// console.log(a*b);
// }

// multiplication(10);

//ES6 2nd way--- using Arrow function
const multiplication = (a,b=4,c=3)=>{ 

  console.log(`result is ${a*b+c}`)
}
multiplication(10);

const test = (a='a',b='b',c='c')=>{
    return a+b+c
}
 
console.log(test('A','B','C')) //ABC
console.log(test('A','B'))     //ABc
console.log(test('A'))         //Abc

//---------------------------------------------------------------------------------------------------------------------

//Template string->
//Do not use 
var name = 'Your name is ' + first + ' ' + last + '.'
 
//Use template string
var name = `Your name is ${first} ${last}.`

//ES5 Normal string concatination.

let firstname = "yash";
let lastname = "vishnu";
console.log("My name is "+ firstname + "."+ "My last name is " + lastname + ".")

//ES6 using template literals insert the variable value.

let firstname1 = "yash";
let lastname2 = "vishnu";
console.log(`My name is ${firstname1}. My lastname is ${lastname2}`)

//################################################

//3 Insert the Expression in string using Template Literals.

//ES5

let a =20;
let b = 30;

console.log('Fifty is' + (a + b) + 'and\nnot ' + (2 * a + b ) + '.')

//ES6

console.log(`Fifty is ${a + b}. and 
not ${2 * a + b }.`)//hit enter for new line.


//************************************************* ES6-TemplateLiterals(TemplateStrings-)Method **************************

//ES6-String.Method

let fname1 = "Yashwanth";
let lname1 = "vishnu";

console.log(`${fname1}`.startsWith('Y'));//true
console.log(`${fname1}`.endsWith('h')); //true
console.log(`${fname1}`.includes('wan'));//true
console.log(`${fname1}`.includes('thn'));//false
console.log(`${fname1} `.repeat(10));
console.log(`${fname1 } ${lname1}`.repeat(10));

//Now we can refactor above code.

const Refactor = `${fname1} `;
const fullname = `${fname1 } ${lname1}`;

console.log(Refactor. startsWith('Y'));//true
console.log(Refactor. endsWith('h')); //true
console.log(Refactor. includes('wan'));//true
console.log(Refactor. repeat(10));
console.log(fullname. repeat(10));

//---------------------------------------------------------------------------------------------------------------------

//Structure assignment

//1]Structure assignment of Array->
//Array Destructuring 

//ES5

//const myprogmlang = ['js','php','c','python','java']

// var top1 = myprogmlang[0];
// var top2 = myprogmlang[1];
// var top3 = myprogmlang[2];
// var top4 = myprogmlang[3];
// var top5 = myprogmlang[4];

//console.log("My fav programming language is "+top1);

//ES6 we can refactor above program

// let myprogmlang = ['js','php','c','python','java']// "," is used for seperate the variables
// let [top1,top2,top3,top4,top5] =myprogmlang ;

// console.log("My fav programming language is "+myprogmlang);

//console.log(myprogmlang.length);//define length of the array

//---------------------------------------------------------------------------------------------------------------------

//print only the 1st(top1) & last value(top5) of array & skip all the remaing values(top2,top3,top4).

//array values are seperated by "," so we can write like this->
let myprogmlang = ['js','php','c','python','java']// "," is used for seperate the variables
let [top1,,,,top5] =myprogmlang ;

//insert "," in between means i dont want to print (top1,top2,top3)thats why insert ,,,(3 commas)& 1 comma is inserted after 1st value its shows that value is seperated.So there are total 4 commas.

console.log(`My fav program language is ${top1}. & 2nd program language is ${top5}.`);//define length of the array

var num = ["one", "two", "three", "four"];
 
var [one, two, three] = num;
console.log(one); // "one"
console.log(two); // "two"
console.log(three); // "three"
 
//If you want to ignore some values, you can get the values you want as follows
var [first, , , last] = num;
console.log(first); // "one"
console.log(last); // "four"
 
//You can also write like this
var c, d; //Declare variables
 
[c, d] = [1, 2];
console.log(a); // 1
console.log(b); // 2

//you can use structure assignment to exchange the values of two variables.
var p = 1;
var q = 3;
 
[p, q] = [q, p];
console.log(a); // 3
console.log(b); // 1

//2]Structure assignment of objects->
//Object Destructuring

//ES5-We have writing the object like this.

// const bioData = {
//     name:"Nick",
//     age:26,
//     degree:"Doctor"
// }

//console.log(bioData.name);

//ES6 1st way---we can access the name without (bioData.name).

// const bioData = {
//     name:"Nick",
//     age:26,
//     degree:"Doctor"
// }


// let {name,age,degree} = bioData; //variable declared on same line so no need to use () bracket like below.

// console.log(`${name}`);

//ES6 2nd way---we can access the name without (bioData.name).

// const bioData = {
//         name:"NIck",
//         age:26,
//         degree:"Doctor"
//     }

// let name,age,degree; //variabe declared

// ({name,age:myage,degree} = bioData); //if variable is declared seperately use () bracket around the object

// //you can also rename the variable e.g age:myage

// console.log(`${name}`);
// console.log(`${myage}`); //use new variable name here.

//--------------------------------------------------------------------------------------------------------

//Declared object inside the object

const bioData = {
  name:"Nick",
  age:26,
  degree:"Doctor",

  hobby:{

      first : 'playing',
      sec: 'youtube videos'

  }
}

//i want to access sec variable of 2nd object.

let {name,age,degree,hobby} = bioData; //passed hobby here

console.log(`My fav hobby is  ${hobby.sec}`);

const student = {
  name:'Lucy',
  age:'18',
  city:'New york'  
};
 
const {name,age,city} = student;
console.log(name); // "Lucy"
console.log(age); // "18"
console.log(city); // "New york"

//---------------------------------------------------------------------------------------------------------------------

//Spread operator : It expand an array or object.

var arr1 = [0, 1, 2];
var arr2 = [3, 4, 5];
var arr3 = [...arr1, ...arr2];// Appends all the elements in arr2 after arr1 and return
//same as
var arr4 = arr1.concat(arr2);
 

var obj1 = { place: 'bar', x: 4 };
var obj2 = { place: 'baz', y: 3 };
 
var clonedObj = { ...obj1 };
// Cloned object: {place: 'bar', x: 4}
 
var mergedObj = { ...obj1, ...obj2 };
// Merged object: {place: 'baz', x: 4, y: 3}

//---------------------------------------------------------------------------------------------------------------------

//Promise->
var test1 = (a,b)=>{
    return new Promise((reslove,reject)=>{
        //Asynchronous operation
              
        reslove(resoult)//Return correct results
        reject(err)    //Results on error
    });
}

//---------------------------------------------------------------------------------------------------------------------


//Exponential Operator

//ES6

// The Exponentiation operator (***) raises the first operand to the power of the second operand.Exponentiation.Exponentiation

//x**y produces the same result as Math.pow(x,y):

//x+y = expression,x & y is operand, + operator

// let a =5; let b=2;
// console.log(a**b);//(5^2=25)

// let d =4; let f=3;
// console.log(d**f);//(4^3=64)

//e.g

//we can write like this also

console.log(2**3) //8

//or
let x =5;
console.log(x**3) //125

//or
let y = 3;
console.log(2**y);//8

//--------------------------------------------------------------------------------


