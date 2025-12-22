//array3.js
//배열.filter(). => true 반환해주는 요소를 새로운 배열에 추가.
let filterAry = [10, 20, 30, 40, 50].filter((elem) => {
  return elem >= 30;
});
console.log(filterAry);

const friends = ["박상원", "장수연", "양현규", "정찬우", "서영준"];

//삭제할 친구이름 입력 => 제거, 없으면 warrning 띄우기

//1. 이름입력
const id = prompt(`제거할 친구를 입력해주세요`);
//2. 입력한 값을 friends배열에서 찾기
let indx = friends.indexOf(id);
//3.입력한 이름과 같은 값은 걸러내고 아닌 값만 새로운 배열에 담기
if (indx == -1) {
  console.log(`warning : 찾는 이름이 없습니다.`);
} else {
  //friends.splice(idx, 1);
  const filterFriends = friends.filter((elem, idx) => {
    //return indx != idx; //fileterFriends에게 indx값을 제외한 idx값을 돌려줘라(index기준)
    return elem != id; //배열기준으로 하는 방법
  });
  console.log(`${id}를 제거하고 ${filterFriends} 남았습니다`);
}
