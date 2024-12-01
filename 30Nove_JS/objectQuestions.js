// 30 November Practice Session.
//"How do you create an object car with properties like brand, model, and year and access them to print their values?"
console.log("Object Properties and Methods Programs: ");
console.log("1.How do you create an object car with properties like brand, model, and year and access them to print their values");
let object={
    brand:"Ford",
    model:"Mustang",
    year:2023
}
console.log(object.brand);
console.log(object.model);
console.log(object.year);
console.log();
console.log();
// "How can you add properties to an empty object person and then delete a specific property?"
console.log("2.How can you add properties to an empty object person and then delete a specific property?");

let object1={}
object1.property="Hello";
console.log(`Property is added in object1 : ${object1.property}`);
console.log("Now Deleting the property: ")
delete object1.property;
console.log(object1);
console.log();
console.log();
// What approach would you use to check if a specific property exists in an object like book?
console.log("3.What approach would you use to check if a specific property exists in an object like book?");
let book={
    title:"Hello Javascript",
    author:"Me",
    year:2020
}
console.log("Checking for specfic property: Like title now");
if("title" in book){
    console.log(`${book.title} is present.`);
}
else{
    console.log("Not present");
}
console.log();
console.log();
// How can you iterate through all properties of an object student and print their key-value pairs?
console.log("4.How can you iterate through all properties of an object student and print their key-value pairs?");

let student={
    name:"Navendra",
    age:22,
    role:"Manual Tester"
}
for(let m in student){
    console.log(`${m} : ${student[m]}`);
}console.log();
console.log();

// How do you write a function that counts the number of properties in an object?
console.log("5.How do you write a function that counts the number of properties in an object?");
function count(obj){
    let count=0;
    for(let n in obj){
        count+=1;
    }
    return count;
}
let obje={
    string1:"name",
    string2:"name",
    string3:"name",
}
console.log(count(obje));
console.log();
console.log();

// How can you add methods like add and subtract to an object calculator that use its properties to perform calculations?

console.log("6.How can you add methods like add and subtract to an object calculator that use its properties to perform calculations?");
let calculator={
    
    x:10,
    y:15,
    z:10,
    add(){
        return this.x+this.y+this.z;
    },
    sub(){
        return this.y - this.z;
    }

}
console.log(`Addition : ${calculator.add()}`);
console.log(`Subtract : ${calculator.sub()}`);
console.log();
console.log();

// What steps are involved in cloning an object user into a new object?
// First create object then create function to clone the object and then assign values using keys

console.log("7.What steps are involved in cloning an object user into a new object?");
function cloneO(o){
    let cloneOb={};
    for(let io in o){
        cloneOb[io]=o[io];
    }
    return cloneOb;

}
let obforclone={
    name:"String",
    name1:"String",
    name2:"String",
    number1:34
}
console.log("Clone object print: ");
let clone=cloneO(obforclone);
console.log(clone);
console.log();
console.log();

// How can you merge two objects, userInfo1 and userInfo2, into a new object while resolving property conflicts?

console.log("8.How can you merge two objects, userInfo1 and userInfo2, into a new object while resolving property conflicts?");
let userInfo1={
    name:"Harry",
    age:29,
    dept:"IT"
}

let userInfo2={
    age:28,
    nationality:"British"
}
let newUser= Object.assign({},userInfo1,userInfo2);
console.log(newUser);
console.log();
console.log();

// How do you create a function that generates an object with default values if certain properties are not provided?
console.log("9.How do you create a function that generates an object with default values if certain properties are not provided?");

function defaultObject(title,age,role="Developer"){
    return{
        title:title,
        age:age,
        role:role
    }
}
let objectwithDefault=defaultObject("Heavenly Venerable",4396);
console.log(objectwithDefault);
console.log();
console.log();

//What is the best way to structure an object company with nested arrays of objects representing employees?
console.log("10.What is the best way to structure an object company with nested arrays of objects representing employees?");

let company={
    cname:"Mahindra",
    employees:[
        {name:"Navendra",age:22,role:"Tester"},
        {name:"Ravindra",age:25,role:"Devleoper"}
    ]
}
console.log(company);
console.log();
console.log();

