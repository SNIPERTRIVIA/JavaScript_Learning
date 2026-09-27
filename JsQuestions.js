// 1. Print Even number

// for(let i=1;i<=20;i++){
//     if(i%2===0){
//         console.log("EVEN :-  " + i)
//     }
// }
// for(let i=2;i<=20;i+=2){ // simple way
//     console.log("EVEN :-  " + i)
// }

// 2. Print Reverse Number

// for(let i=10;i>0;i--){
//     console.log(i)
// }

// 3. Print word 5 times

// for(let i=1;i<=5;i++){
//     console.log("yes")
// }

// 4. Print EVEN ODD if me EVEN else me ODD

// for(let i=1;i<=10;i++){
//     if(i%2===0){
//         console.log(`${i} - Even`)

//     }
//     else{
//         console.log(`${i} - Odd`)
//     }
// }

// 5. Ask user a numeber and say if is it +ve or -ve using prompt

//   let num= +prompt("number do")
//   if(num>=0){
//     console.log(`${num} - Positive number`)
//   }
//   else{
//     console.log(`${num} - Negative number`)
//   }

// 6. check whether user is eligible for vote or not

// let age=+prompt("Age Batao")
// if(age>=18){
//     console.log(`You are ${age}, you can vote`)
// }
// else{
//     console.log(`You are ${age}, you can't vote`)
// }

// let age = prompt("age batao");
// if (age === null) {
//   console.error("abe cancel dabya ");
// } else {
//   if (age.trim() === "") {
//     console.error(`bhai sahi se likh le `);
//   } else {
//     age = Number(age.trim());
//     if (isNaN(age)) {
//       console.warn("bhai please number dede....");
//     } else {
//       if (age < 0) console.error("Negative value dala");
//       else if (age >= 18 && age<=125) console.log(` your age is ${age} you can vote`);
//       else console.warn(`your age is ${age} you can't vote`);
//     }
//   }
// }

// // 7 . Print 5 ka table

//   for(let i=1;i<=10;i++){
//     console.log(`38 X ${i} = `+ i*38)
//   }

// 9 . Count how many number between 1 and 15 are greater than 8 Loop and count conditionally

// let count = 0;
// for(let i =1; i<=15;i++){
//   if(i>8){
//     count++;
//     console.log(i)
//   }
// }
// console.log(`total count is ${count}`)

// 10. Ask user for password and print access status

// let password = "Admin@123";

// let pass = prompt("password de de bhai");
// if (pass === null) {
//   console.log("you cancelled it");
// } else {
//   if (pass === password) {
//     console.log("matched");
//   } else {
//     console.log("not matched");
//   }
// }

// LEVEl 2 :- 11. Allow only 3 attemt to enter correct password if user gets it right early, stop. if not Account Locked

// let pass = prompt("naam batao ");

// while (pass !== "stop") {
//   pass = prompt("naam batao ");
//   console.log(pass);
// }

// let attempt = 0;
// let khulgaya = false;
// let pass = "Aakash";

// let password = prompt("Password Batao");
// attempt++;

// if (password === pass) khulgaya = true;
// while (password !== pass) {
//   if (attempt === 3) {
//     console.error("Account Locked");
//     break;
//   }
//   password = prompt("Password Batao");
//   if (password === pass) khulgaya = true;
//   attempt++;
// }

// if (khulgaya === true) console.log("account opend");

//apna password difine karo
// ek baar password puchho
// while banao jo tab tak chale jab tak password match na kar jaye

// let sahipassword = "Aakash";
// let attempt = 0;

// let userpass = prompt("Password Please");
// attempt++;
// while (sahipassword !== userpass) {
//   if (attempt === 3) {
//     console.error("Locked")
//     break;
//   }
//   attempt++;
//   pass = prompt("Password Please");
// }

// let attempt = 0;
// let sahipassword = "Aakash"

// let userpass = prompt ("password please")
// attempt++;

// while(attempt<3 && sahipassword !== userpass){
//   userpass = prompt ("password please");
//   attempt++;
// }
// if(attempt ===3 && sahipassword !== userpass){
//   console.error("Lock Ho gya")
// }else{
//   console.log("Done")
// }

// 12. ask user for words until they type "stop", count how many times they type "yes"
//      loop until "stop" is typed. count yes

// let word = prompt("word bolo");
// let counter = 0;

// while (word !== "stop") {
//   if (word === "yes") counter++;
//   word = prompt("word bolo");
// }

// console.log(`total times yes count : ${counter}`);

// 13 Print numbers divisible by 7 from 1 to 50
// use modulo % and loop

