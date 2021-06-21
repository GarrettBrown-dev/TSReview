"use strict";
var userInput; //Similar to the any type, but a little more restrictive.
var userName1; //Basically any, but it allows you to check and modify later on.
userInput = 5;
userInput = 'Max';
if (typeof userInput === 'string') {
    userName1 = userInput;
}
//Returns a never type. This is intended not to return anything and stop the script.
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError('An error occured', 500);
