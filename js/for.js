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
console.log(`최종합계 : ${sum}`);
sum = 0;
for(let i = 1; i <= 100; i++){
  sum += i;
  //console.log(`sum => ${sum}, i => ${i}`);
}

console.log(`최종합계 : ${sum}`);
