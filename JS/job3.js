const str = "Hello";
const reverse = [...str].reduce((prev,next)=>next+prev);
console.log(reverse);

/*Дана строка. Необходимо вывести в консоль перевёрнутый вариант. 
Например, "Hello" -> "olleH".*/
