const name = "zain"
const repoCount = 50 
console.log(name + repoCount + "value"); //old 

console.log(`hello my name is ${name} and my repo is ${repoCount} `); //advance


const gameNAme = new String("zain")

// const name = "hitesh"
// const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('zain-hc-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   zain    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://zain.com/zain%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));