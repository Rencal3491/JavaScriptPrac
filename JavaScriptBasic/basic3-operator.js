// operator

// 1. + 더하기
// 2. - 빼기
// 3. * 곱하기
// 4. / 나누기
// 5. % 나눈 몫
// 6. ** 제곱

let a = 1 + 1;
console.log(a);
a = 1 + 2 - (3 * 4) / 4;
console.log(a);

let b = 1;
b++; // 후위
++b; // 전위
console.log(b);     //3
console.log(b++);   //3
console.log(++b);   //5

b = 1;
b--;
console.log(b);

// 복합 대입연산자
let c = 1;
c = c + 1;
// 이 코드를 복합 대입 연산자로
c = 1;
c += 1;
// 다른 연산자도 가능함
let d = 1;
d %= 10;
console.log(d);

// 논리 연산자
// 논리 연산자는 Boolean을 위한 연산자
// 반환 타입이 true 또는 false
// ! : not, && : and, || : or
const e = !true;
console.log(e);

const f = true && true;
console.log(f);

const g = true && false;
console.log(g);

const h = true || false;
console.log(h);

const i = true || true;
console.log(i);

const j = false || false;
console.log(j);

const k = false || true;   
console.log(k);

// 연산 순서
// 논리연산자 순서 
// NOT -> AND -> OR
const value = !((true && false) || (true && false) || !false);
console.log(value);

// 비교연산자
// ==, !=, ===(타입까지 같아야함), !==, >, <, >=, <=
const x = 1; 
const y = 1;
const equal = x == y;
console.log(equal);
const equal2 = x === y;
console.log(equal2);

// != 타입검사 x , !== 타입검사 o
const notEqual = 'a' !== 'b';
console.log(notEqual);
console.log(1 != 1);
console.log(1 !== 1);

// 문자열 붙이기

const a1 = 'hello';
const b1 = 'world';
console.log(a1 + ' ' + b1);