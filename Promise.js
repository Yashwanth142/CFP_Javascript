//**************************************** Callback ****************************************
//Callback->A callback is function passed as an argument to another function.

//A callback is function that is to be executed after another function has finished executing.hence the name callback.
//Multiple callback functions would create callback hell that leads to unmanageable code. 
//Also it is not easy for any user to handle multiple callbacks at the same time.

let test = (callback)=>{
    console.log("Hello");
    callback();
}

let testOne = ()=>{
    console.log("My name is yashwanth");
}

test(testOne);

//Callback for Anonymous function->

let testnew = (callback)=>{
    console.log("Little");
    callback();
}

testnew(()=>{
    console.log("Anonymous Function is primted.")
})
//e.g-3
function Display(some){
    console.log(some);
}
function First() {
    Display("Hello");
  }
  
  function Second() {
    Display("Goodbye");
  }
  
  First();
  Second();
//4
  function sum(num1, num2) {
    let sum = num1 + num2;
    Display(sum);
  }
  
  sum(5, 5);
//5
function Display(some){
    console.log(some);
}
  
  function sum(num1, num2, myCallback) {
    let sum = num1 + num2;
    myCallback(sum);
  }
  
  sum(5, 5, Display);

//In the above example whole anonymous function is passed as an argument inside the function call i.e testnew().

//Callback hell->
//when we  have nest multiple callbacks within a function is called a callback hell.
//e.g-

firstFunction(args, function() {
    secondFunction(args, function() {
      thirdFunction(args, function() {
        // And so on…
      });
    });
  });

//callback hell can be avoided using Promises and async.

//**************************************** Promise ****************************************
// Promises-> are used to handle asynchronous operations in JavaScript. They are easy to manage when dealing with
// multiple asynchronous operations where callbacks can create callback hell leading to unmanageable code.
// Promise Syntax
let Promise = new Promise(function(resolve, reject) {    
    // Make an asynchronous call and either resolve or reject
});


//A Promise executor should call only one resolve or one reject.
//only the first one to resolve will be called and the rest will be ignored.
let promise = new Promise(function(resolve, reject) {
    resolve("resolved");
  
    reject(new Error('ignored')); // ignored
    resolve("Ignored?"); // ignored
  });

 // If you are interested only in successful outcomes, you can just pass one argument to it
  promise.then(
    (result) => { 
        console.log(result);
    }
  );

 // If you are interested only in the error outcome, you can pass null for the first argument, like this
  promise.then(
    null,
    (error) => { 
        console.log(error)
    }
  );

//The .then() method should be called on the promise object to handle a result (resolve) and .catch() to handle an error (reject).
  let promise1 = new Promise(function(resolve, reject) {
    let flag=true;
    if(flag)
    {
        resolve("resolve");
    }else{
        reject("reject");
    }

  });

promise1()

.then(result => {
    console.log('after resolve---->',result);
}).catch(error => {
    console.log('after reject --->', error);
});

