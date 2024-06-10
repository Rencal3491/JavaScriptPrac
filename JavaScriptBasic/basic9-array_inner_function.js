// 내장함수
// 배열을 다룰 때 알고있으면 유용함
// bulitin function

// forEach : 가장 쉬운 배열 내장함수, for문 대체
const superHeros = ['아이언맨','캡틴 아메리카', '토르','닥스','캡틴 마블'];
for(let i=0; i<superHeros.length; i++) {
    console.log(superHeros[i]);
}
console.log('-------------------');
// ->
superHeros.forEach(hero => {
    console.log(hero);
});

// map : 배열 안의 각 원소를 변환할 때 사용
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// 해당 배열 안의 모든 숫자를 제곱해서 새로운 배열로 만들고 싶어요
// 어떻게 해야 할까요
const squared = [];
for(number of array) {
    squared.push(number * number);
}
console.log(squared);

// foreach ->
const squared2 = [];
array.forEach(number => {
    squared2.push(number * number);
});
console.log(squared2);

// map -> // map을 사용할 때 변환함수를 사용함으로 새로운 배열 생성
const square = n => n * n;
const squared3 = array.map(square);
// const squared3 = array.map(number => number * number);
console.log(squared3);

// index of : ARRAY에서 특정 값의 위치를 반환
const superHeros1 = ['아이언맨','캡틴 아메리카', '토르','닥스','캡틴 마블'];
const index = superHeros1.indexOf('토르');
console.log('토르의 위치 : '+index);

// findIndex : 배열 안의 값이 기본 자료형이면 indexOf 사용
// 하지만 배열 안에 있는 값이 객체이거나, 배열이라면 indexOf 불가능
// 객체에 있는 값을 찾아내는 내장함수
const todo = [
    {
        id:1,
        text:'자바스크립트',
        done:true
    },
    {
        id:2,
        text:'자바',
        done:true
    },
    {
        id:3,
        text:'함수와 메소드',
        done:true
    },
    {
        id:4,
        text:'객체와 배열의 내장함수',
        done:false
    }
];

// 객체 배열에서 객체의 내부 값 중 멤버 값중에 id가 3인 객체가 몇번째 인지 알려면
const objectIndex = todo.findIndex(todo => todo.id === 3);
console.log(objectIndex);

// find ->  순서나 위치가 아닌 그 값 자체를 반환
const todos = [
    {
        id:1,
        text:'자바스크립트',
        done:false
    }
];

const todo1 = todos.find(todo => todo.id === 1);
console.log(todo1);

// filter -> 배열에서 특정 조건을 
// 만족하는 값들만 따로 추출하여 새로운 배열 생성
// 위에 있는 todos 배열에서 done 값이 false 인 항목만 추출
const tasksNotDone = todos.filter(todo => todo.done === false);
const tasksNotDone2 = todos.filter(todo => !todo.done);
console.log(tasksNotDone);
console.log(tasksNotDone2);

// splice -> ARRAY에서 특정 값를 삭제
const numbers4 = [1,2,3,4,5,6];
const indexNumber = numbers4.indexOf(5);
numbers4.splice(indexNumber, 1); // splice(index, 삭제할 글자 수)
console.log(numbers4);

// slice -> 배열을 잘라 낼 때 사용, 기존 배열을 수정하지 않음
const sliced = numbers4.slice(0, 2); // 0부터 2번 이전 까지
console.log(sliced);
console.log(numbers4); //변경되지 않음

// shift 와 pop -> 
// shift는 첫번째 원소를 배열에서 추출 및 삭제
// pop는 마지막 원소를 추출
const numbers5 = [10,20,30,40,50];
const value = numbers5.shift();
console.log(value);          // 10
console.log(numbers5);       // [20,30,40,50]

const valuePop = numbers5.pop();
console.log(valuePop);       // 50
console.log(numbers5);       // [20,30,40]

// unshift -> shift의 반대, 배열의 맨 앞에 새 원소를 추가
numbers5.unshift(5);
console.log(numbers5);

// concat -> 여러개의 배열을 하나의 배열로 합칠때
// arr1 arr2 의 변화는 x
const arr1 = [10,20,30];
const arr2 = [40,50,60];
const concated = arr1.concat(arr2);
console.log(concated);

// join -> 배열 안의 값들을 문자열 형태로 합친다
const arrayJoin = [1,2,3,4,5];
console.log(arrayJoin.join());
console.log(arrayJoin.join(' '));
console.log(arrayJoin.join(', '));
console.log(typeof((arrayJoin.join())));

// split -> 문자열을 배열로 변환
console.log(arrayJoin.join().split(','));

// reduce -> 주어진 값을 통한 계산
const numbers6 = [1,2,3,4,5];
let sum = 0;
numbers6.forEach(n => {
    sum+=n
});
console.log(sum);

// -> reduce
sum = numbers6.reduce((accumulator, current) => {
    console.log({accumulator, current});
    return accumulator + current;
},0);  // 0은 초기값
console.log(sum);

// 평균값 구하기
const numbers7 = [10,20,30,40,50,60,70];
let sum2 = numbers7.reduce((accumulator, current, index, array) => {
    if (index === array.length - 1) {
        return (accumulator + current) / array.length;
    }
    return accumulator + current;
},0);

console.log(sum2);

// 퀴즈
// 숫자 배열이 주어졌을 때 10 보다 큰 숫자의 개수를 반환하는 함수
function countBiggerThan10(numbers) {
    return numbers.filter(n => n > 10).length;
}
const count = countBiggerThan10([1,2,3,5,10,20,30,40,50,60]);
console.log(count);
