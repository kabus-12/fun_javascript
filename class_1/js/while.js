//while.js

// for(i = 1; i <= 5; i+=1){
//   console.log(`i의 값은 ${i}입니다`);
// }

//while(조건) { 실행블럭 }
let i = 1;
while(i <= 5){
  console.log(`i의 값은 ${i}입니다`);
  i++;
}
//조건을 만족할 동안에만 실행

// while(true){
//   let num = Math.ceil(Math.random()*10); //1~10 임의의 수 생성
//   console.log(`num => ${num}`)
//   if(num == 9){
//     break; //while 반복 종료
//   } //9가 나오면 멈춰라
// }

//수를 입력받아서 합을 구하고 quit입력하면 반복을 종료
// let sum = 0;
// if(sum!=0){
//   while(true){
//     let yourValue = prompt('숫자를 입력하세요. 종료하려면 quit를 입력해주세요');
//     if(yourValue == 'quit'){
//       break;
//     }
//     sum += yourValue;
//     yourValue = parseInt(yourValue); //문자를 숫자타입으로 형변환
//   }
//   console.log(`입력한 값의 합은 ${sum}입니다.`)
// }

//Math.random() => 1 ~ 10 범위의 값을 생성
// 5가 되면 반복문을 종료
// sum에 누적

// sum = 0;
// while(true){
//   let Value = Math.ceil(Math.random()*10);
//   sum += Value ;
//   if(Value == 5){
//     break;
//   }
// }
// console.log(`합계 : ${sum}`);
 
//학생(학생 수 4명)의 점수 => quit종료
//while 반복문 이용
//반 평균 = 합계점수 / 학생의 수
//"평균은 --점입니다." 
//최고득점자가 누구인지 구해보세요
let Average = 0;
let ii = 0;
let count = 0;
let maxScore =0;
while(true){
  let st = prompt("학생의 점수를 입력해주세요 : \n종료하려면 quit를 입력해주세요");
  count++;
  if(st == 'quit'){
    break;
  }
  if(maxScore < st){
    maxScore = st ;
  }
  st=parseInt(st);
  ii += st;
  
  Average = ii / count;
}
console.log(`평균은 ${Average}이고, 최고점수자는 ${maxScore}입니다`);
