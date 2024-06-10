// spread , rest
// es6 에서 도입된 문법

// spread 
// 객체 혹은 배열을 펼칠 수 있는 문법
// const slime = {
//     name : 'slime'
// };
// const cuteSlime = {
//     name: 'cute slime',
//     attribute: 'cute'
// };
// const purplecuteSlime = {
//     name: 'purple slime',
//     attribute: 'cute',
//     color: 'purple'
// };

// console.log(slime);
// console.log(cuteSlime);
// console.log(purplecuteSlime);

// spread 문법 사용
const slime = {
    name : 'slime'
}
const cuteSlime = {
    ...slime,
    attribute: 'cute'
}
const purplecuteSlime = {
    ...cuteSlime,
    color: 'purple'
}
console.log(slime);
console.log(cuteSlime);
console.log(purplecuteSlime);

// 배열에서 spread
const animals = ['개', '고양이', '참새'];
const anotherAnimals = [...animals, '씨바멋쟁이사슴벌레', '예쁜꼬마선충', '알락꼬리마도요'];

console.log(animals);
console.log(anotherAnimals);

const numbers = [1,2,3,4,5];
const spreadNumbers = [...numbers, 100, ...numbers];
console.log(spreadNumbers);
console.log('------------------');
// rest
// 사용방식은 비슷해 보이지만, 역할이 매우 다릅니다
// 객체, 배열, 함수의 파라미터에서 사용가능
// const purplecuteSlime = {
//     name: 'purple slime',
//     attribute: 'cute',
//     color: 'purple'
// } ->

const {color, ...rest} = purplecuteSlime;
console.log(color);
console.log(rest); //객체
console.log('------------------');

const {color: color2, ...cuteSlime2} = purplecuteSlime;
console.log(color2);
console.log(cuteSlime2); //객체
console.log('------------------');

// 배열의 rest
const numbers2 = [0,1,2,3,4,5,6];
const [one, ...rest2] = numbers2;
console.log(one);
console.log(rest2);
console.log('------------------');
// 함수 파라미터에서의 rest
// function sum(a,b,c,d,f,g) {
//     let sum = 0;
//     if(a) sum += a;
//     if(b) sum += b;
//     if(c) sum += c;
//     if(d) sum += d;
//     if(f) sum += f;
//     if(g) sum += g;
//     return sum;
// }
// const result = sum(1,2,3,4);
// console.log(result);

function sum(...rest) {
    return rest.reduce((acc, current) => acc+current, 0);
}
const result = sum(1,2,3,4,5,6,7,8,9,10);
console.log(result);
console.log('------------------');

// 함수 인자와 spread
const numbers3 = [1,2,3,4,5,6];
const result2 = sum(
    // numbers3[0],
    // numbers3[1],
    // numbers3[2],
    // numbers3[3],
    // numbers3[4],
    // numbers3[5]
    ...numbers3
);
console.log(result2);

// 퀴즈
// 함수 n개와 숫자들이 파라미터로 주어졌을 때
// 가장 큰 값을 찾는 코드
function findMax() {
    return Math.max(...arguments);
}
const resQuiz = findMax(1,2,3,4,5,6,7,8,9,13,10);
console.log(resQuiz); //13

// 위와 같이 작동하는 코드!
function findMax2(...rest) {
    return rest.reduce((acc, current) => acc < current? current : acc);
}

const resQuiz2 = findMax2(1,2,3,4,5,6,7,8,9,13,10);
console.log(resQuiz2); //10
