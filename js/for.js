//for.js

let sum = 0; //값을 누적

//1 ~ 5 까지 sum 누적. (1+2+3+4+5를 하겠다는것)

sum += 1;
sum += 2;
sum += 3;
sum += 4;
sum += 5;
console.log(sum);

sum = 0;
console.log('for문(반복문)');
for(let i = 1; i <= 100; i++){
  if(i % 2 ==0){
    sum += i;
    //console.log(`sum => ${sum}, i => ${i}`);
  }
}
console.log(`최종짝수합계 : ${sum}`);
sum = 0;
for(let i = 1; i <= 100; i++){
  sum += i;
  //console.log(`sum => ${sum}, i => ${i}`);
}

console.log(`최종합계 : ${sum}`);

//1부터 100까지 정수중에서 홀수의 합을 sum변수에 누적

sum = 0;
for(let i = 1; i <= 100; i++){
  if(i % 2 == 1){
    sum += i;
  }
}

console.log(`최종홀수합계 : ${sum}`);

//1~100 까지 정수중에 홀수의 합 : oddSum, 짝수의 합 : evenSum에 누적
let oddSum = 0;
let evenSum = 0;

for(let i = 1; i <= 100; i++){
  if(i % 2 == 1){
    oddSum += i;
  }
  else{
    evenSum += i;
  }
}

console.log(`최종홀수합계는 ${oddSum}이고 최종짝수합계는 ${evenSum}이다.`)

