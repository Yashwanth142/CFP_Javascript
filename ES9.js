//ES9
//ES9-asynchronous iterator.js

// ES9 introduces asynchronous iterators, just like regular iterators, except that the next() method returns a Promise. 
//Therefore, await can be used with the for...of loop to run asynchronous operations in a serial manner. For example:

async function process(array) {
  for await (let i of array) {
    doSomething(i);
  }
}

//Promise.finally()

// A Promise call chain either successfully reaches the last. then(), or fails to trigger. catch(). 
//In some cases, you want to run the same code no matter whether Promise runs successfully or fails, such as clearing, deleting conversations, closing database connections, etc.

function doSomething() {
  doSomething1()
  .then(doSomething2)
  .then(doSomething3)
  .catch(err => {
    console.log(err);
  })
  .finally(() => {
    // finish here!
  });
}

//object expansion operator

let a = [1,2,3];
let b = [0, ...a, 4]; // [0,1,2,3,4]
 
let obj = { a: 1, b: 2 };
let obj2 = { ...obj, c: 3 }; // { a:1, b:2, c:3 }
let obj3 = { ...obj, a: 3 }; // { a:3, b:2 }
let object = {
  a: '01', b: '02'
};
 
let newObject = {
  c: '03',
  ...object
};
 
console.log(newObject); //{c: "03", a: "01", b: "02"}

//ES9-regular Expression Named Capture Group

const
  reDate = /(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})/,
  match  = reDate.exec('2018-04-30'),
  year   = match.groups.year,  // 2018
  month  = match.groups.month, // 04
  day    = match.groups.day;   // 30
 
// const
//   reDate = /(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})/,
//   d      = '2018-04-30',
//   usDate = d.replace(reDate, '$<month>-$<day>-$<year>');