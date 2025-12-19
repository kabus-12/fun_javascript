//event.js
//이벤트 - 이벤트 핸들러가 꼭 있어야 실행이 가능하다
//버튼(클릭 <- 이벤트 이름) - 이벤트핸들러 등록

//document.querySelector('선택자') =>  화면 요소를 찾아서 반환.

console.dir(document.querySelector("button")); //dir => 객체를 객체모양으로 보여주는것
// 1)이벤트 유형(문자),2)이벤트핸들러(함수)
document.querySelector("button").addEventListener("click", function () {
  console.log(`클릭됨`);
  //이벤트핸들러 (this는 이벤트를 받는 대상)
  this.style.backgroundColor = "red";
  this.style.color = "yellow";
  this.innerHTML = "Event";
});
document.querySelector("button").addEventListener("mouseover", (e) => {
  //이벤트핸들러(this : Window객체)
  console.log(e.target);
  e.target.style.backgroundColor = "green";
});

//li에게 각 요소에 이벤트
let allList = document.querySelectorAll("#second>li");
for (let i = 0; i < allList.length; i++) {
  allList[i].addEventListener("click", liClickFnc);
  allList[i].addEventListener("mouseover", mouseOverFnc);
  allList[i].addEventListener("mouseout", mouseOutFnc);
}
//addEventListener =>뭔이벤트할래? (click) => 마우스클릭이벤트할래 liClickFnc => 이 함수들고올게
function liClickFnc(e) {
  console.log(e.target.innerHTML); //e.taget 이벤트 대상.
}
function mouseOverFnc(e) {
  e.target.style.backgroundColor = "yellow";
}
function mouseOutFnc(e) {
  e.target.style.backgroundColor = "";
}
