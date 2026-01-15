//switch.js
let msg = prompt('A,B,C중에 값을 입력하세요 : ');
console.log(msg);

switch (msg) {
  case 'A':
    console.log('A를 입력했습니다.');
    break;
  case 'B':
    console.log('B를 입력했습니다.');
    break;
  case 'C':
    console.log('C를 입력했습니다.');
    break;
  default:
    console.log('잘못입력했습니다.');
}