// How can you extract all the keys or values of an object like fruitPrices into arrays?
console.log("11.How can you extract all the keys or values of an object like fruitPrices into arrays?");
let fruitPrices={
    orange:34,
    grapes:53,
    mangos:234
}
function getKeys(obj){
    return Object.keys(obj)
}
function getValues(obj){
    return Object.values(obj);
}
console.log(getKeys(fruitPrices));
console.log(getValues(fruitPrices));
console.log();
console.log();
// How do you write a function to sort the properties of an object salaries based on their values?
console.log("12.How do you write a function to sort the properties of an object salaries based on their values?");
function sortP(obj){
    return Object.keys(obj).sort((a,b)=>obj[a]-obj[b]);
}
let salaries={
    N:20922,
    V:20332,
    C:90221
}
console.log("Sorted Object Salaries in ASC: "+sortP(salaries));
console.log();
console.log();

// What is object destructuring, and how can it be used to extract values from an object user?
console.log("What is object destructuring, and how can it be used to extract values from an object user?");
let object3={
    name1:"String",
    name2:'a',
    name3:98.3,
    name5:32
}
let {name1,name2,name5,name3}=object3;
console.log(name1);
console.log(name2);
console.log(name3);
console.log(name5);
console.log();
console.log();

// How can you destructure a nested object like person to access deeply nested properties?
console.log("How can you destructure a nested object like person to access deeply nested properties?");
let person={
    a:"a",
    b:"b",
    elements:{a:"c",b:"d"}
}
let {elements:{a,b}}=person;
console.log(a);
console.log(b);
console.log();
console.log();

// What happens when you use Object.freeze() on an object, and how can you verify that it works?
console.log("What happens when you use Object.freeze() on an object, and how can you verify that it works?");
let openOb={
    a:"a",
    b:"b"
}
Object.freeze(openOb)
openOb[a]="c";
console.log(openOb);
console.log();
console.log();

// How can you use Object.entries() to convert an object into an array of key-value pairs?
console.log("How can you use Object.entries() to convert an object into an array of key-value pairs?");
let scores={
    maths:323,
    science:232
}
let entries=Object.entries(scores);
console.log(entries);
console.log();
console.log();
// How do you write a function to modify the values of an object like team by a given increment?
console.log("How do you write a function to modify the values of an object like team by a given increment?");
let team={
    bat:20,
    balls:32,
    stumps:12
}
function incre(obj,inc){
    for(let i in obj){
        obj[i]+=inc;
    }
    return obj;
}
let increm=incre(team,4);
console.log(increm);
console.log();
console.log();
// How can you use the this keyword in an object method to refer to the object's properties?
console.log("How can you use the this keyword in an object method to refer to the object's properties?");
let square={
    side:40,
    area(){
       return (this.a)*(this.a)}
}
console.log(square.area());
console.log();
console.log();
// How can you find the property with the highest value in an object like products and return its key?
console.log("How can you find the property with the highest value in an object like products and return its key?");
function maxPrice(obj){
    maxP=0;
    maxProduct="";
    for(let i in obj){
        if(obj[i]>maxP){
            maxP=obj[i];
            maxProduct=i;
        }
    }
    return maxProduct;
}
let product={
    a:231,
    b:93211,
    c:4332321
}
console.log(maxPrice((product)));
console.log();
console.log();
console.log("Loops and Algorithms: ");
console.log("1.How do you write a function to calculate the factorial of a number using a for loop?");
let mb=10;
function f(n){
    if(n<=1) return 1;
    return n*f(n-1);
}
console.log("Factorial Function :"+mb+"::"+f(mb));
console.log();
console.log();

console.log("2.How can you create a function to check if a number is prime using a loop?");
let pr=73;
function prime(m){
    for(let i=1;i<m/2;i++){
        if(m%i==0){
            return m+" is prime number."
        }
        
    }
    return m+" is not a prime"
}
console.log(prime(pr));
console.log();
console.log();

console.log("3.What is the best way to use a loop to print all even numbers between 1 and 50?");
function even(){
    for(let i=1;i<=50;i++){
        console.log(i);
    }
}
even();
console.log();
console.log();

console.log("4.How do you write a function to calculate the sum of all numbers in an array using a loop?");
let o=[9,3,4,56,12];
for(u of o){
    console.log(u);
}
function sum(ar){
    let c=0;
    for(u of o){
        c+=u;
    }
    return c;
}
console.log("Sum is : "+sum(o));
console.log();
console.log();
console.log("5.How can you use a loop to reverse a given string?");
function rev(m){
    temp="";
    for(let o=(m.length-1);o>=0;o--){
        temp+=m[o];
    }
    return temp;
}
let k=5429864;
console.log(k);
console.log("Reverse of number:"+k+" is "+rev(k));
console.log();
console.log();

