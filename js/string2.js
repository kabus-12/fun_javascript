//string2

const str = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione dicta, nemo illo nobis quam a veniam! Totam, error. Ab harum aperiam labore explicabo saepe! Obcaecati quas officia molestiae tenetur dignissimos?`;
const strAry = str.split(" ");
console.log(strAry);

//문자열 생성
const container = document.querySelector("div.container");
for (let word of strAry) {
  let span = document.createElement("span");
  span.innerHTML = word;
  container.appendChild(span);
}

///////////////////////////////////////////////////////////
//1.버튼에 클릭이벤트 등록
document
  .querySelector("button.btn.btn-secondary")
  .addEventListener("click", () => {
    //2.사용자 입력값 체크.
    const search = document.querySelector("#user_input");
    const uesrsearch = search.value;
    if (!uesrsearch) {
      alert("값을 입력해주세요");
      return;
    }
    //3.화면의 span요소를 가져와서 사용자의 입력값과 비교 => remove()
    const idx = document.querySelectorAll("div.container>span");
    for (let span of idx) {
      if (span.textContent.indexOf(uesrsearch) != -1) {
        span.remove();
      }
    }
    search.value = "";
    search.focus();
  });

// let seconds = 5;
// let job = setInterval(()=>{
//   console.log(seconds--)
//   if(seconds<0){
//     clearInterval(job); //종료
//   }
// },1000);
