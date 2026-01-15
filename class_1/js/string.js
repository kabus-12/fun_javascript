// string.js
["LG 노트북", "삼성 노트북", "모니터", "마우스"].forEach((elem) => {
  if (elem.indexOf("노트북") >= 0) {
  }
  console.log(elem.indexOf("노트북"));
});

let str = "hello, world";
//1. substring(start_index, end_index) (서브스트링)
console.log(str.substring(1, 3)); //1~2까지의 문자만 들고와 출력해서 콘솔에 el이 나옴
console.log(str.substring(0, 5)); //end_index는 포함하지 않음
console.log(str.substring(7)); //매개값이 하나뿐이면 그 위치에서 마지막까지 출력

//2. indexOf(찾을 문자열)=>인덱스 반환 //문자열 찾기
console.log(str.indexOf(","));
console.log(str.substring(0, str.indexOf(",")));

//3. trim()  //공백 제거
console.log(" Hello, World  ".trim());

//4. replace(a,b);  //a문자열 => b문자열로 바꾸겠다
console.log("hello, world".replace("world", "WORLD"));

//5. split(구분자) => 배열
let strAry = "apple, banana, cherry".split(",");
console.log(strAry);

//6. charAt(index) => 문자열 반환.
console.log("welcome home".charAt(2));

//"980503-1453212", "030505-4567123","9910122345123";

function checkGender(jumin) {
  //내가한것
  // if (jumin.charAt(6) != "-") {
  //   let retouch = jumin.substring(0, 6) + "-" + jumin.substring(6);
  //   jumin = retouch;
  // }
  // if (jumin.charAt(7) == 1 || jumin.charAt(7) == 3) {
  //   console.log("남자입니다.");
  // } else if (jumin.charAt(7) == 2 || jumin.charAt(7) == 4) {
  //   console.log("여자입니다.");
  // } else {
  //   console.log("잘못입력하였습니다");
  // }

  //강사님이 한것
  let pos = 7;
  if (jumin.length == 13) {
    //문자열 크기로 조건
    pos = 6;
  }
  switch (jumin.charAt(pos)) {
    case "1":
    case "3":
      console.log("남자입니다.");
      break;
    case "2":
    case "4":
      console.log("여자입니다.");
      break;
    default:
      console.log("잘못된 값입니다.");
  }
}

checkGender("980503-1453212");
checkGender("030505-4567123");
checkGender("9910122345123");
