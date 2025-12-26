// productpage.js

console.log(products);

//category 중복제거 후 배열에 저장
let categories = [];
for (let i = 0; i < products.length; i++) {
  if (categories.indexOf(products[i].category) == -1) {
    categories.push(products[i].category);
  }
}
//화면에 카테고리 추가
const selectCategories = document.querySelector("select.categories");
categories.forEach((elem) => {
  //<option value = '값'>전자기기</option>
  let opt = document.createElement("option");
  opt.innerText = elem;
  opt.setAttribute("value", elem); //<option value='전자기기'>...</option>
  selectCategories.appendChild(opt); //<select>하위요소등록
});

//목록출력
const target = document.querySelector("#list"); //tbody의 dom의 정보
showProductList(products);

//////////////////이벤트//////////////////

selectCategories.addEventListener("change", (e) => {
  const selectValue = e.target.value;
  console.log(e.target.value);
  //카테고리가 같은 상품만 배열에 저장.
  const filterProducts = products.filter(
    (elem) => elem.category == selectValue
  );
  //함수호출
  showProductList(filterProducts);
});

//'조회'버튼을 클릭하면
//filter메소드를 활용해서 목록을 showProductList함수를 활용해서 출력
document.querySelector("button").addEventListener("click", (e) => {
  const search = document.querySelector("input").value;
  console.log(search);

  const filtersearch = products.filter((elem) => {
    console.log(elem.productName);
    return elem.productName.indexOf(search) >= 0;
  });

  showProductList(filtersearch);
});

///////////////////함수////////////////////

function showProductList(productAry = []) {
  //기존목록을 비우고 출력
  target.innerHTML = "";
  productAry.forEach((elem) => {
    let tr = document.createElement("tr");

    ["productCode", "productName", "purchasePrice", "category"].forEach(
      (field) => {
        let td = document.createElement("td");
        td.innerText = elem[field]; //상품코드, 상품명, 가격, 카테고리
        tr.appendChild(td);
      }
    );
    target.appendChild(tr);
  });
}
