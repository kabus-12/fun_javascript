//post.js
//1.fetch글목록 출력하기
const fields = ["id", "title", "author"];
const target = document.querySelector("#postList");
let max_id = 0; //신규글번호
fetch("http://localhost:3000/posts")
  .then((resp) => resp.json())
  .then((data) => {
    // 데이터 건수만큼 tr 생성해주기.
    data.forEach((elem) => {
      target.appendChild(makeTr(elem));
    });
    max_id = data.reduce((acc, elem) => {
      return acc > elem.id ? acc : elem.id;
    }, 0);
  })
  .catch((err) => console.log(err));

//등록이벤트
document
  .querySelector('form[name="addForm"]')
  .addEventListener("submit", (e) => {
    e.preventDefault(); //프리벤트해줘야지 등록을 했을때 페이지에 남아있음
    //title,author =>입력값
    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;

    //fetch.Post요청처리
    fetch("http://localhost:3000/posts/", {
      method: "post",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify({ id: "" + (Number(max_id) + 1), title, author }),
    })
      .then((resp) => resp.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  });
//저장버튼 이벤트
function closeModal() {
  //데이터를 저장
  const no = document.querySelector("#modalNo").textContent;
  const title = document.querySelector("#modalTitle").value;
  const author = document.querySelector("#modalAuthor").value;
  fetch("http://localhost:3000/posts/" + no, {
    method: "put",
    headers: { "content-Type": "application/json" },
    body: JSON.stringify({ title, author }),
  })
    .then((resp) => resp.json())
    .then((data) => {
      console.log(data);
      document.querySelector(".modal-overlay").style.display = "none";
    })
    .catch((err) => console.log(err));
}
// tr생성함수.
function makeTr(post) {
  let tr = document.createElement("tr");
  tr.addEventListener("dblclick", (e) => {
    document.querySelector(".modal-overlay").style.display = "block";
    document.querySelector("#modalNo").textContent = post.id;
    document.querySelector("#modalTitle").value = post.title;
    document.querySelector("#modalAuthor").value = post.author;
  });
  for (let field of fields) {
    let td = document.createElement("td");
    td.innerText = post[field];
    tr.appendChild(td);
  }
  let td = document.createElement("td");
  let btn = document.createElement("button");
  btn.innerText = "삭제"; // 텍스트.
  btn.className = "btn btn-danger"; // 클래스 지정.
  btn.setAttribute("data-no", post.id); // 속성추가.
  btn.addEventListener("click", function (e) {
    // btn의 data-no속성의 값 가져오기.
    const no = this.dataset.no; // data-no의 속성값.

    // fetch(삭제는 delete요청) 호출 start.
    fetch("http://localhost:3000/posts/" + no, {
      method: "delete",
    })
      .then((resp) => resp.json())
      .then((data) => {
        // 화면삭제를 해야하지만 화면이 refresh되면서 목록을 새로 가져옴.
        tr.remove();
      })
      .catch((err) => console.log(err));
    // fetch(삭제는 delete요청) 호출 end.
  });
  td.appendChild(btn);
  tr.appendChild(td);

  return tr;
}

//-------------------내가한거(ㅈ망)---------------------

// fetch("http://localhost:3000/posts/")
//   .then((resp) => resp.json())
//   .then((data) => {
//     data.forEach((elem) => {
//       console.log(elem);
//       let tr = document.createElement("tr");
//       for (let field of fields) {
//         let td = document.createElement("td");
//         td.innerText = elem[field];
//         tr.appendChild(td);
//       }
//       target.appendChild(tr);
//       let btn = document.createElement("button");
//       btn.innerText = "삭제"; //텍스트
//       btn.className = "btn btn-danger"; //클래스지정
//       btn.setAttribute("data-no", post.id); //속성추가
//       btn.addEventListener("click", function (e) {
//         //btn의 data-no속성의 값 가지고오기
//         const no = this.dataset.no;
//         // fetch(삭제는 delete요청) 호출 start.
//         fetch("http://localhost:3000/" + no, {
//           method: "delete",
//         })
//           .then((resp) => resp.json())
//           .then((data) => {
//             //화면삭제를 해야하지만 화면이  refresh되면서 목록을 새로 가져옴.
//             tr.remove();
//           })
//           .catch((err) => console.log(err));
//         // fetch(삭제는 delete요청) 호출 end.
//       });
//       td.appendChild(btn);

//     });
//   })
//   .catch((err) => console.log(err));
