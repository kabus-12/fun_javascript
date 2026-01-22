//promise2.js
function orderMenu(menu) {
  return new Promise((resolve, reject) => {
    console.log(`${menu}를 주문받았습니다.`);
    if (menu == "라면") {
      resolve(`${menu}를 완성했습니다.`);
    } else {
      reject(`매진되었습니다.`);
    }
  });
}

function delivery() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("손님에게 전달");
    }, 2000);
  });
}

orderMenu("돈까스") //반환해주는 값이 promise객체
  .then((data) => {
    console.log(data);
    return delivery();
  }) //로그출력
  .then((data) => console.log(data))
  .catch((err) => console.error(err)); //에러출력

//async,await
async function orderFood() {
  await orderMenu("라면");
  let result = await delivery();
  console.log(result);
}
orderFood();
