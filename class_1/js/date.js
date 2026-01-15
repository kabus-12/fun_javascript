//date.js

let today = new Date("2026-01-01T10:50:40");
console.log(today);
console.log(today.getFullYear());
console.log(today.getMonth()); //0(1월) ~ 11(12월)
console.log(today.getDate());
console.log(today.getDay()); //0(일요일) ~ 6(토요일)
switch (today.getDay()) {
  case 0:
    console.log("일요일");
    break;
  case 1:
    console.log("월요일");
    break;
  case 2:
    console.log("화요일");
    break;
  case 3:
    console.log("수요일");
    break;
  case 4:
    console.log("목요일");
    break;
  case 5:
    console.log("금요일");
    break;
  case 6:
    console.log("토요일");
    break;
}
today = new Date("2025-02-22T20:15:25");
today.setFullYear(2026);
today.setMonth(0);
today.setFullYear(1970);
today.setMonth(0);
today.setDate(1);
today.setHours(9);
today.setMinutes(0);
today.setSeconds(1);
today = new Date();
console.log(today);

const aday = new Date("Sun Dec 21 2025 10:00:00 GMT+0900");
console.log(aday);
console.log(aday.getTime());
console.log(today.getTime()); //1970년 1월 1일 자정(미국시간기준0시) 이후의 시간을 밀리초로 표시

let day = (today.getTime() - aday.getTime()) / 1000; //초
console.log("25년 12월 21일 10시부터 현재까지의 시간차이");
console.log(Math.floor(day / 1000 / 60 / 60) + "시");
console.log(Math.floor(day / 1000 / 60) + "분");
console.log(Math.floor(day / 1000) + "초");
const hours = Math.floor(day / 60 / 60);
const minutes = Math.floor((day % (60 * 60)) / 60); //위아래 둘다 같은 결과가 나왔음
//const minutes = Math.floor((day / 60) % 60);
const seconds = Math.floor(day % 60); //분을 계산하고 남은 초 구하기
console.log(`${hours}시 ${minutes}분 ${seconds}초`);

console.log(today.getHours());
console.log(today.getMinutes());
console.log(today.getSeconds());

let year = 2025;
let month = 2;
console.log("----------------------");
today = new Date();
today.setFullYear(year);
today.setMonth(month);
today.setDate(0);
today.getDay(); //1일의 요일, 말일의 정보

//계산
//달력을 만드는 반복문
//달력
function printCalendar(yyyy, mm) {
  let today = new Date();
  today.setFullYear(yyyy);
  today.setMonth(mm);
  today.setDate(0);
  const lastDate = today.getDate();
  today.setMonth(mm - 1);
  today.setDate(1);
  const spaces = today.getDay();

  //배열
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let htmlStr = `<table border = "2"><caption>${yyyy}년 ${mm}월</caption><thead><tr>`;
  for (let day of days) {
    htmlStr += `<th>${day}</th>`;
  }
  htmlStr += `</tr><thead><tbody><tr>`;
  //날짜
  for (let s = 0; s < spaces; s++) {
    htmlStr += `<td></td>`;
  }
  for (let d = 1; d <= lastDate; d++) {
    //공란
    htmlStr += `<td>${d}</td>`;
    if ((d + spaces) % 7 == 0) {
      htmlStr += `</tr><tr>`;
    }
  }
  htmlStr += `</tr></tbody></table>`;
  document.querySelector("#calendar").innerHTML = htmlStr;
}

document.querySelector("#cal").addEventListener("click", (e) => {
  console.log(e);
  document.querySelector("#calendar").style.display = "block";
  let yyyy = document.querySelector("#yyyy").value;
  console.log(yyyy);
  let mm = document.querySelector("#mm").value;
  console.log(mm);
  printCalendar(yyyy, mm);
});
document.querySelector("#back").addEventListener("click", (e) => {
  let yyyy = document.querySelector("#yyyy").value;
  let mm = document.querySelector("#mm").value;
  if (mm > 1) {
    mm--;
    document.querySelector("#mm").value = mm;
  } else {
    yyyy--;
    document.querySelector("#yyyy").value = yyyy;
    mm = 12;
    document.querySelector("#mm").value = mm;
  }
  console.log(mm);
  printCalendar(yyyy, mm);
});
document.querySelector("#go").addEventListener("click", (e) => {
  let yyyy = document.querySelector("#yyyy").value;
  let mm = document.querySelector("#mm").value++;
  if (mm < 12) {
    mm++;
    document.querySelector("#mm").value = mm;
  } else {
    yyyy++;
    document.querySelector("#yyyy").value = yyyy;
    mm = 1;
    document.querySelector("#mm").value = mm;
  }
  console.log(mm);
  printCalendar(yyyy, mm);
});

// 객체, 메소드 =>
function printDay(now = new Date()) {
  //콘솔에 요일정보를 출력하는 함수
  switch (now.getDay()) {
    case 0:
      console.log("일요일");
      break;
    case 1:
      console.log("월요일");
      break;
    case 2:
      console.log("화요일");
      break;
    case 3:
      console.log("수요일");
      break;
    case 4:
      console.log("목요일");
      break;
    case 5:
      console.log("금요일");
      break;
    case 6:
      console.log("토요일");
      break;
  }
}
printDay(today);
printDay(new Date("2025-12-26")); //그냥 입력하면 오류뜸
