//literal.js

const n1 = 10;
const n2 = 30;

console.log(`n1의 값 ${n1}와 n2의 값 ${n2}의 합은 ${n1 + n2} `);
console.log(`n1의 값 ${n1}와 n2의 값 ${n2}의 큰값은 ${n1 > n2 ? n1 : n2} `);

const fruits = ["사과", "배", "복숭아", "포도"];
const newAry = `${fruits.map((elem) => `<li>${elem}</li>`).join("")}`;
console.log(newAry);
document.querySelector("ul").innerText = newAry;

//map 함수안의 내용을 그대로 출력 filter 배열 안의 값을 필터링해서 출력
