//diff between Regular function & Arrow Function

//1]Syntax & e.g.

//a)Regular Function--)

let x = function function_name(parameters){
   // body of the function
};

//function test(){}

//Example

 let sqr = function(x){
      return (x*x);
    };
    console.log(sqr(9));

//b)Arrow Function--)

let y = (parameters) => {
    // body of the function
};

//Example

var sqar = (x) => {
        return (x*x);
    };
    console.log(sqar(9));

//------------------------------------------------------------------------------------------------

//2]this keyword->Unlike regular functions,arrow functions do not have their own this keyword. 

    let user = {//object
        name: "Vishnu",
        RFP:() => {
            console.log("hello " + this.name); //'this' keyword is not working(Regular Function)
        },
        CFP(){   
            console.log("Welcome to " + this.name); // 'this'keyword is working(Arrow Function)
        }
    };
    user.RFP();
    user.CFP();
//Output: 
// hello undefined
// Welcome to Vishnu

//---------------------------------------------------------------------------------------------------

//3]Availability of arguments objects:-Arguments objects are available in regular but are not available in arrow functions.Example

let user1 = {   //object
    show(){
        console.log(arguments);
    }
};
user1.show(5, 4, 3); //output-[Arguments] {'0':5 , '1':4 ,'2':3}

let user2 = {   //object
    show1 : () => {
    console.log(arguments);
}
};
user2.show1(1, 2, 3); //output-Reference error argument is not defined

//----------------------------------------------------------------------------------------------------

//4]Using new keyword:-regular functions are constructible & callable, they can be called using the ‘new’ keyword. However,
// the arrow functions are only ‘callable’ and not constructible so they cant called using the "new" keyword.

let x1 = function(){
    console.log(arguments);
    };
    var y1= new x1(1,2,3);

let x2 = ()=> {
    console.log(arguments);
    };
    new x2(1,2,3);   //Output-TypeError-> x2 is not a constructor.