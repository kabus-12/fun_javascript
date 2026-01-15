//exe1.js
//Math.random() 함수. (0 <= x < 1) 값이 랜덤으로 출력
//Math.ceil() : (4.56745 => 5)를 소숫점 첫째자리를 올림을 하는 함수
//math.floor(): (4.56745 => 4)소숫점 첫째자리를 내림하는 함수
let x = Math.random() * 10 ;
// console.log(Math.ceil(x));
//console.log(Math.floor(x));

//임의의 값이 5보다 큰지 => true, false
// true, flase 구문이 콘솔에 출력
let y = Math.ceil(x);
console.log('y => ' + y)
let result = 5 < x;
console.log(result);

//짝수인지 => true, false
console.log(y % 2 == 0);