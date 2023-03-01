//Difference between let, var & const

//1]SCOPE

var string = "hey hi";  //globally scoped(var variable is declared outside a function.)
    
    function vartest() {
        var hello = "hello"; //function scoped(var is declared within a function.)
        {//block scope
            var hi="Hi";
            console.log(hi);//output- Hi
        }

    }

    console.log(string); //output-hey hi
    console.log(hello);   //Reference error-hello is not defined.
    
//let
let string= "hello";//globally scoped

    function lettest(){//function scoped
        let hello="hello";
        console.log(hello);//output-hello
        {//block scoped
            let hi="Hi";
            console.log(hi);//output-Hi
        }
    }

    console.log(string); //output-hello

//const
const string ="hello";//globally scoped

    function consttest(){//function scoped
        const hello="hello";
        console.log(hello);//hello
        {//block scoped
            const hi="Hi";
            console.log(hi);//output-Hi
        }
    }
//-----------------------------------------------------------------------------------------

//2]var variables can be re-declared and updated.

    var s = "hey hi";
    var s = "say Hello instead";//(1st way to redeclared)

    var s = "hey hi";
    s = "say Hello instead";//(2nd way to redeclared)

//let can be reassign but cannot be redeclared
    let s = "hey hi";
    let s = "say Hello instead";//error: Identifier 's' has already been declared.

    let s = "hey hi";
    s = "say Hello instead";//can re assign the value
// but can be declared
    let s = "say Hi"; //global scope
    if (true) {
        let s = "say Hello instead";
        console.log(s); // "say Hello instead" 
    }
    console.log(s); // "say Hi"

//const cannot be reassign and cannot be redeclared
    const s = "hey hi";
    const s = "say Hello instead";//error: Identifier 's' has already been declared.

    const s = "hey hi";
    s = "say Hello instead";//TypeError: Assignment to constant variable.

//-----------------------------------------------------------------------------------------

//3]Hoisting of Var->Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution.

//e.g.if we do this:

console.log (string1);
var string1 = "say hello"

//it is interpreted as this:

var string1;
    console.log(string1); // string1 is undefined
    string1 = "say hello"

//So var variables are hoisted to the top of their scope and initialized with a value of undefined.

//Hoisting of let->let keyword are hoisted to the top of their scope and its not initialized.
	                 //So if you try to use a let variable before declaration, you'll get a Reference Error.

                     console.log (s);//Reference error-cannot access 's' before initialization
                     let s = "hello"

//-----------------------------------------------------------------------------------------

//4]Problem with var->

var string1 = "hey hi";//globally scope
    var a = 4;

    if (a > 3) {
        var string1 = "say Hello instead"; //function scope-true-function scope > global scope-output-say Hello instead.
    }
    
    console.log(string1) //output- "say Hello instead"

    //here we haeve redeclared the var keyword & becoz of this will cause a lot of bugs in code. thats why let & const is came.