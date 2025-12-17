//operator.js
console.log('asdfasdfasfsdf');

let result = 10 > 5;
result = 10 == 11;

let num1 = 10; //숫자
let num2 = 25;
let str1 = '10'; //문자

result = num1 < num2;
console.log('num1 보다 num2가 크다 : ' + result);

result = num1 <= num2;
console.log('num1 보다 num2가 크거나 같다 : ' + result);

result = num1 >= num2;
console.log('num1 보다 num2가 작거나 같다 : ' + result);

result = num1 > num2;
console.log('num1 보다 num2가 작다 : ' + result);

result = num1 == str1;
console.log('num1 와 str1는 같다 : ' + result);

result = num1 === str1;
console.log('num1 와 str1는 연산값이나 자료형이 같다 : ' + result);

result = num1 != str1;
console.log('num1 와 str1는 다르다 : ' + result);

result = num1 !== str1;
console.log('num1 와 str1는 연산값이나 자료형이 다르다 : ' + result);

//논리 연산자
result = num1 > num2 || num1 == str1; //OR연산자
console.log(result); //연산자중 하나만 true여도 true가 된다

result = num1 > num2 && num1 == str1; //AND연산자
console.log(result); //연산자 모두 true여야 true로 출력이 된다 

result = !(num1 > num2 && num1 == str1); //NOT연산자
console.log(result); //연산자의 반대값을 지정한다 (true면 false가 false면 true가 출력)

result = !result;
console.log(result);

result = !result;
console.log(result);

console.log('a'.charCodeAt(0)); //아스키코드를 알아볼 수 있다
console.log('A'.charCodeAt(0));

