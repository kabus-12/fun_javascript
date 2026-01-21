//resolve,reject

let orderMenu = "라면";

const p1 = new Promise((resolve, reject) => {
  if (orderMenu == "라면") {
    resolve("주문완료");
  } else {
    reject("주문취소");
  }
});

p1.then((data) => {
  console.log(data);
}).catch((err) => console.log(err));

const f1 = fetch("js/data.json");

f1.then((data) => data.json()) //Promise 타입.
  .then((data) => "hello")
  .then((data) => console.log(data))
  .catch((err) => console.error(err));
