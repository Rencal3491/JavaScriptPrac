// 함수
// 함수란, 특정 코드를 하나의 명령으로 실행할 수 있게 하는 기능

// 두개의 수를 더하는 함수
function addf(a, b) {
    return a + b;
}

function hello(name) {
    console.log('hello ' + name + '!');
    console.log('hello, ${name}!');
}
hello('mj');

// ES6 템플릿 리터럴 문법
// 화살표 함수
// 함수를 선언하는 방법 중 하나
const add = (a, b) => {
    return a + b;
};
// 바로 반환하는 값을 사용하는 경우
const add2 = (a, b) => a + b;

const num = add(10, 20);
console.log(add(10, 20));
console.log(add2(10, 20));
// 화살표 함수와 function 함수의 차이는 this가 가리키는 것이
// 다르다, function의 this 는 자신의 종속된 객체를
// 화살표함수의 this는 상위 범위의 this.