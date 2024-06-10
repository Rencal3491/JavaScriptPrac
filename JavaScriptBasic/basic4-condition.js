// 조건문
// if
const a = 1;
if (a + 1 == 2) {
    console.log('a + 1 은 2 입니다.');
}

const b = 10;
if (b>15) {
    console.log('b가 15보다 큽니다.');
} else {
    console.log('b가 15보다 작습니다.');
}

if (b === 5) {
    console.log('5입니다')
} else if (b === 10) {
    console.log('10입니다')
} else {
    console.log('5도 아니고 10도 아닙니다.')
}

// switch case
const device = 'iphone';
switch (device) {
    case 'iphone':
        console.log('iphone');
        break;
    case 'ipad':
        console.log('ipad');
        break;
    case 'galaxy s24':
        console.log('galaxy s24');
        break;
    default:
        console.log('무슨 기종인지 알 수 없습니다');
}