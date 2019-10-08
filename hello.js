function multiply(j,k) {

    var multiplyResult = j * k;
    console.log(multiplyResult);
    document.write(multiplyResult);
    return multiplyResult;
}

var func = multiply(3,8);

var num = 5;

num = num + func;

console.log(num);
document.write(num);

console.log(func);
document.write(func);