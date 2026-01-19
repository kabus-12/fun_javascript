//Array.js
//배열관련 메소드
const numAry = [];
for (let i = 1; i <= 6; i++) {
  numAry.push(Math.ceil(Math.random() * 100)); //1<x<101
}

//반복문
numAry.forEach((elem) => {
  console.log(elem);
});

//map()  //경과를 배열에 넣어 출력
const mapResult = numAry.map((elem) => ({ score: elem })); //{score: 89}

console.log(mapResult);

//filter() 조건을 만족하는 것을 배열에 넣겠습니다
const filResult = numAry.filter((elem) => elem > 90);
console.log(filResult);

console.clear();
//reduce()
let result = numAry.reduce((acc, elem, idx, ary) => {
  console.log(`acc=>${acc}, elem=>${elem}`);
  //50보다 큰 값만 배열에 넣습니다
  if (elem > 50) {
    acc.push(elem);
  }

  return acc;
}, []);
console.log(result);

//reduce()
result = numAry.reduce((acc, elem) => {
  let li = document.createElement("li");
  li.textContent = elem;
  acc.appendChild(li);

  return acc;
}, document.querySelector("ul#list"));

//from()
result = document.querySelectorAll("#list li");
result = Array.from(result); //NodeList(array);
console.log(result);
//NodeList은 forEach가능
result.forEach((elem) => console.log(elem.textContent));

//result.filter((elem) => elem.innerText < 50); //오류남
