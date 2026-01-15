console.log(`function2 =>`, ary1);

//함수(member => tr>td:(ID),td(FirstName),td(LastName),td(salary))

function makeTr(member) {
  const fields = ["id", "first_name", "last_name", "gender", "salary"];
  const trTag = document.createElement("tr"); //tr태그 생성 <tr></tr>
  // td*4생성
  for (let field of fields) {
    tdTag = document.createElement("td"); //td태그 생성 <td></td>
    tdTag.innerText = member[field]; //member.field도 가능
    trTag.appendChild(tdTag);
  }
  return trTag;
}

//멤버 수만큼 tr생성
const target = document.querySelector("#target");
for (let elem of ary1) {
  const newTr = makeTr(elem);
  target.appendChild(newTr);
}
