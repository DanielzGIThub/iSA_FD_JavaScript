/*var someVar = 9; //global variable

function someFunc (){

    someVar += 7; //using global variable inside the function
    return someVar
}


console.log(someFunc());
console.log(someVar); // result 16 in memory
document.write(someFunc());
document.write(someVar); //result 23*/

var someVar2 = 9;

function nextFunc(){

    var someVar3 = someVar2 + 7; //someVar3 local variable
    return someVar3;

}

console.log(nextFunc());
console.log(someVar2); // 
document.write(nextFunc());
//document.write(someVar3); //ReferenceError: someVar3 is not defined