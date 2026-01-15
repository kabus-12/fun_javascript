//array.js

const numAry = [10, 20, 30]; //new Array();
const chrAry = ["a", "b", "c"];
const str = "hello";

const newAry = numAry.concat(chrAry);

console.log(`new Ary => ${newAry.join(",")}`); // 배열 -> 문자열

//추가, 삭제
numAry.push(40); //push = 배열 가장 뒤에 추가하겠습니다
numAry.unshift(50); //배열 가장 앞에 추가
numAry.pop(); //배열 마지막 삭제
numAry.shift(); //배열 맨앞 삭제
//[10, 20, 30]
numAry.splice(0, 2, 1, 2, 3, 4, 5); //첫번째 : 위치, 수정할 대상의 크기, 대체할값
console.log(`numAry => ${numAry}`, numAry);

//[1,2,3,4,5,30]
console.log(numAry.slice(1)); //앞에건 포함 뒤에건 제외 (2~3까지인데 뒤에오는건 제외되서 출력되는건 2만출력됨)
// 뒤에 아무것도 넣지 않으면 2부터 뒤에 배열전부 출력

//str.push("world"); //문자는 push사용불가

//[1, 2, 3, 4, 5, 30]
numAry.forEach((elem, idx, ary) => {
  console.log(
    `첫번째 요소: ${elem}, 두번째 인덱스: ${idx}, 세번째 배열: ${ary}`
  );
});
//a=배열요소 b=인덱스 c=배열 전체
console.log("--------------------");
//각 요소들 값중에서 짝수만 콘솔에 출력
numAry.forEach((elem, idx, ary) => {
  if (elem % 2 == 0) {
    console.log(`첫번째 요소: ${elem}`);
  }
});
//인덱스 3번째까지 출력
console.log("--------------------");
numAry.forEach((elem, idx, ary) => {
  if (idx < 3) {
    console.log(`첫번째 요소: ${elem}`);
  }
});

numAry.forEach((elem, idx) => (idx < 3 ? console.log(elem) : "")); //많이 사용되는 메소드
