//************************************ Async ************************************

//There’s a special syntax to work with promises in a more comfortable fashion, called “async/await”. 

//async keyword is placed before a function.

//The word “async” before a function means function always returns a promise. Other values are wrapped in a resolved promise automatically.

//e.g.->1)
async function f() {
    return "Hello";
  }

//e.g.->2)

  async function f() {
    return 1;
  }
  
  f().then(alert); // output=1

  //e.g.->3)

  async function f() {
    return Promise.resolve(1);
  }
  
  f().then(alert); // output=1

  //e.g->4)
  function Display(val){
    console.log(val);
  }
  async function f() {
    return "Hello";
  }
  f().then(
    function(value) {Display(value);},
    function(error) {Display(error);}
  );
  //or if you only want resolve and not error
  function Display(val){
    console.log(val);
  }
  
  async function f() {
    return "Hello";
  }
  f().then(
    function(value) {Display(value);}
  );


//**************************************** Await ****************************************

//The keyword await makes JavaScript wait until that promise settles and returns its result.

async function f() {

    let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve("done!"), 1000)
    });
  
    let result = await promise; // wait until the promise resolves (*)
  
    alert(result); // "done!"
  }
  
  f();