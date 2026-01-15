//변수 선언
//ES6(2015) 이전
var name = "Hong";

var name = "Hwang"; //중복선언가능 (문제가 될 수 있음). window객체에 속성

//ES6 이후
//let name = "Hong";
let age = 10; //중복선언 불가
age = 20; //재할당이 가능

const myAge = 30;
//myAge = 31; //상수변수에는 재할당이 불가

//let for = 10; //잘못된 변수 선언 (for,of,if 등...)

let myage = 10; //createElement() != createelement()

//console.log(window); //window 객체 (웹브라우저)
//alert("dddd");

let liTag = document.createElement("li"); //객체를 반환한다
liTag = {};

//자료형(Data Type) => 원시자료형
let loginID = 10; //number타입
loginID = "user01"; //string 타입
loginID = true; //boolean타입
loginID = null; //object타입
console.log(typeof loginID);

let loginPW; //undefined
//loginPW = new Symbol();

//자바
//int myAge = 10;

//객체 복합자료형
//const nyInfo - new Object(); //객체선언
const myInfo = {
  name: "Hong",
  age: 20,
  phone: "010-1111-2222",
  showInfo: function () {
    console.log(`이름은 ${this.name}, 연락처는 ${this.phone}`);
  },
}; //객체 리트럴(객체에 직접 값을 넣겠다)

//객체의 속성
console.log(myInfo.name);
console.log(myInfo["phone"]); //이런 방식이 더 많이쓰임
myInfo.showInfo(); //myInfo.showInfo() 메소드 비교) document.createElement()

//속성 변경
myInfo["name"] = "Hwang";
myInfo.phone = "010-2222-3333";
myInfo.showInfo();

//객체의 복사
//원시유형
let hisAge = 20;
let yourAge = hisAge;
hisAge = 21;
yourAge = 21;
console.log(yourAge);

//객체
let hisInfo = {
  name: "Park",
  age: 20,
};
let yourInfo = hisInfo;
//hisInfo 값 변경
// hisInfo.name = "Choi";
//hisInfo.age = "30";
hisInfo = {
  name: "Park",
  age: 20,
}; //주소값이 달라진다

yourInfo = Object.assign({}, hisInfo); //새로운 객체를 만드면서 값을 복사
// yourInfo = hisInfo;
hisInfo.name = "Choi";
hisInfo.age = "30"; //위에선 바꼈는데 아래는 객체가 달라서 바뀌지 않는다
console.log(yourInfo);
console.log(yourInfo == hisInfo);

//for .. in
console.log("객체의 속성/값.....");
for (let prop in hisInfo) {
  console.log(prop, hisInfo[prop]);
} //속성을 값을 가지고 올 때 사용 (name,age)

//배열
const fruitBasket = ["Apple", "Banana", "melon"];
fruitBasket[0] = "사과";
fruitBasket[3] = "Cherry";
//메소드
fruitBasket.push("Grape"); //배열 가장 끝에 추가
fruitBasket.unshift("corn"); //배열 가장 앞에 추가
fruitBasket.pop(); //배열 가장 끝값 하나를 제거
fruitBasket.shift(); //배열 가장 앞의 값 하나를 제거

//사과, Banana, Melon, Cherry
fruitBasket.splice(2, 0, "Grape"); //인덱스,크기,대체할 값
//적용 후 //사과, Banana, Grape, Melon, Cherry
fruitBasket.splice(3, 1); //대체할 값을 넣지 않으면 삭제
//사과,Banana,Grape,Cherry
fruitBasket.splice(0, 2, "Banana", "사과");
//Banana,사과,Grape,Cherry

//for .. of
for (elem of fruitBasket) {
  console.log(elem);
} //배열 하나하나를 elem에 받아오겠다 ('사과', 'Banana', 'melon', 'Cherry')

for (elem in fruitBasket) {
  console.log(elem, fruitBasket[elem]);
} //in을 사용하게 되면 배열을 가지고 온다 (0,1,2,3)

console.log(fruitBasket);
