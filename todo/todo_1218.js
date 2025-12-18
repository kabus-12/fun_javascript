//todo_1218.js

//Math.random() 활용. 31 ~ 100까지.
//5번 실행 (for문)
//합계,평균(합계 / 실행수), 최대값 => "합계는 ---, 평균은 000, 최대값은 00"
//함수 : scoreInfo

// function scoreInfo(){
//   let random =0;
//   let score = 0;
//   let total = 0;
//   let maxScore = 0;
//   let count = 0;
//   for(i = 1; i <= 5; i++){
//     random = Math.floor(Math.random() * 70) +31;
//     if(random > maxScore){
//     maxScore = random;
//   }
//   total += random;
//   count++;
// }
//   score = total / count
//   console.log(`합계는 ${total}, 평균은 ${score}, 최대값은 ${maxScore}`)
// }
// scoreInfo();

// & 몇번 실행 (10 매개값으로 받아서 10번실행)
//scoreInfo(10)
function scoreInfo(a){
  let random =0;
  let score = 0;
  let total = 0;
  let maxScore = 0;
  let count = 0;
  for(i = 1; i <= a; i++){
    random = Math.floor(Math.random() * 70) +31;
    if(random > maxScore){
      maxScore = random;
    }
    total += random;
    count++;
  }
  score = total / count
  console.log(`합계는 ${total}, 평균은 ${score}, 최대값은 ${maxScore}`)
}
scoreInfo(10);

//git add . 
//git commit -m "18일 숙제완료"
//git push -u origin main

//시작할 때 git pull origin main 하기


