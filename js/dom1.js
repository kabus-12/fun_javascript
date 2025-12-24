//dom1.js
console.log(document.querySelectorAll("div#detail>ul>li"));
//1.element node, 2.text node 3.attribute node
// <li id="first">Apple</li> => li:element node  Apple:text node id="first": attribute node

//element node를 만드는 메소드: createElement();
let liTag = document.createElement("li"); //<li></li> 를 만듦
// let txt = document.createTextNode("Apple"); //"Apple" 텍스트를 만듦
// liTag.appendChild(txt); // <li>Apple</li>
liTag.innerText = "Apple";

console.log(liTag);

//ul에 자식요소로 등록 <ul>...<li>Apple</li></ul> 이렇게 만들어졌을것

document.querySelector("div#detail>ul").appendChild(liTag);
