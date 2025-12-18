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
num1 = 20;
{
  let num1 = 30;
  console.log(num1);
}
console.log(num1);

//코드
//함수 : gugudan, 4단을 콘솔에 출력
console.log('-------------------')
function gugudan(dan){
 for(i = 1; i <= 9; i++){
    console.log(`${dan} * ${i} = ${dan * i}`);
  }
}
gugudan(2);

//p585 6번문제
function sumMulti(a , b){
  if(a === b){
    num = a * b;
  }
  else{
    num = a + b;
  }
  console.log(num);
}
 sumMulti(5 , 10);
 sumMulti(10 , 10);
 //p586 7번문제

 let nu1 = prompt('비교할 첫번째 숫자 : ');
 let nu2 = prompt('비교할 두번째 숫자 : ');

 function nu(){
  if(nu1 > nu2){
    console.log(`${nu1}이(가) ${nu2}보다 큽니다.`);
  }
  else if(nu1 < nu2){
    console.log(`${nu2}이(가) ${nu1}보다 큽니다.`);
  }
  else{
    console.log(`두 수가 같습니다`)
  }
 }

 nu(nu1 , nu2);