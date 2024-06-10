// 자바스크립트 문법은 아니나 알아야 할 개념
function print(person) {
    // if(person === undefined || person === null) {
    if(!person) { // undefined, null 인 경우 falsy
        console.log('학원재밌죠');
        return;
    }
    console.log(person.name);
}

// const person = {
//     name: 'Kim',
// };
const person = null;

print(person);

// falsy 값
// undefined, null, 0, '', false
console.log(!undefined);
console.log(!null);
console.log(!0);
console.log(!'');
console.log(!!'');
console.log(!NaN);     // NaN = not a number - 문자열을 숫자로 변환할 때 parseInt() 

console.log('------------------');
//truthy 값
// 1, ' ', [], {}
console.log(!!1);
console.log(!!' ');
console.log(!![]);
console.log(!!{});
console.log(!{value:1});

console.log('------------------');
const value = { a:1 };
const truthy = value ? true : false;
console.log('truthy? ' + truthy);
console.log('!truthy? ' + !truthy);

