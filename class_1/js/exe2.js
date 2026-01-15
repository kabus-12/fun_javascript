//exe2.js
//가위바위보 게임
//1(가위), 2(바위), 3(보)
//시스템:1 ~ 3, 사용자 : 1 ~ 3
//사용자 기준 : You Win! / You Lose!/ You Same! 구문을 출력

let system = Math.floor(Math.random() * 3 + 1);
console.log(system);

let user = prompt('1(가위),2(바위),3(보) 중 하나를 입력해주세요');

switch (system) {
  case 1:
    console.log('컴퓨터 : 가위');
    break;
  case 2:
    console.log('컴퓨터 : 바위');
    break;
  case 3:
    console.log('컴퓨터 : 보');
    break;
  default:
    console.log('잘못입력하였습니다.')
}

switch (user) {
  case "1":
    console.log('나 : 가위');
    break;
  case "2":
    console.log('나 : 바위');
    break;
  case "3":
    console.log('나 : 보');
    break;
  default:
    console.log('잘못입력하였습니다.')
}
console.log('-------------------------');
console.log('if를 이용한 방법');
if ((system == 1 && user == 1) || (system == 2 && user == 2) || (system == 3 && user == 3)) {
  console.log('You Same!');
} else if ((system == 1 && user == 2) || (system == 2 && user == 3) || (system == 3 && user == 1)) {
  console.log('You Win!');
} else if ((system == 1 && user == 3) || (system == 2 && user == 1) || (system == 3 && user == 2)) {
  console.log('You Lose!');
} else {
  console.log('다른것을 입력하셨습니다');
}
console.log('-------------------------');
console.log('switch를 이용한 방법');
let diff = system - user;

switch (diff) {
  case -1:
  case 2:
    console.log('You Win!');
    break;
  case 1:
  case -2:
    console.log('You Lose!');
    break;
  default:
    console.log('You Same!');
}