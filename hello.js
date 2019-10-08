var a = "number";

var b = 5;

console.log(a + b); //result is not a number. It is a string


var c = "6";

var d = 5;

console.log(c + d);


//NaN means Not a Number
if (isNaN(a)){
    console.log("not a number");
} else {
    console.log("It is a number");
}

//NaN means Not a Number
if (!isNaN(a)){
    console.log("It is a numberrr");
} else {
    console.log("not a numberrr");
}