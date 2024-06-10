// 조건문을 좀더 스마트하게

// 1. 특정 값이 여러 값 중 하나인지 확인해야 할 때
// function isAnimal(text) {
    // 1
    // return (
    //     text === '고양이' || text === '씨바멋쟁이사슴벌레' || text === '예쁜꼬마선충' || text === '알락꼬리마도요'
    // );
    // 2
    // const animals = ['고양이', '씨바멋쟁이사슴벌레', '예쁜꼬마선충', '알락꼬리마도요'];
    // return animals.includes(text);
    // 3

// }
const isAnimal = text => ['고양이', '씨바멋쟁이사슴벌레', '예쁜꼬마선충', '알락꼬리마도요'].includes(text);

console.log(isAnimal('고양이')); 
console.log(isAnimal('노트북'));

console.log('------------------');

// 값에 따라 다른 결과물을 반환해야 할 경우
function getSound(animal) {
    // if
    // if(animal === '고양이')  return '야옹';
    // if(animal === '씨바멋쟁이사슴벌레')  return 'siva';
    // if(animal === '예쁜꼬마선충')  return 'cutty';
    // if(animal === '알락꼬리마도요')  return 'jjack';
    // return '...?';

    // // switch
    // switch(animal) {
    //     case '고양이': return '야옹';
    //     case '씨바멋쟁이사슴벌레': return 'siva';
    //     case '예쁜꼬마선충': return 'cutty';
    //     case '알락꼬리마도요': return 'jjack';
    //     default: return '...?';
    // }

    const sounds = {
        고양이 : '야옹',
        씨바멋쟁이사슴벌레 : 'siva',
        예쁜꼬마선충 : 'cutty',
        알락꼬리마도요 : 'jjack'
    }

    return sounds[animal] || '...?';
}

// 실행할 코드 구문이 다른경우
function makeSound(animal) {
    const tasks = {
        고양이() { return '야옹'; },
        씨바멋쟁이사슴벌레() { return 'siva'; },
        예쁜꼬마선충() { return 'cutty'; },
        알락꼬리마도요() { return 'jjack'; }
    };
    if(!tasks[animal]) {
        console.log('...?');
        return;            
    }
    tasks[animal]();
}
makeSound('고양이');
makeSound('씨바멋쟁이사슴벌레');
makeSound('예쁜꼬마선충');
makeSound('알락꼬리마도요');
console.log('------------------');

console.log(getSound('고양이'));
console.log(getSound('씨바멋쟁이사슴벌레'));
console.log(getSound('예쁜꼬마선충'));
console.log(getSound('알락꼬리마도요'));
console.log(getSound('이게뭐죠'));
console.log('------------------');