// for(let i = 1; i<=50;i++){
//   if(i%7===0){
//     console.log(i)
//   }
// }

// 14 sum of all odd numbers from 1 to 30 add only odd numbers print final sum

// let sum = 0;
// for(let i=1;i<=30;i++){
//   if(i%2 !==0){
//     sum=sum+i
//   }
// }
// console.log(sum)

// 15 keep asking number untill user enters an even number use while loop Stop only if input is even

// let num = prompt("Enter the number");
// num = Number(num);
// while (num % 2 !== 0) {
//    num = prompt("Enter the number");
//   num = Number(num);
// }
// console.log(num)

// 16. Print numbers between two user inputs, Input start and end using prompt() print all between

// let start = +prompt("start number")
// let end = +prompt("End Number")

// if(start>end){
//   console.error("phela input bada de de....")
// }

// for(i=start;i<=end;i++){
//   console.log(i)
// }

// 17. print only first 3 odd numbers from 1 to 20 use Loop. stop with break after 3 odd prints

// let counter =0;
// for(let i = 1; i<=20;i++){
//   if(counter ===3)break;
//   if(i%2!==0){
//     console.log(i)
//     counter++
//   }
// }

// 18. Ask user 5 numbers. Count how many are positive use loop + condtion + counter

// let counter =0;
// for(let i=1;i<=5;i++){
//     let numbers = +prompt("enter the number")
//     if (numbers>=0){
//         // console.log(numbers)
//         counter++
//     }
// }
// console.log(`ther are ${counter} positive number you have entered`)

// 19. ATM Simulator – Allow 3 withdrawals Start with ₹1000 balance. Ask withdrawal amount 3 times. if enough balance → deduct Else → print “Insufficient balance”

// let balance = 1000;
// let totalwithdraw=0;
// let flag = false;
// let counter = 0;
// while (balance > 0 && counter !== 3) {
//   let withdraw = +prompt(
//     "kitna paise withdraw karna hai yaad rhe 3 he baar kar sakte ho",
//   );
//   counter++;
//   if (withdraw <= balance) {
//     balance -= withdraw;
//     totalwithdraw +=withdraw
//   } else {
//     flag = true;
//     break;
//   }
  
// }
// if (flag === true) {
//   console.log("Insufficient balance");
// }
// console.log(`you have withdrawal :- ${totalwithdraw}`)
// console.log(`avilable balance is :- ${balance} `);



// =====================================OBJECT ARRAY FUNCTION Questions and Answer ===================================


// 1.  Write a function `sayHello()` that prints `"Hello JavaScript"`.

    function sayHello(){
        // console.log("Hello JS")
    }
    sayHello()

// 2.Create a function `add(a, b)` that returns their sum and log the result.

    function sum(a,b){
       return a+b;
    }
    let ans = sum(1,2)
    // console.log(ans)

// 3. . Write a function with a default parameter `name = "Guest"` that prints `"Hi <name>"`.
    function greeting(guest = "guest"){
        console.log(`Hi ${guest}`)
    }
    // greeting("Aakash")
    
// 4. Use rest parameters to make a function that adds unlimited numbers.

    // function addUblimited(...nums){
    //     let sum=0
    //     nums.forEach(function(val){
    //         sum = sum+val
    //     })
    //     console.log(sum)
    // }
    // addUblimited(1,2,3)

    function addUnli(...nums){
        let sum=0
        for(i=0;i<nums.length;i++){
            sum=sum+nums[i]
        }
        // console.log(sum)
    }
    addUnli(1,2,3)

// 5. Create an IIFE that prints `"I run instantly!"`.

    // (function(){
    //     console.log("I run Insrantly")
    // })
    // ();

// 6.  Make a nested function where the inner one prints a variable from the outer one.

    function parent(){
        let a= 12
        function child(){
            // console.log(a)
        }
        child()
    }
    parent()

// 7. Create an array of 5 fruits. Add one at the end and remove one from the beginning.

        let arr = ["apple","mango","banana","grapes","kivi"]
        arr.push("guava")
        arr.unshift("tomoto")

// 8. Use a `for` loop to print all elements of an array.
    let arr1=[1,2,3,4,5]
    for(let i=0;i<arr1.length;i++){
        // console.log(arr1[i])
    }

// 9. Create an object `person` with keys `name`, `age`, and `city`, and print each key’s value.

    let person={
        name : "aakash",
        age : 25,
        city :"NYC"
    }
    // console.log(person.name)
    // console.log(person.age)
    // console.log(person.city)

//10. Use `setTimeout()` to log `"Time’s up!"` after 2 seconds.

    setTimeout(function (){
        console.log("time's up")
        
    },2000)

