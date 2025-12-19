//화살표함수(ES6)

//데이터유형(객체,배열)

//이벤트
//화면영역에서 키보드 마우스 => 동작 - 이벤트 - 이벤트핸들러(함수)

//과제
//친구정보를 관리해주는 데이터
//친구(이름, 연락처, 생일:08(년)-20(월)-12(일) , 키: 163.5)
//4명 생성 = friends배열에 저장.
//친구평균키: ---.- 제일큰키 구해보고 184.2(이름)
//테이블태그를 활용해서 화면에 document.write()표만들기

let friends = [
  {name: "홍길동", phone:"010-1111-1111", birthday:"08-12-12",stature:163.5},
  {name: "김길동", phone:"010-2222-2222", birthday:"09-11-13",stature:170.4},
  {name: "박길동", phone:"010-2222-2222", birthday:"09-11-13",stature:172.8},
  {name: "금길동", phone:"010-2222-2222", birthday:"09-11-13",stature:162.1},
]
let sta = 0;
let average = 0;
let topstature=0;
let id = 0;
for(let i = 0; i< friends.length;i++){
  sta += friends[i].stature;
  if(topstature< friends[i].stature){
    topstature = friends[i].stature;
    id = friends[i].name;
  }
};
average = sta / friends.length;
console.log(`친구평균키: ${average}, 가장큰키: ${topstature}(${id})`);

let htmlStr = `<h2>친구</h2><table border = "2">
<thead>
<tr>`;
htmlStr += `<th> 이름 </th>
<th> 연락처 </th>
<th> 생일 </th>
<th> 키 </th>`;
htmlStr += `</tr>
</thead>
<tbody>`;
for(let friend of friends){
  htmlStr += `<tr>
  <td>${friend.name}</td>
  <td>${friend.phone}</td>
  <td>${friend.birthday}</td>
  <td>${friend.stature}</td>
  </tr>`;
}
htmlStr += `</tbody></table>`;

document.writeln(htmlStr);

//참고 사이트 mdn (알고싶은 함수 검색시 함수에 관한 정보를 알 수 있는 사이트)

//집가서 git pull origin main 꼭하고 시작하기

//끝나고 git add .
//git commit -m "1219숙제완료"
//git push -u origin main 잊지않고 하기
