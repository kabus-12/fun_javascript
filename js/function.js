//함수
//let myName = 10; //함수 x
//함수 정의(sumArray);
function sumArray(ary = []) {
  //함수 O //매개값으로 배열을 받겠다
  //배열요소의 합을 반환
  let sum = 0;
  for (let num of ary) {
    sum += num;
  }
  return sum;
}

let result = sumArray([1, 2, 3, 4, 5]);
console.log(`결과값은 ${result}입니다`);

//정의 : 함수표현식
const getMax = function (ary = []) {
  //배열요소에서 max값을 반환
  let max = 0;
  for (let elem of ary) {
    if (max < elem) {
      //max의 값보다 elem의 값이 크면 max에 할당
      max = elem;
    }
  }
  return max;
};

result = getMax([50, 60, 70, 80, 40]);
console.log(`이 배열의 최대값은 ${result}입니다`);

//정의 : 화살표 함수
// const getMin = (n1, n2) => {
//   return n1 > n2 ? n2 : n1; //아래 if문과 같은 뜻
//   if (n1 > n2) {
//     return n2;
//   } else {
//     return n1;
//   }
// };
const getMin = (n1, n2) => (n1 > n2 ? n2 : n1); //위 주석을 줄여서 쓰는 법
result = getMin(23, 17);
console.log(`최소값은  ${result}입니다`);

//39p 40p
function greet(name) {
  console.log("hello " + name);
}
greet("Alberto"); //hello Alberto

let myInt = 1;
function increase(value) {
  return (value += 1);
}
console.log(myInt); //1
console.log(increase(myInt)); //2
console.log(myInt); //1

let myCar = {
  maker: "bmw",
  color: "red",
};

console.log(myCar);
//{maker: "bmw",color: "red"}
function changeColor(car) {
  car.color = "blue";
}
changeColor(myCar);
console.log(myCar);
//{maker: "bmw",color: "blue"}

//함수,배열,객체 ==> 평균나이 구하는 함수

function getAverageAge(persons = []) {
  //객체 배열을 매개값으로 받아서 평균나이를 반환
  if (!Array.isArray(persons)) {
    return 0; //배열이 아니면 ...0을 반환하고 종료
  }
  let average = 0;
  for (let elem of persons) {
    average += elem["age"];
  }
  const avg = average / persons.length;
  return avg;
}
//함수 안에서 배열안의 값을 다 구해서 나와야하네

const manyPeople = [
  { name: "홍길동", age: 20 },
  { name: "박민수", age: 33 },
  { name: "최태영", age: 27 },
  { name: "홍성식", age: 17 },
];

//함수 호출
result = getAverageAge(manyPeople);
console.log(`평균나이는 ${result}입니다.`);

//json문자열 데이터
const jsonData = `[{"id":1,"first_name":"Leroi","last_name":"Polly","email":"lpolly0@harvard.edu","gender":"Male","salary":19666},
{"id":2,"first_name":"Merrile","last_name":"Williamson","email":"mwilliamson1@trellian.com","gender":"Female","salary":14485},
{"id":3,"first_name":"Jeanette","last_name":"Coughan","email":"jcoughan2@cbc.ca","gender":"Female","salary":2276},
{"id":4,"first_name":"Raven","last_name":"Edgerly","email":"redgerly3@tiny.cc","gender":"Female","salary":18526},
{"id":5,"first_name":"Lavinie","last_name":"Bibbie","email":"lbibbie4@amazonaws.com","gender":"Female","salary":9189},
{"id":6,"first_name":"Norris","last_name":"Tunaclift","email":"ntunaclift5@e-recht24.de","gender":"Male","salary":12347},
{"id":7,"first_name":"Archer","last_name":"Bryson","email":"abryson6@gov.uk","gender":"Male","salary":3317},
{"id":8,"first_name":"Crysta","last_name":"Schindler","email":"cschindler7@miibeian.gov.cn","gender":"Female","salary":15290},
{"id":9,"first_name":"Stevie","last_name":"Klarzynski","email":"sklarzynski8@springer.com","gender":"Male","salary":13101},
{"id":10,"first_name":"Calley","last_name":"Hachette","email":"chachette9@google.ru","gender":"Female","salary":16827},
{"id":11,"first_name":"Ashly","last_name":"Lydiate","email":"alydiatea@tamu.edu","gender":"Female","salary":13137},
{"id":12,"first_name":"Margi","last_name":"Boake","email":"mboakeb@ucla.edu","gender":"Genderqueer","salary":9249},
{"id":13,"first_name":"Jess","last_name":"Gopsill","email":"jgopsillc@goo.gl","gender":"Female","salary":4704},
{"id":14,"first_name":"Jody","last_name":"Giovannilli","email":"jgiovannillid@networkadvertising.org","gender":"Male","salary":2110},
{"id":15,"first_name":"Emlynn","last_name":"Zecchii","email":"ezecchiie@mit.edu","gender":"Female","salary":10075}]`;

const memberAry = JSON.parse(jsonData); //문자열 -> 객체 변환
console.log(memberAry);

let sum = 0; //memberAry급여 합
let sumOfMale = 0;
let avg = 0; //전체평균
let avgOfMale = 0; //남자평균
let cntOfMale = 0;
// for (let i = 0; i < memberAry.length; i++) {
//   sum += memberAry[i].salary;
// }
for (let elem of memberAry) {
  sum += elem.salary;
}
avg = sum / memberAry.length;
console.log(`모든사원의 월급의 합은 ${sum}원이고 평균은 ${avg}원입니다.`);

for (let elem of memberAry) {
  if (elem.gender == "Male") {
    sumOfMale += elem.salary;
    cntOfMale++;
  }
}
avgOfMale = sumOfMale / cntOfMale;
console.log(
  `남자사원의 월급 합은 ${sumOfMale}원이고 평균은 ${avgOfMale}원입니다.`
);
