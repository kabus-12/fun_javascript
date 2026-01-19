//distructuring2.js

fetch("js/data2.json")
  .then((resp) => resp.json()) //데이터를 받아온다
  .then((data) => {
    data.forEach(({ id, first_name, salary }) => {
      const con = document.querySelector("#list");
      let Str = { id, first_name, salary };
      let liStr = document.createElement("li");
      liStr.innerHTML = `넘버: ${Str.id}  이름: ${Str.first_name}  급여: ${Str.salary}`;
      con.appendChild(liStr);
      console.log(liStr);
    });
  })
  .catch((err) => console.log(err));
