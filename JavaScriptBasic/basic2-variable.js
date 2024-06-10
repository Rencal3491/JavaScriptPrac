// 변수와 상수
// 자바스크립트 변수 : var(예전부터) , let , const
// var -> let, const 권장  이유 : 호이스팅
// let , const 는 블럭 변수

// let 
// 변수 선언. 바뀔 수 있는 값을 지정할 때 사용
// 재할당이 가능 재선언은 불가능
let value = 1;
console.log(value);
value = 2;
console.log(value);
//재선언 안됨
// let value = 1;
// let value = 2;

// const - 상수 선언
// const는 한번 선언하고 바뀌지 않는 값
// 재할당과 재선언 불가
// const a = 1;
// a = 2;
// console.log(a);

// data type
// 1. number - 숫자
let num1 = 1;
let num2 = 2.5;
let num3 = 1.5e10;
let num4 = 0xff;
// 2. string - 작은 따옴표 혹은 큰 따옴표를 사용하여 표현
let text = 'hello';
let name = "홍길동";
// 3. boolean 참/거짓 
let good = true;
let loading = false;
// 4. null => 값이 없음
let empty = null;
console.log(empty);
// 5. undefined => 값이 값이 설정되지 않음
let undef
console.log(undef);
// 6. symbol
let sym = Symbol();
// 7. object
let obj = {};
// 8.function
let func = function () { };