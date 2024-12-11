// console.log("Hwllow !!_>?<");
// alert("Hello?")
// console.log(confirm("Who?"))
// console.log(prompt("Hellow",9))

// console.log("For loop:")
// for(let i=1;i<=5;i++){
//     console.log(i)
// }
// console.log("While loop :")
// let i=1;
// while(i<=5){
//     console.log(i)
//     i++;
// }
// console.log("Do while loop:")
// let j=1;


// do{
// console.log(j)
// j++;
// }while(j<=5);

// console.log("For in loop: Gives property of object that is keys in arrays.")
// let a=[1,2,3,4,5]
// for(i in a){
//     console.log(i);
// }
// console.log("For of loop:")
// for(i of a){
//     console.log(i)
// }

// console.log("For in with object :")
// let ob={
//     key1:"tian",
//     key2:"yang",
//     key3:"soul"
// }
// for(let key in ob){
//     console.log(key+" : "+ob[key]);
// }


// console.log("1.Write a function that takes a number as input and returns its factorial using a for loop.");
// let b=prompt("Give Number",1);
// function f(n){
//     if(n<=1) return 1;
//     return n*f(n-1);
// }
// console.log("Factorial Function :"+b+"::"+f(b));

// console.log("2.Create a function to check if a given number is prime. Use a loop to perform the check.")

// let pr=prompt("Give Number for prime: ",1)
// function prime(m){
//     for(let i=1;i<m/2;i++){
//         if(m%i==0){
//             return m+" is prime number."
//         }
        
//     }
//     return m+" is not a prime"
// }
// console.log(prime(pr));

// console.log("3.Write a loop to print all even numbers between 1 and 50")

// function even(){
//     for(let i=1;i<=50;i++){
//         console.log(i);
//     }
// }
// even();

// console.log("4.Write a function to calculate the sum of all numbers in an array using a loop.");
// console.log("Array:");
// let o=[9,3,4,56,12];
// for(u of o){
//     console.log(u);
// }
// function sum(ar){
//     let c=0;
//     for(u of o){
//         c+=u;
//     }
//     return c;
// }
// console.log("Sum is : "+sum(o));

// console.log("5.Use a loop to reverse a string provided as input.");

// function rev(m){
//     temp="";
//     for(let o=(m.length-1);o>=0;o--){
//         temp+=m[o];
//     }
//     return temp;
// }
// let k=prompt("Give Number: ");
// console.log(k);
// console.log("Reverse of number:"+k+" is "+rev(k));

// console.log("6.Write a function that generates the Fibonacci sequence up to a given number of terms.")
// let fbno=parseInt(prompt("Give Terms till which Fibonacci "));
// function Fibonacci(num){
//         if(num<2){
//             return num
//         }
//         else{
//             return Fibonacci(num-1) +Fibonacci(num-2)
//         }
// }
// if(fbno<0){
//     console.log("Number is negative");
// }
// else{
//     for(let i=0;i<fbno;i++){
//         console.log(Fibonacci(i));
//     }
// }
// let string1="helloolleh";
// let string2="palindrome";

// function palindrome(str){
//     let count=0;
//     for(let i=0;i<str.length;i++){
//         if(str[i]==str[str.length-i-1]){
//             count++;
//         }
//     }
//     if(count==str.length)return true;
//     else return false;
// }
// console.log("Palindrome: String1: "+string1+" : "+palindrome(string1));
// console.log("Palindrome: String2: "+string2+" : "+palindrome(string2));


// const pro=new Promise((resolve,reject)=>{
//     setTimeout(() =>{
//         resolve("Jai Ho 2 sec");
//     },2000 );
//     });
// pro.then((message)=>{
//     console.log(message+" YO");
// })
// .catch((error)=>{
//     console.log(error);
// }
// );

// let k=Math.random();
// const pr1=new Promise((resolve,reject)=>{
//     if(k>0.5){
//         resolve("Number greater than 0.5");
//     }
//     else{
//         reject("Number less than 0.5 ");
//     }
// });
// pr1.then((message)=>{
//     console.log(message+" Number: "+k);
// })
// .catch((error)=>{
//     console.log(error+" Number: "+k);
// });

// Function to fetch GitHub user data
// function getGitHubUser(username) {
//     const url = `https://api.github.com/users/${username}`;
    
//     fetch(url)
//     .then(response => {
//         if (!response.ok) {
//             throw new Error(`User not found: ${response.status}`);
//         }
//         return response.json(); 
//     })
//     .then(userData => {
//         let c=document.getElementById("name");
//         userData.forEach(item => {
//             const div=document.createElement('div');
//             div.textContent='Item:$(item.name)';
//             c.appendChild(div);
            
//         });
//         console.log("User data:", userData);
//         c.textContent(userData);
//         displayUser(userData);  
//       })
//       .catch(error => {
//         console.error("Error fetching user:", error);
//       });
//   }
  
//   getGitHubUser("JVGrace");
   

  const promise1=new Promise((resolve,reject)=>setTimeout(resolve,1000,"First"));
  const promise2=new Promise((resolve,reject)=>setTimeout(resolve,5000,"Second"));
  const promise3=new Promise((resolve,reject)=>setTimeout(reject,8000,"Third"));
  Promise.all([promise1,promise2,promise3])
  .then((results)=>{
    console.log(results);
  })
  .catch((error)=>console.error(error));


  Promise.any([promise1,promise2,promise3]).then((results)=>{console.log("this is any method print: "+results);}).catch((error)=>console.log(error));
  Promise.race([promise1,promise2,promise3]).then((results)=>{console.log("this is race method print: "+results)}).catch((error)=>console.log(error));