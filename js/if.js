//if.js
//Math.random() : 0 <= x < 1 사이의 값을 랜덤으로 출력
//1 ~ 10 임의의 값을 생성 -> x
// x의 값이 "짝수입니다."/"홀수입니다."

let x = Math.floor(Math.random() * 10) + 1;
console.log(x);

if (x % 2 == 0) {
  console.log('짝수입니다.');
} else {
  console.log('홀수입니다.');
}

// x의 값이 홀수이면서 5보다 크거나 같은지 => "조건을 만족합니다"/"조건을 만족하지 않습니다"

if (x % 2 == 1 && x >= 5) {
  console.log('조건을 만족합니다');
} else {
  console.log('조건을 만족하지 않습니다.');
}
console.log('-------------------------');
//3항 연산식
(x % 2 == 1 && x >= 5) ? console.log('조건을 만족합니다') : console.log('조건을 만족하지 않습니다.')


// 학생의 성적을 출력 (0 <= x <= 100)
let y = Math.floor(Math.random() * 101);
console.log(y);

if (90 <= y) {
  console.log('A학점'); // 90 <= x <= 100 -> A학점
} 
else if (80 <= y) {
  console.log('B학점'); // 80 <= x < 90 -> B학점
} 
else if (70 <= y) {
  console.log('C학점'); // 70 <= x < 80 -> C학점
} 
else if (60 <= y) {
  console.log('D학점'); // 60 <= x < 70 -> D학점
} 
else {
  console.log('F학점'); // 60 > x -> F학점
}