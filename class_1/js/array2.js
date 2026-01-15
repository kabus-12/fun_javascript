//array2.js

const nameAry = new Array();
nameAry.push("홍길동");
nameAry.unshift("김씨", "홍씨", "박씨");
nameAry.splice(1, 0, "구씨");

nameAry.sort(); //가나다순으로 정렬한다.
nameAry.reverse(); //역순으로 정렬

// 홍씨,홍길동,박씨,김씨,구씨
// 입력 받아서 친구의 이름을 목록에서 삭제

let idx = nameAry.indexOf("김진황"); //찾는 값의 인덱스를 반환 //-1이 출력되면 없다는 뜻
// console.log(idx);

// nameAry.forEach((elem) => {
//   console.log(elem);
// });

let search = prompt("삭제할 이름을 입력해주세요");
let index = nameAry.indexOf(search);
if (index == -1) {
  //-1이 indexOf검색시 없을때 출력되는 값이니깐 -1을 조건으로 걸면 된다
  console.log(`Warning : 등록되지 않은 이름입니다.`);
} else {
  console.log(`${search}를 삭제했습니다.`);
  nameAry.splice(index, 1);
}
