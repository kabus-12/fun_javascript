//this

//1. 객체 : this(객체를 가리킴)
const obj = {
  name: "hong",
  showThis() {
    let name = "hwang";
    console.log(this.name);
  },
};

obj.showThis(); //{name : hong , showThis : F} 이렇게 객체가 출력됨

//2.함수 : this (window객체를 가리킴)
function thisFunc() {
  console.log(this);
}

thisFunc(); //window객체 출력

//3.이벤트 : this (event 대상을 가리킴) vs. 화살표함수 (window객체)
document.querySelector("h3").addEventListener("click", (e) => {
  console.log(this);
}); //<h3>자바스크립트2</h3> 가 출력됨  html자바스크립트2를 클릭했을때
//하지만 화살표함수로 해서 클릭하면 window객체가 출력된다

console.log(this);

//var vs let
var v1 = 10; //전역변수

function sum() {
  var v1 = 20; //지역변수
  console.log(v1);
}
sum();

{
  var v1 = 30;
  console.log(v1);
}

console.log(v1); //전역변수

let v2 = "hello";
{
  let v2 = "world";
  console.log(v2);
}
console.log(v2);

//함수 인수의 기본값
function max(n1 = 0, n2 = 0) {
  if (n1 > n2) {
    return n1;
  } else {
    return n2;
  }
}

let result1 = max();
let result2 = max(10, 11);
let result3 = max(result1, result2);
console.log(result1);
console.log(result2);
console.log(result3);
