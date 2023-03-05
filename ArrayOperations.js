//************************************************ Array Operations **********************************************/

//Array.pop()

const fruit = ["Banana", "Orange", "Apple"]; //delete last element(LIFO)
fruit.pop();

//console.log(fruits);

//-----------------------------------------------------------------------------------------------------------------


//Array.push()

const fruits = ["Banana", "Orange", "Mango","Apple"]; //Insert element
fruits.push("Kiwi");

//console.log(fruitssssss);

//-----------------------------------------------------------------------------------------------------------------


//Array shift() ->removes the first array element and "shifts" all other elements to a lower index.

const sh = ["Banana", "Orange", "Apple", "Mango"];
sh.shift();

console.log(sh);

//-----------------------------------------------------------------------------------------------------------------

//Array unshift()->adds a new element to an array (at the beginning), and "unshifts" older elements:

const uns = ["Banana", "Orange", "Apple", "Mango"];
uns.unshift("Lemon");

console.log(uns);
//-----------------------------------------------------------------------------------------------------------------

//Array length

// const pa = ["Banana", "Orange", "Apple", "Mango"];

// console.log(pa.length);

//-----------------------------------------------------------------------------------------------------------------

//Array delete()

const d = ["Banana", "Orange", "Apple", "Mango"];
delete d[0];

console.log(d);

//-----------------------------------------------------------------------------------------------------------------

//Merging (Concatenating) Arrays

const array1 = ["Cecilie", "Lucy"];
const array2 = ["Emily", "Tony", "Jhon"];
const array3 = ["Robin", "May"];

const Children = array1.concat(array2, array3); 
console.log(Children);

//-----------------------------------------------------------------------------------------------------------------

//Array splice()

const fruitee = ["Banana", "Orange", "Apple", "Mango"];
fruitee.splice(2, 2, "Lemon", "Kiwi");
//1st parameter defines position,2nd parameter defines how many elements shoud be removed, The rest of the parameters define the new elements to be added.

console.log(fruitee);

//-----------------------------------------------------------------------------------------------------------------

//Using splice() to Remove Elements

const remv = ["Banana", "Orange", "Apple", "Mango"];
kap.splice(1, 2);//(1) defines the position & (2) defines how many elements should be removed.

console.log(remv);

//-----------------------------------------------------------------------------------------------------------------
//Array slice()

// The slice() method creates a new array.

// The slice() method does not remove any elements from the source array.

const L = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const c = L.slice(1);

console.log(c);

//-----------------------------------------------------------------------------------------------------------------

//slice() method can take two arguments like slice(1, 3).

const craft = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const s = craft.slice(1, 3);
console.log(s);

//-----------------------------------------------------------------------------------------------------------------

//Array sort()

const sorting = ["Banana", "Orange", "Apple", "Mango"];
let sort = sorting.sort();

console.log(sort);

//-----------------------------------------------------------------------------------------------------------------

//Array reverse()

const logical = ["Banana", "Orange", "Apple", "Mango"];

let rev = logical.reverse();

console.log(rev);


//-----------------------------------------------------------------------------------------------------------------

//Array split()


//The split() method splits a string into an array of substrings.

// The split() method returns the new array.

// The split() method does not change the original string.

// If (" ") is used as separator, the string is split between words.


let text = "How are you doing today?";

// const mArray = text.split(" ");
// console.log(mArray);

// //string.split(separator, limit)
// const myArray = text.split(" " ,4); //output-> How, are ,you ,doing
// let word = myArray[1];

// console.log(myArray);
// console.log(word);

const myArray2 = text.split("o");
console.log(myArray2);                //output-[ 'H', 'w are y', 'u d', 'ing t', 'day?' ]


//-----------------------------------------------------------------------------------------------------------------

//Array valueOf()

// The valueOf() method returns the array itself.

// The valueOf() method does not change the original array.

const arr = ["Banana", "Orange", "Apple", "Mango"];
const myArray = arr.valueOf();
console.log(myArray); //["Banana", "Orange", "Apple", "Mango"];


//-----------------------------------------------------------------------------------------------------------------

//Array forEach Loop()

let sum = 0;
const numbers = [65, 44, 12, 4];
numbers.forEach(myFunction);

function myFunction(item) {
  sum += item;
  console.log(sum);
}