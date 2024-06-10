// prototype , class
// 객체 생성자는 함수를 통해서 새로운 객체를 만들고
// 그 안에 넣고 싶은 함수들을 구현할 수 있게 만들어준다

function Animal (type, name, sound) {
    this.type = type;
    this.name = name;
    this.sound = sound;
    this.say = function() {
        console.log(this.sound);
    };
}

const dog = new Animal('개', '멈뭄미', '멈멈');
const cat =  new Animal('고양이', '꼬앵이', '애옹');

dog.say();
cat.say();

// 프로토타입
// 프로토타입은 객체 생성자 함수 아래에 .prototype.[원하는 키] = 코드

function AnimalProto (type, name, sound) {
    this.type = type;
    this.name = name;
    this.sound = sound;
}
// 프로토 타입 설정 - 함수
AnimalProto.prototype.say= function() {
    console.log(this.sound);
};
AnimalProto.prototype.test = function(name) {
    console.log(name);
}
// 프로토 타입 설정 - 변수
AnimalProto.prototype.sharedValue = 1;

const dog1 = new AnimalProto('개', '멈뭄미', '멈멈');
const cat1=  new AnimalProto('고양이', '꼬앵이', '애옹');

dog1.say();
cat1.say();

console.log(dog1.sharedValue);
console.log(cat1.sharedValue);
console.log(typeof(dog1));

// 객체 생성자 상속받기
function AnimalInherit(type, name, sound) {
    this.type = type;
    this.name = name;
    this.sound = sound;

}
AnimalInherit.prototype.say = function() {
    console.log(this.sound);
};
AnimalInherit.prototype.sharedValue = 1;

// 상속 처리
function Dog(name,sound) {
    AnimalInherit.call(this, '개', name, sound);
}
Dog.prototype = AnimalInherit.prototype;

function Cat(name,sound) {
    AnimalInherit.call(this, '고양이', name, sound);
}
Cat.prototype = AnimalInherit.prototype;

const dog2 = new Dog('멈뭄미', '멈멈');
const cat2 = new Cat('꼬앵이', '애옹');

dog2.say();
cat2.say();
console.log('------------------');
// class
class AnimalClass {
    constructor(type, name, sound) {
        this.type = type;
        this.name = name;
        this.sound = sound;
    }
    say() {
        console.log(this.sound);
    }
}
const dogClass = new AnimalClass('개', '멈뭄미', '멈멈');
const catClass = new AnimalClass('고양이', '꼬앵이', '애옹');
dogClass.say();
catClass.say();

// 상속
class Dog extends Animal {
    constructor(name, sound) {
        super('개', name, sound);
    }
}