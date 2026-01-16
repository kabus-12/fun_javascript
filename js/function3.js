console.log(`function2 =>`, ary1);

let totalCnt = 100;
let page = 1; //현재페이지

/////////////////////////함수//////////////////////////////////////

//함수(member => tr>td:(ID),td(FirstName),td(LastName),td(salary))
function makeTr(member) {
  console.log(member);
  const trStr = `<tr>
     <td>${member.id}</td>
     <td>${member.first_name}</td>
     <td>${member.last_name}</td>
     <td>${member.gender}</td>
     <td>${member.salary}</td>
     </tr>`;
  return trStr;
  // const fields = ["id", "first_name", "last_name", "gender", "salary"];
  // for (let field of fields) {
  //   console.log(field);
  //   const trStr = `<tr>
  //   <td>${member.field}</td>
  //   <td>${member.field}</td>
  //   <td>${member.field}</td>
  //   <td>${member.field}</td>
  //   <td>${member.field}</td>
  //   </tr>`;
  // }

  // const trTag = document.createElement("tr"); //tr태그 생성 <tr></tr>
  // // td*4생성
  // for (let field of fields) {
  //   tdTag = document.createElement("td"); //td태그 생성 <td></td>
  //   tdTag.innerText = member[field]; //member.field도 가능
  //   trTag.appendChild(tdTag);
  // }
  // const btn = document.createElement("button");
  // btn.className = "btn btn-danger";
  // btn.innerText = "삭제";
  // trTag.appendChild(btn);
  // return trTag;
}

//멤버 수만큼 tr생성
const target = document.querySelector("#target");

//페이지별 건수
const pageSize = 5;
//페이지별로 목록을 보여주는 함수
function showPageList(pg = 1) {
  target.innerText = "";
  //pg = 1 초기값  변수가 들어오지 않으면 1로 적용하겠다
  let page = pg; //페이지 정보
  let start = (page - 1) * pageSize; // 0
  let end = page * pageSize; // 10
  let pageAry = ary1.slice(start, end);

  //배열의 건수만큼 화면에 출력
  for (let elem of pageAry) {
    const newTr = makeTr(elem);

    target.innerHTML += newTr;
  }
} //end of showPageList

showPageList();

//페이징 목록 생성
function generatePagingList() {
  //기존목록 지우기
  //<li class="page-item"><a class="page-link" href="#">1</a></li>
  let ulPagination = document.querySelector("ul.pagination");
  ulPagination.innerHTML = "";

  let realEnd = Math.ceil(totalCnt / pageSize); //건수계산 마지막 페이지
  let startPage = 1, //시작페이지
    endPage = 10; //마지막페이지
  let prev = false, //이전페이지 여부
    next = false; //이후페이지

  //현재페이지 기준으로 계산
  endPage = Math.ceil(page / 10) * 10;
  startPage = endPage - 9;
  endPage = endPage > realEnd ? realEnd : endPage; //실제마지막페이지보다 작음
  prev = startPage == 1 ? false : true; //이전, 이후 페이지 계산
  next = endPage < realEnd ? true : false; // realEnd가 토탈컷(100)/pageSize(5) =20이니깐 endPage(끝페이지 20)이면 비활성화!
  //1~10반복하면서

  //<1.previous>생성
  const prevStr = `<li class="page-item ${prev ? "" : "disabled"}">
        <a class="page-link" data-page="${startPage - 1}">Previous</a>
      </li>`;
  ulPagination.insertAdjacentHTML("beforeend", prevStr);

  //<2.페이지 수만큼 출력>
  for (let p = startPage; p <= endPage; p++) {
    //prev
    const pageStr = `<li class="page-item ${p == page ? "active" : ""}"
                      aria-current=${p == page ? "page" : ""}
                      >
                      <a class="page-link" href="#" data-page=${p}>${p}</a>
                    </li>`;
    ulPagination.insertAdjacentHTML("beforeend", pageStr);
  }
  //<3.next 생성>
  const nextStr = `<li class="page-item ${next ? "" : "disabled"}">
        <a class="page-link" href="#" data-page = ${endPage + 1}>Next</a>
      </li>`;
  ulPagination.insertAdjacentHTML("beforeend", nextStr);
} //end of generatePagingList()
generatePagingList();

///////////////이벤트/////////////////
document.querySelector("ul.pagination").addEventListener("click", (e) => {
  //클릭되는 대상 파악하기
  let selectPage = 1;
  if (e.target.tagName == "A") {
    selectPage = e.target.dataset.page; //<a data-img = "" data-page = "1">1</a>
    page = selectPage;
    generatePagingList();
    //페이지별 회원목록
    showPageList(selectPage);
  }
});
document.querySelector(".btn-danger").addEventListener("click", (e) => {
  console.log(e);
});
//////////////////////////////////////
