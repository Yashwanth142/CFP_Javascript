//ES7    
//includes()
//The includes() function is used to determine whether an array contains a specified value. If it does, it returns true. Otherwise, it returns false.

let arr = ['react', 'angular', 'view'];
 
if (arr.includes('react'))
{
    console.log('react existence');
}

//index operator**

//In ES7, the exponential operator is introduced, and the result is equivalent to Math.pow(..)

console.log(2**10);// Output 1024
console.log(Math.pow(2, 10)) // Output 1024

//ES8

//async/await
async function init() {
    console.log('start')
    await this.testSync()
    console.log('End')
  }
  this.init()
  async function testSync() {
    const response = await new Promise(resolve => {
      setTimeout(() => {
          resolve("async await test");
        }, 1000);
    });
    console.log(response);
  }

// Object.keys()

var obj = { foo: "bar", baz: 42 };
let b = Object.keys(obj)

console.log(b);//output- ["foo", "baz"]

//Object.values()

var obj = { foo: "bar", baz: 42 };
let a = Object.values(obj)
console.log(a);//output -  ["bar", 42]

//Object.entries()

var obj = { foo: 'bar', baz: 42 };
let by = Object.entries(obj)
console.log(by);//output - // [ ["foo", "bar"], ["baz", 42] ]

//Object.getOwnPropertyDescriptors()

// The Object.getOwnPropertyDescriptor method returns an object (descriptor). ES6 introduces the Object.getOwnPropertyDescriptors method, which returns the description object of all its own properties (non inherited properties) of the specified object.

const obj = {
    foo: 123,
    get bar() { return 'abc' }
  };
   
  let by1 = Object.getOwnPropertyDescriptors(obj)

  console.log(by1);

// Atomics objects

// The Atomics object provides a set of static methods for atomic manipulation of the SharedArrayBuffer object.

// These atomic operations belong to the Atomics module. Unlike general global objects, Atomics is not a constructor, so it cannot be called with the new operator or directly as a function. All properties and methods of Atomics are static (like the Math object).

// Multiple threads sharing memory can read and write data at the same location at the same time. Atomic operation ensures that the value of the data being read or written meets the expectation, that is, the next atomic operation will not start until the end of the previous atomic operation, and its operation process will not be interrupted.

Atomics.add()
//Adds an array element at the specified location to the given value and returns the value of the element before it is added.
 
 
Atomics.and()
//Compares the array element at the specified location with the given value, and returns the value of the element before the operation.
 
 
Atomics.compareExchange()
//If the element specified in the array is equal to the given value, it is updated to the new value and the original value of the element is returned.
 
 
Atomics.exchange()
//Updates the element specified in the array to the given value and returns the value before the element is updated.
 
 
Atomics.load()
//Returns the value of the specified element in the array.
 
 
Atomics.or()
//Compares the array element at the specified location with the given value, and returns the value of the element before the or operation.
 
 
Atomics.store()
//Sets the element specified in the array to the given value and returns the value.
 
 
Atomics.sub()
//Subtracts an array element at the specified location from the given value and returns the value of the element before subtraction.
 
 
Atomics.xor()
//The array element at the specified location is different from the given value or, and the value of the element before the exclusive or operation is returned.
 
//The wait() and wake() methods use the futexes model on Linux (fast user space mutex,
//Fast user space mutex), which allows processes to wait until a specific condition is true, is mainly used to implement blocking.
 
Atomics.wait()
//Checks whether the value at a specified location in the array is still the given value, and if it is, holds until it wakes up or times out.
//The return value is "ok", "not equal" or "time out". When called, an exception is thrown if the current thread does not allow blocking
//Most browsers do not allow wait() to be called in the main thread.
 
 
Atomics.wake()
//Wakes up the thread in the waiting queue waiting on the element at the specified position in the array. The return value is the number of threads successfully woken.
 
 
Atomics.isLockFree(size)
//It can be used to detect whether the current system supports hardware level atomic operation. For arrays of a specified size, if the current system supports hardware level atomic operations,
//Returns true; otherwise, it means that for the array, each atomic operation in the Atomics obje