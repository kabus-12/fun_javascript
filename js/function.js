//function.js

//값 /기능
//num = 0;
//doIt=function(){
//      기능실행.
//}

//두 수를 비교해서 큰 수를 출력하는 기능
//함수선언
function showMax(a , b){ //parameter(매개변수)
  if(a > b){
    console.log(`큰 값은 ${a}입니다`);
  }
  else{
    console.log(`큰 값은 ${b}입니다`);
  }
}// end of showMax(a , b)

let n1 =10, n2 = 20;
//함수 호출
showMax(n1 , n2); //arguement(매개값)

let m1 =30, m2 = 40;
showMax(m1 , m2);

//매개변수 2개 , 2개의 곱을 콘솔에 출려하는 함수. getMulti 함수

function getMulti(a , b){
  num = a * b;
  console.log(`두 수의 곱은 ${num}입니다. `);
}

getMulti(n1 , n2);

let val1=prompt('첫번째 숫자를 입력해주세요 : ');
let val2=prompt('두번째 숫자를 입력해주세요 : ');

getMulti(val1 , val2);

function getMulti2(a , b){
  let num1 = a * b;
  console.log(`두 수의 곱은 ${num1}입니다. `);
  return num1; //반환
}

let num1 = getMulti2(n1,n2);
console.log(num1);
