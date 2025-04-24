// ------------------Practice------------------------------

// let userAmount = prompt("Enter amount of your money to travel");
// let DollarPlaneAmount = 500;
// let DollarHotelAmount = 250;
// let EuroMuseumAmount = 120;

// let aDollarToSum = 12600.61;
// let aEuroToSum = 14247.79;
// let overallAmount = aDollarToSum *(DollarPlaneAmount + DollarHotelAmount) + aEuroToSum * EuroMuseumAmount;

// if (userAmount >= overallAmount) {
//     console.log("Oq yo'l, Alisher!");
// } else {
//     console.log("Ozgina sabr qil bro!");
// };



// -----------------------------------------------------------------------------------------------------

// ------------------Homework----------------------

// 1
// let isOddOrEven = Number(prompt("Enter number"));
// if (isNaN(isOddOrEven)) {
//     console.log("You can enter only Numbers!!!")
// }else if (isOddOrEven % 2 == 0) {
//     console.log("It is Even!")
// } else {
//     console.log("It is Odd!")
// }

// --------------------------------------------------

// 2
// let firstNumber = prompt("Enter first number");
// let secondNumber = prompt("Enter second number");
// if (isNaN(firstNumber) || isNaN(secondNumber)) {
//     console.log("You can enter only Numbers!!!")
// }else  if (firstNumber > secondNumber) {
//     console.log(`${firstNumber} is bigger than ${secondNumber}`);
// } else if (firstNumber == secondNumber) {
//     console.log("Numbers are equal!");
// } else {
//     console.log(`${secondNumber} is bigger than ${firstNumber}`);
// }

// ---------------------------------------------------------------

// 3
// let checkZero = Number(prompt("Enter number"));
// if (isNaN(checkZero)) {
//     console.log("Wrong input!!! Please enter number only!");
// } else if (checkZero == 0) {
//     console.log("It is Zero!");
// } else {
//     console.log("It is not Zero!")
// }

// --------------------------------------------------------------------

// 4
// let firstNumber = prompt("Enter first number");
// let secondNumber = prompt("Enter second number");
// if (isNaN(firstNumber) || isNaN(secondNumber)) {
//     console.log("You can enter only Numbers!!!")
// }else  if (firstNumber > secondNumber) {
//     console.log("Numbers are not equal!!!");
// } else if (firstNumber == secondNumber) {
//     console.log("Numbers are equal!");
// }

// --------------------------------------------------------------------

// 5
// let fizzBazzNumber = Number(prompt("Enter number"));
// if (isNaN(fizzBazzNumber)) {
//     console.log("Please enter numbers only!");
// } else if (fizzBazzNumber % 3 == 0 && fizzBazzNumber % 5 == 0) {
//     console.log("FizzBazz");
// } else if (fizzBazzNumber % 3 == 0) {
//     console.log("Fizz");
// } else if (fizzBazzNumber % 5 == 0) {
//     console.log("Bazz");
// } else {
//     console.log("None of them!!!");
// }

// --------------------------------------------------------------------

// 6
// let userAge = Number(prompt("Enter user age"));
// if (isNaN(userAge)) {
//     console.log("Enter number only!!");
// } else if (userAge > 99) {
//     console.log("You are too old to get driver license!!!");
// } else if (userAge > 18) {
//     console.log("Here you go, You get driver license");
// } else if (userAge < 18) {
//     console.log("You are kid! Get out of here!!!");
// }

// ----------------------------------------------------------------------

// 7
// let numberWeek = Number(prompt("Enter day of week"));
// if (isNaN(numberWeek)) {
//     console.log("I said, enter number onlyyy!");
//     return
// } else if (numberWeek > 7) {
//     console.log("Bro, are you kidding me, there are 7 days in a week!!");
//     return
// } else if (numberWeek == 1) {
//     console.log("Sunday");
// } else if (numberWeek == 2) {
//     console.log("Monday");
// } else if (numberWeek == 3) {
//     console.log("Tuesday");
// } else if (numberWeek == 4) {
//     console.log("Wednesday");
// } else if (numberWeek == 5) {
//     console.log("Thuersday");
// } else if (numberWeek == 6) {
//     console.log("Friday");
// } else if (numberWeek == 7) {
//     console.log("Saturday");
// }

// -------------------------------------------------------------

// 8
// let lastNumber = prompt("Enter number");
// if (isNaN(Number(lastNumber))) {
//     console.log("Enter number only!!!")
// } else if (lastNumber[lastNumber.length - 1] % 2 == 0) {
//     console.log("It is odd");
// } else if (lastNumber[lastNumber.length - 1] % 2 == 1) {
//     console.log("It is even");
// }

//  =-----------------------------------------------------

// 9
// let number = Number(prompt("Enter number"));
// if (isNaN(number)) {
//     console.log("Number only!!!!!!!!!!!")
// } else if (number > 0) {
//     console.log(number + 1);
// } else if (number < 0) {
//     console.log(number - 2);
// } else {
//     console.log(0);
// }

//  ----------------------------------------------------------

// 10
let firstNumber = Number(prompt("Enter first number"));
let secondNumber = Number(prompt("Enter second number"));
let thirdNumber = Number(prompt("Enter third number"));
let count = 0;
if (isNaN(firstNumber) || isNaN(secondNumber) || isNaN(thirdNumber)) {
    console.log("Enter number only");
}

if (firstNumber > 0) {
    count += 1;
}
if (secondNumber > 0) {
    count += 1;
}
if (thirdNumber > 0) {
    count += 1;
}

console.log(`There are ${count} positive numbers`);