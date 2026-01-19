//string.js
//문자열 메소드
let pos = "Hello, World".indexOf("o"); //문자에 없는 값을 넣으면 -1로 출력된다

console.log(pos);

//indexOf 인덱스 반환 vs includes true/false 반환
const names = ["홍길동", "박인기", "박길동"];
let cnt = 0;
for (let name of names) {
  if (name.indexOf("길동") != -1) {
    cnt++;
  }
}

console.log(`길동은 ${cnt}명 입니다`);

let cnt2 = 0;
for (let name of names) {
  if (name.includes("길동")) {
    cnt2++;
  }
}

console.log(`길동은 ${cnt2}명 입니다`); //위 indexOf랑 값이 똑같다
//filter() => 조건을 만족하는 값을 새로운 배열로 만들어 준다
const newNames = names.filter((elem) => elem.indexOf("길동") != -1);

console.log(newNames);

const newNames2 = names.filter((elem) => elem.includes("길동"));

console.log(newNames2);

//slice(시작위치,시작부터 입력값까지) 출력
console.log("Hello, World".slice(-2, -1));

const now = new Date(); //시스템의 시간
console.log(now);

const yyyy = now.getFullYear();
console.log(yyyy);
now.setMonth(9);
const mm = now.getMonth() + 1;
now.setDate(3);
console.log(mm);
const dd = now.getDate();
console.log(dd);
console.log(`${yyyy}-${("0" + mm).slice(-2)}-${("0" + dd).slice(-2)}`);

const hello = "hello".toUpperCase();
console.log(hello);

const HELLO = "HELLO".toLowerCase();
console.log(HELLO);

console.log(hello.startsWith("HE")); //시작값이 HE인가? trus 아니면 false나옴
console.log(hello.endsWith("O")); //끝값이 O인가? trus 아니면false나옴
console.log(hello.repeat(3)); //HELLO가 3번 붙어서 출력된다
