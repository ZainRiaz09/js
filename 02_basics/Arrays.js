// array

const MyArray = [0, 1, 2, 3, 4, 5, 6]


MyArray.push(7)
MyArray.push(9)
// MyArray.pop()
 
MyArray.unshift(1)
MyArray.shift()



// console.log(MyArray);


// console.log(MyArray.includes(5));
// console.log(MyArray.indexOf(6));

// const newArr = MyArray.join()
// console.log(newArr);


//slice , splice

console.log("A", MyArray);

const myn1 = MyArray.slice(1, 3)

console.log(myn1);
console.log("B ", MyArray);


const myn2 = MyArray.splice(1, 3)
console.log("C ", MyArray);
console.log(myn2);