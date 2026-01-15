//exe3.js

const numAry = [10, 30, 50];
numAry[numAry.length] = 20;
numAry[numAry.length] = 60;
numAry[numAry.length] = 80;

//반복문을 이용하여 콘솔에 출력
//50보다 크거나 같은 값만 출력
for (i = 0; i < numAry.length; i++) {
  if (numAry[i] >= 50) {
    console.log(`numAry[${i}]의 값 : ${numAry[i]}`);
  }
}
console.log("---------------------");
//배열이 홀수번째인 값을 출력
for (i = 0; i < numAry.length; i++) {
  if (i % 2 == 0) {
    console.log(`numAry[${i}]의 값 : ${numAry[i]}`);
  }
}
console.log("---------------------");
//배열중 가장 큰 값을 출력
let max = 0;
for (i = 0; i < numAry.length; i++) {
  if (numAry[i] > max) {
    max = numAry[i];
  }
}
console.log(`numAry중 가장 큰 값 :  ${max}`);

//회원정보(회원아이디, 이름, 포인트)
let members = [
  { id: "user01", name: "홍길동", point: 800 },
  { id: "user02", name: "김문희", point: 756 },
  { id: "user03", name: "박동철", point: 980 },
];
console.log("---------------------");
//반복문을 사용하여 포인트의 합계와 최고포인트는 얼마인지 구하여라
let maxpoint = 0;
let allpoint = 0;
for (i = 0; i < members.length; i++) {
  allpoint += members[i].point;
  if (members[i].point > maxpoint) {
    maxpoint = members[i].point;
  }
} // [i]는 .앞에 넣어야 적용된다
console.log(`포인트 합계 ${allpoint}, 최고포인트 : ${maxpoint}`);
console.log("---------------------");

let htmlStr = `<h3>회원목록</h3><table border = "2"><thead><tr><th>아이디</th><th>이름</th><th>포인트</th></tr></thead><tbody>`;
for (i = 0; i < members.length; i++) {
  htmlStr += `<tr><td>${members[i].id}</td><td>${members[i].name}</td><td>${members[i].point}</td></tr>`;
}
htmlStr += `<tr><td colspan= "2">합계</td><td>${allpoint}</td></tr></tbody></table>`;

document.writeln(htmlStr);