console.log("6.How do you write a function to generate the Fibonacci sequence up to a given number of terms?");
let fbno=10;
function Fibonacci(num){
        if(num<2){
            return num
        }
        else{
            return Fibonacci(num-1) +Fibonacci(num-2)
        }
}
if(fbno<0){
    console.log("Number is negative");
}
else{
    for(let i=0;i<fbno;i++){
        console.log(Fibonacci(i));
    }
}
console.log();
console.log();
console.log("7.How can nested loops be used to print patterns like:");
for(let i=0;i<=5;i++){
    let r="";
    for(let j=0;j<i;j++){
        r+="*";
    }
    console.log(r);
}
console.log();
console.log();
console.log("8.What steps are required to write a function that finds the largest number in an array using a loop?");
function largestInArray(obj){
    let j=obj[0];
    for(let i in obj){
        if(j<obj[i]){
            j=obj[i];
        }
    }
    return j;
}
let ob=[1,2,3,4,5,6,67,8,232,1,121];
console.log(largestInArray(ob));
console.log();
console.log();

console.log("9.How can you implement a function to count the number of vowels in a string?");
function vowelCount(str){
    let vowels="aeiouAEIOU";
    let countV=0;
    for (let j=0;j<str.length;j++){
        if(vowels.includes(str.charAt(j))){
            countV++;
        }
    }
    return countV;
}
let stringOB="Hello , World ";
console.log("Vowels Count: "+vowelCount(stringOB));
console.log();
console.log();

console.log("10. How can a loop be used to check if a word is a palindrome?");
let string1="helloolleh";
let string2="palindrome";

function palindrome(str){
    let count=0;
    for(let i=0;i<str.length;i++){
        if(str[i]==str[str.length-i-1]){
            count++;
        }
    }
    if(count==str.length)return true;
    else return false;
}
console.log("Palindrome: String1: "+string1+" : "+palindrome(string1));
console.log("Palindrome: String2: "+string2+" : "+palindrome(string2));

console.log("11.What is the process of removing duplicates from an array of integers using loops?");
function duplicateDelete(arr){
    let result=[];
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]==arr[j]){
                break;
            }
        }
        if(!result.includes(arr[i])){
            result.push(arr[i]);
        }
    }
    return result;
}
let ar=[2,3,5,3,21,5,3,2,1,6,76];
console.log("Array is: "+ar+" : After duplicates removal: "+duplicateDelete(ar));
console.log();
console.log();

console.log("12.How do you write a program to calculate the power of a number (e.g., base^exponent) without using the Math.pow() function?");
function powerN(n,p){
    if(p==0){
        return 1;
    }
    else if(p<0){
        return 1;
    }
    else{
        return n*powerN(n,p-1);
    }

}
let no=2;
let po=4;
console.log("Power of :"+po+" on number "+no+" is : "+powerN(no,po));
console.log();
console.log();

console.log("13.What is the algorithm for sorting an array of numbers in ascending order using loops (e.g., bubble sort)?");
function sortB(arr){
    let n=arr.length
    for(let i=0;i<n;i++){
        let swap=false;
        for(let j=0;j<(n-i-1);j++){
            if(arr[j]>arr[j+1]){
                [arr[j],arr[j+1]]=[arr[j+1],arr[j]];
                swap=true;
            }
            
        }
        if(!swap)break;
        
    }
    return arr;
}
let ar1=[32,12,41,53,2,5,53,23,98];
console.log("Array: "+ar1);
console.log(sortB(ar1));

console.log("14.How can you write a loop to find the intersection of two arrays and return the common elements?");
function interin2Arr(arr1,arr2){
    let temp=[];
    for(let i=0;i<arr1.length;i++){
        for(let j=0;j<arr2;j++){
            if(arr1[i]===arr2[j] && (!temp.includes(arr1[i]))){
                temp.push(arr1[i]);
            }
        }
    }
    return temp;
}
let a1=[2,3,4,5,6,7,4,3,34,21,3,5];
let a2=[3,25,2,1,6,54,88,45];
console.log(interin2Arr(a1,a2));