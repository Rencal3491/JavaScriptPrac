// 배열
// 여러개의 항목들이 들어있는 리스트와 같은 자료

const array = [1, 2, 3, 4, 5, 6];

// 선언할 때 [] 로 감싸주고,
// 배열 안에는 어떤 값이던지 넣을 수 있음
const objects = [
    {name: '멍멍이'}, {name: '돌쇠'}
];

// 조회
console.log(array[0]);
console.log(objects[0]);
console.log(objects[0].name);
console.log('배열의 크기 -push 이전'+objects.length);
// 배열에 새 항목 추가
objects.push({ 
    name: '멈뭄미'
});
console.log(objects);

// 배열의 크기
console.log('배열의 크기 -push 이후'+objects.length);

