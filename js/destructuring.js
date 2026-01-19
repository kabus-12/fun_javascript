//distructuring.js //디스트럭처링
const obj = {
  name: "Hong",
  age: 20,
};
//let name = obj.name;
//let age = obj.age;
let { name, age } = obj;

console.log(`1. 이름: ${name} 나이: ${age}`);

//fetch 함수(비동기방식)
//ajax(Asynchronous Javascript And Xml의 줄임말)
fetch("js/data.json")
  .then((resp) => resp.json())
  .then(({ name, age }) => {
    console.log(`2. 이름: ${name} 나이: ${age}`);
  })
  .catch((err) => {
    console.log(err);
  });

//배열의 구조분해
const names = ["Hong", "Hwang", "Choi"];
// const fname = name[0]
const [name1, name2, name3] = names;
console.log(`${name1}, ${name2}, ${name3}`);

const [name4, name5] = names;
console.log(`${name4}, ${name5}`);

//비동기 처리
setTimeout(() => {
  console.log("1");
  setTimeout(() => {
    console.log("2");
    setTimeout(() => {
      console.log("3");
      console.log("4");
    }, 1500);
  }, 50);
}, 1000);
