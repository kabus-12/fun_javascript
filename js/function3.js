// function.js
//함수표현식
const sum = function(a , b){
  return a + b;
}
console.log(sum);
let result = sum(2,3);
console.log(result);

const plus = sum;
result = plus(3 , 4);
console.log(result);

//즉시 실행 함수
result = (function (x , y){
  return x > y ? x : y;
})(4 , 29);
console.log(result);
//? = 비교라는 의미

//화살표함수 (매개변수) => { 기능구현 }
const hi = (name) => `hello ! ${name}`; //function 대신에 =>가 들어감
console.log(hi('홍길동'));
