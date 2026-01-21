//promise.js
//1) pending 2)fulfilled 3) rejected 상태
const promise = new Promise(function (resolve, reject) {
  console.log("promise 생성");
  //resolve("OK"); //then에 출력
  reject("err"); //catch에 출력
});

//비동기처리
promise
  // .then(function (data) {
  //   console.log(data);
  // })
  .then((data) => {
    console.log(data);
  })
  .catch(function (err) {
    console.log(err);
  });

let count = 1; // 2배 -> 더하기 3 -> 빼기 1 => 출력

const p1 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    count = count * 2;
    resolve(count);
  }, 1000); //1)실행함수 2)인터벌 => 대표적인 비동기함수
});
p1.then((data) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      count = data;
      count = count + 3;
      resolve(count);
    }, 1000);
  });
})
  .then((data) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        count = data;
        count = count - 1;
        resolve(count);
      }, 1000);
    });
  })
  .then((data) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(`count는 ${count}`);
        resolve(count);
      }, 100);
    });
  });

setTimeout(() => {
  count = count - 1;
}, 1000); //1)실행함수 2)인터벌 => 대표적인 비동기함수

setTimeout(() => {
  console.log(`count는 ${count}`);
}, 10); //1)실행함수 2)인터벌 => 대표적인 비동기함수
