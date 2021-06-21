"use strict";
function add(n1, n2, showResult, phrase) {
    // if (typeof n1 !== 'number' || typeof n2 !== 'number') {
    // throw new Error('Incorrect input!');
    // } JavaScript version.
    var result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return result;
    }
}
var number1 = 5; //ts ONLY uses numbers, not floats.
var number2 = 2.8;
var printResult = true;
var resultPhrase = 'Result is: ';
add(number1, number2, printResult, resultPhrase);
//TS knows all types that other languages know, 
//strings, numbers and booleans.
// JS uses dynamic types which are resolved 
//at runtime, whereas TS uses static types set during development. 
//Which usually means less room for error.
//TS also supports objects {age: 30} Any JS object, but more 
//specific types of objects are possible.
//TS Supports Arrays like JS, and the types can be flexible or strict.
//TS adds a few new types: Tuples, which are fixed-length and type arrays.
// and Enum: An Enumerated list.
//TS also supports the Any (*) type. Kinda useless in TS.
