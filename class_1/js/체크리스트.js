//체크리스트.js

document.querySelector("#add.addBtn").addEventListener("click", (e) => {
  let ary = new Array();
  ary.push(document.querySelector("#item").value);
  console.log(ary);

  document.querySelector("#item").focus();
  document.querySelector("#item").value = "";

  let di = document.querySelector("#itemList");
  let ulTag = document.createElement("ul");
  di.appendChild(ulTag);
  let liTag = document.createElement("li");
  ulTag.appendChild(liTag);
  liTag.innerText = ary;
  let dltBtn = document.createElement("button");
  dltBtn.innerText = "X";
  dltBtn.className = "close";
  liTag.appendChild(dltBtn);

  // if (ary == liTag.innerText) {
  //   alert("중복된 문자가 있습니다");
  // }

  dltBtn.addEventListener("click", (e) => {
    e.target.parentElement.remove();
    return;
  });
});
