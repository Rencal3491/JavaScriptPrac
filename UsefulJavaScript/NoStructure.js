// 비구조화 할당(구조분해) 문법
const object = {a:1, b:2};
const {a,b} = object;

console.log(a);
console.log(b);
console.log('------------------');

console.log('함수 파라미터에서의 비구조화');
function print ({a,b,}) {
    console.log(a);
    console.log(b);
}
print(object);
console.log('------------------');
// 만약에 위 함수에 전달할 값 중에 b가 주어지지 않는 경우
// b에는 undefined 할당됨

// 비구조화 할당시 기본값 설정
function print2 ({a, b = 2}) {
    console.log(a);
    console.log(b);
}
print2(object);
console.log('------------------');
const object2 = {a:1};
const {a2,b2 = 20} = object2;
console.log(a2);
console.log(b2)

// 비구조화 할당 시 이름 바꾸기
// 비구조화 할당하는 과정에서 선언 할 값의 이름을 변경
const animal = {
    name : '멈뭄미',
    type : '개'
};
const nickname = animal.name;
console.log(nickname);