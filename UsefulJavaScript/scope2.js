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