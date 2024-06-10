// var
var value = 'Hello';

function myFunction() {
    var value = 'Bye';
    if(true) {
        var value = 'world';
        console.log('block scope: ' + value);
    }
    console.log('function scope: ' + value);
}

myFunction();
console.log('global scope: ' + value)
console.log('-----------------')

// Hoisting
// 자바스크립트에서 아직 선언되지 않은 함수/변수를 끌어올려
// 사용할 수 있는 자바스크립트의 작동 방식

myFunctionHoisting();

function myFunctionHoisting() {
    console.log('Hello world!');
}

console.log(number);
var number = 2;

/*
var number;
cosole.log(number);
number = 2;
*/