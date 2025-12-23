//math.js

const ary = new Array(); //인스턴스마다 각기 다른 값

const today = new Date(); //동일

console.log(Math.round(3.5));
Math.random(); //클래스.메소드 호출

//51(포함)~100(포함) => 67생성
//숫자 맞추기 함수
// 70입력 크다/작다 60입력 크다/작다 ... 여러번 시도 67입력 "정답입니다"

function numberGame() {
  number = Math.floor(Math.random() * 50 + 51);
  let count = 0;
  while (true) {
    count++;
    let num = prompt("51~100사이의 숫자를 입력해주세요 : ");
    if (num > number && num < 101) {
      console.log("입력한 숫자가 랜덤한 숫자보다 큽니다");
    } else if (num < number && num > 50) {
      console.log("입력한 숫자가 랜덤한 숫자보다 작습니다");
    } else if (num <= 50 || num >= 101) {
      console.log("범위를 벗어났습니다.");
    } else {
      console.log("정답입니다");
      break;
    }
  }
  console.log(`${count}회 시도하였습니다`);
  console.log("end of Game");
}
numberGame();
