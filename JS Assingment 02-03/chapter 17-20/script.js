// // Question No 1

// let arr = [
//     [],
//     []
// ]

// // Question No 2

// let arr = [
//         [0,1,2,3],
//         [1,0,1,2],
//         [2,1,0,1]
//     ] 
    
// Question No 3

// for(let i = 1; i <= 10; i++){
//         console.log(i);
    
//     }


    
// // Question No 4


// let tableNumber = Number(prompt("Give Number for Multiplication Table"));
// let tableLength = Number(prompt("How many times you to multiply the table"));


// if (tableLength && tableNumber ) {
//     for(let i =1; i <= tableLength; i++){
//         console.log(`${tableNumber} x ${i} = ${tableNumber * i}`);
        
//     }
// }else{
//     alert("Please Enter Numbers");
// }



// // Question No 5

// let fruits = ["apple", "banana", "mango", "orange","strawberry"]

// for(let i = 0; i <fruits.length; i++){
//     console.log(`Element at index ${i} is ${fruits[i]}`);
    
// }

// // Question No 6

// // Counting
// let counting = "";
// for (let i = 1; i <= 15; i++) {
//   counting += i + (i !== 15  ? ", " : "")
// }
// console.log("Counting: " + counting);

// // Reverse 
// let reverseCounting = "";
// for (let i = 10; i >= 1; i--) {
//   reverseCounting += i + (i !== 1 ? ", " : "");
// }
// console.log("Reverse Counting: " + reverseCounting);

// // Even
// let even = "";
// for (let i = 0; i <= 20; i += 2) {
//   even += i + (i !== 20 ? ", " : "");
// }
// console.log("Even: " + even);

// // Odd
// let odd = "";
// for (let i = 1; i < 20; i += 2) {
//   odd += i + (i !== 19 ? ", " : "");
// }
// console.log("Odd: " + odd);

// // Series
// let series = "";
// for (let i = 2; i <= 20; i += 2) {
//   series += i + "k" + (i !== 20 ? ", " : "");
// }
// console.log("Series: " + series);



// // Question No 7

// let userSearch = prompt("Welcome to ABC Bakre, What do you want to order");
// let filterSearch = userSearch.trim().toLowerCase();
// let arr = ["cake", "apple pie", "cookie", "chips", "patties"];

// let ifAvailaible = false;

// for(let i = 0; i < arr.length; i++ ){
//     if (filterSearch === arr[i]) {
//         alert(`${arr[i]} is availaible at index ${i} in our bakery`)
//         ifAvailaible = true;
//         break
//     }
// }
//  if (!ifAvailaible) {
//     alert(`Sorry ${userSearch} is not availaible in our bakery `)
//  }

// // Question No 8

// let arr = [18,33,59,99,92];
// let maxNum = 0;


// for(let i = 0 ; i < arr.length ; i++){
//     if (arr[i] > maxNum) {
//         maxNum = arr[i]
//     }
// }



// console.log(`The Largest Number is ${maxNum}` );


// // Question No 9

// let arr = [180,303,590,990,920];
// let minNum = Infinity;


// for(let i = 0 ; i < arr.length ; i++){
//     if (arr[i] < minNum) {
//         minNum = arr[i]
//     }
// }



// console.log(`The Largest Number is ${minNum}` );


// // Question No 10

// let endrange = 100;

// for(let i = 1; i <= endrange; i++){
//     if (i % 5 === 0) {
//         console.log(i);
        
//     }
// }


