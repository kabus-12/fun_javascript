//object.js
//객체 타입 = {속성 : 값, 속성 : 값}
const student = "홍길동,25-0001,010-1111-2222";
console.log(student.split(",")[0]);

//객체 : 1)속성: 값 2)속성: 메소드(함수)
//console.log사용불가
const obj = {
  name: "홍길동",
  stdNo: "25-0001",
  phone: "010-1111-2222",
  bloodType: "AB",
  showInfo: function () {
    console.log(`학번은 ${obj.stdNo}이고 이름은 ${obj.name}`)
  },
  friends: ["김길동", "박길동", "최길동"],
};
obj.name = "박길도"; // 변수명.속성 = "값"/ 변수명[속성] = "값"
obj['phone'] = "010-1212-2323";
console.log(obj.name);
console.log(obj.stdNo);
console.log(obj.phone);
console.log(`첫번째 친구이름 : ${obj.friends[0]}`)
obj.showInfo();

const numAry = [20, 17, 30, 25, 22, 38, "hello", true];
numAry[2] = 40;
// console.log(numAry[2]);
//배열&반복문
for (let i = 0; i < numAry.length; i++) {
  console.log(numAry[i]);
}
// 배열크기
console.log(numAry.length);

//홍길동, 박길동, 최길동 = nameAry

const nameAry = ["홍길동", "박길동", "최길동"];
nameAry[3] = "류길동" //배열에 "류길동"을 추가
console.log(nameAry[3]);
//for .. of .. 반복문 => 배열
for (let name of nameAry) {
  console.log(name);
}
//nameAry의 배열만큼 반복하고 nameAry의 배열에서 하나씩 name으로 가지고 오겠다

//for .. in .. 반복문 => 객체.
//속성추가.
obj.hobbies = ["게임", "독서", "캠핑"];
// (obj["hobbies"] = ["게임", "독서", "캠핑"];) 위랑 같은 뜻
//속성삭제
delete obj.bloodType;
for (let prop in obj) {
  console.log(`속성 => ${prop}, 값 => ${obj[prop]}`);
}