//student.js
let students = [
  { studNo: "25-001", studName: "홍길동", score: 90 },
  { studNo: "25-002", studName: "김길동", score: 80 },
  { studNo: "25-003", studName: "최길동", score: 70 },
];
//기존의 tbody의 html삭제
const target = document.querySelector("div.list tbody");
target.innerHTML = "";

makeList();

//////////////////// 이벤트 //////////////////////////

//등록버튼
console.log(document.querySelector('button[class *="success"]'));
document
  .querySelector('button[class *= "success"]')
  .addEventListener("click", (e) => {
    const studNo = document.querySelector("#studNo").value;
    const studName = document.querySelector("#studName").value;
    const score = document.querySelector("#score").value;
    //항목을 입력하지 않으면 -> 입력하세요
    if (!studNo || !studName || !score) {
      alert("덜입력했누");
      return;
    }
    //중복값체크
    // for (let student of students) {
    //   if (student.studNo == studNo) {
    //     alert("중복된 번호가 있누.");
    //     return;
    //   }
    // }
    //some : 1개요소라도 특정조건을 충족하는지 every : 모든 요소가 조건을 충족하는지
    let exists = students.some((elem) => elem.studNo == studNo); //아래거와 똑같음
    // if (elem.studNo == studNo) {
    //   return true;
    // }
    // return false;
    if (exists) {
      alert("같은 학생이 있다우");
      return;
    }
    students.push({ studNo, studName, score });
    makeList();
    // target.appendChild(makeTr({ studNo, studName, score })); //속성 = 변수 => 줄임말
  });

//취소버튼
document
  .querySelector('button[class *="secondary"')
  .addEventListener("click", (e) => {
    let del = document.getElementsByClassName("form-control");
    for (i = 0; i < del.length; i++) {
      del[i].value = "";
    }
  });
////////////////////  함수 ///////////////////////////

//배열 => 화면에 출력하는 기능
function makeList() {
  target.innerHTML = ""; //기존목록 지우기
  //학생 수만큼 생성
  for (let i = 0; i < students.length; i++) {
    //
    let tr = makeTr(students[i]);
    //div.list tbody의 하위요소로 추가
    target.appendChild(tr);
  }
} //end of makeList

// 학생정보 -> tr 생성해주는 함수
function makeTr(student = {}) {
  let fields = ["studNo", "studName", "score"];
  // tr 생성
  let tr = document.createElement("tr");
  for (let prop of fields /*in student)*/) {
    //객체 of 배열 in
    // td 생성
    let td = document.createElement("td");
    td.innerText = student[prop];
    tr.appendChild(td); //자식으로 들어가잇!
  }
  let td = document.createElement("td");
  let butt = document.createElement("button");
  butt.innerText = "삭제";
  butt.className = "btn btn-danger"; //클래스 생성
  td.appendChild(butt);
  tr.appendChild(td);

  butt.addEventListener("click", deleteRowFnc);
  butt.setAttribute("data-sno", student.studNo); //<button data-sno= "20-001">...</button>

  // butt.addEventListener("click", (e) => {
  //   e.target.parentElement.parentElement.remove(); //parentElement를 두번쓰면 button->td->tr로 처리된다
  // }); //이건 화면만 지우는것 배열은 남아있음

  // let retouch = document.createElement("button");
  // retouch.innerText = "수정";
  // td.appendChild(retouch);
  // retouch.className = "btn btn-info";
  // retouch.addEventListener("click",(e)=>{
  //   e.target.parentElement.
  // })
  //반환
  return tr;
}

//삭제버튼에 이벤트핸들러 //이건 배열도 남지않는 삭제방법
function deleteRowFnc(e) {
  let delNo = this.dataset.sno; //삭제할 학생번호
  students = students.filter((elem) => elem.studNo != delNo); //조건을 만족하는 배열 생성
  makeList();
}
