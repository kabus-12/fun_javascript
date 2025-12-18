//function2.js

//sum함수 : 매개변수 2개 더한 결과를 콘솔에 출력

let num1 = 10; //num : 전역변수(global variable).

function sum(a , b){
  console.log(num1);
  let num = num1 + a + b; // num : 지역변수(loval variable).
  console.log(`두 수의 더한 값은 ${num}입니다`);
}

console.log(`전역 : ${num1}`);
sum(1 , 2);