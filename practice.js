//JASCRIPT DISPLAY PROPERTIES
//Document.write
//Window.alert("hi")
//console.log
//Window.print
//Document.getelementById

//*2 deta type////
//premative deta type
//Reference deta type

// var name="rafik";
// console.log(name);
// console.log(typeof name);

// var age=27;
// console.log(age);
// console.log(typeof age);

// var a=23;
// var b=7;
// var c=a+b;
// console.log(c);

// var num1=40;
// var num2=30;
// console.log(num1 + num2);

//  var mydata=57;
//  console.log(mydata);
//  console.log(typeof mydata);

// const sk = null;
// console.log(typeof null)///object//

// let user = "geust";
// if (user === 'geust') {
//     console.log('Hello Guest');
// } else if (user === 'admin') {
//     console.log('Hello admin');
// } else if (user === 'owner') {
//     console.log('Hello owner');
// } else {
//     console.log('plezzz get out');
// }

// let user = "Guest";
// if ((user = "Guest")) {
//     prompt("what is your name", "Guest");
// } else if ((user = "admin")) {
//     alert("hello admin");
// } else {
//     alert("hello world");
// }

// let user = "Guest";
// if ((user = "Guest")) {
//     prompt("what is your name", "Guest");
// } else if ((user = "admin")) {
//     alert("hello admin");
// } else {
//     alert("hello world");
// }

//  if ( 10==10){
//     console.log("Good Morning")
// }
// else{
//     console.log("GOod Morning")
// }

// if ( 10>5){
//     console.log("Good Night")
// }
// else if ("Good Night") {

// }

// {
//     console.log("soja abhi")
// }

// let a=10;
// let b=20;
// if(10>10){
//     console.log(a/b)
// }

// else if( 10>5){
//     console.log(a*b)

// }
// else
// {
//     console.log(a+b)
// }

// let num=5;
// let result;
// for (i=1; i<=10; i++)
// {
//     console.log(result=num*i)
// }

// let num=5;
// let result;
// for (i=1; i<=10; i++)
// {
//     console.log(result = num*i)
// }
// console.log("for loop js file");
//for loop//
// for (let i = 1; i<=10; i++){
//     console.log("3","*",i,"=",i*3 );
// }
// for (let i = 1; i<=10; i++){
//     console.log("4","*",i,"=",i*4 );
// }
// for (let i = 1; i<=10; i++){
// console.log("2", "*",i,"=", i*2);
// }
// for (let i = 1; i<=10; i++){
// console.log( "3", "*", i,"=",i*3);
// }

// for (let i = 1;  i<=10; i++){
//     console.log("5", "*", i, "=", i*5);
// }
// for (let i = 1; i<=10; i++){
//     console.log("10", "*",i, "=", i*10)
// }
// for(let i=1; i<=10; i++){
//     console.log("20", "*",i, "=",i*20);
// }
// for ( let i=1; i<=100; i++){
//     console.log(i);
// }

// let a=2;
// let table;
// for(i=1; i<=11; i++){
//     table=a*i;
// }
//     console.log(table);

// let a=2;
// let table;
// for(i=1; i<=10; i++){
//     table=a*i;
//     console.log(table);
// }

// for(i=1; i<=5; i++){
// console.log("i love my india")
// }

// let i=10;
// console.log(i++)

// let rk = 'engginear';
// if (rk === 'developer') {
//     console.log('Hey Cooding Expert HARRY & MOSH');
// } else if (rk === 'engginear') {
//     console.log(' hey Berozgar ENGG wlcm back to ExalTechs software course ');
// } else if (rk === 'doctor') {
//     console.log('hey Munna bhai MBBS');
// } else {
//     console.log('This person is not available in this place');
// }

// const name = 'Rafik Shaikh';
// const job = 'Software Enggineer';
// const birthyr = 1995;
// const currentyr = 2022;
// const result = ' I am ' + name + ' a ' + job + '  ' +  (currentyr - birthyr) + 'yr unique person';
// console.log( result);                   
// if ( 10==10){
//     console.log("Good Morning")
// }
// else{
//     console.log("GOod Morning")

// const sk = 10;
// if ( sk > 7){
//     console.log("Good aftrenoon")
// }
// else if ("Good Night") {
// }

// {
//     console.log("soja abhi")
// }

// let a=10;
// let b=20;
// if(10>10){
//     console.log(a/b)
// }

// else if( 10>5){
//     console.log(a*b)

// }

// else
// {
//     console.log(a+b)
// }

// let num=5;
// let result;
// for (i=1; i<=10; i++)
// {
//     console.log(result=num*i)

// let num=5;
// let result;
// for (i=1; i<=10; i++)
// {
//     console.log(result = num*i)
// }

// let a=2;
// let table;
// for(i=1; i<=11; i++){
//     table=a*i;
//     console.log(table);
// }

// let a=2;
// let table;
// for(i=1; i<=5; i++){
//     table=a*i;
//     console.log(table);
// }

// for(i=1; i<=5; i++){
// console.log("i love india")
// }

// let i=10;
// console.log(i++)

//**CLOSURE FUNCTION**//

// const outer=()=>{
//     const fName="Rafik"
//     const lName="Khan"
//     const inner=()=>{
//        const country="India"
//        const city="Biloli"
//         console.log(`${fName} ${lName}`)
//         console.log(city)
//         console.log(country)
//     }
//     inner()
// }
// outer()

//CURRYING FUNCTION//

// function calculateVolume(length){
//     return function(breadth){
//         return function(height){
//             return length*breadth*height
//         }
//     }
// }
// console.log(calculateVolume(10)(8)(12))

//SPREAD OPERATOR//
//  const roti=[1,2,3]
//  const honey=[4,5,6]
//  const spread=[roti,honey]
// console.log(spread)

//REST OPERATOR//
// const arr=[1,2,3,4,5,6]
// const [a,b,c,...rest]=arr
// console.log(rest)

// OBJECT DESTRUCTURING
// let options={
//     title:"Bike",
//     model:"Shine",
//     year:2020
// }

// // let {title,model,year}=options
// // console.log(title,model,year)
// console.log(options);

//GENERATOR FUNCTION//
// function* generator(i) {
//     yield i;
//     yield i + 10;
//     yield i +20
//     yield i +30
//     yield i-5
//   }

//   const gen = generator(10);

//   console.log(gen.next().value);
//   console.log(gen.next().value);
//   console.log(gen.next().value);
//   console.log(gen.next().value);
//   console.log(gen.next().value);

//////////////////////////////////////////////////////////////FOR LOOP//////
// / for(let i= 1; i<=10; i++) {
//     console.log("2", "*", i , "=", i*2)
// }

// for(let i=1; i<=10; i++) {
//     console.log(i*3)
// }

// for(let i=1; i<=10; i++){
//     console.log("4", "*", i, "=", i*4)
// }

// for(let R=1; R<=10; R++){
//     console.log("5", "*", R, "=", R*5)
// }

// for (let i = 1; i<=10; i++){
//     console.log("10", "*",i, "=", i*10)
// }

// for(let i=1; i<=10; i++){
//     console.log("20", "*", i, "=", i*20)
// }

// for(let i=1; i<=10; i++){
//     console.log("7", "*", i, "=", i*7);
// }

// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// evenarr = [];
// for (i = 0; i <= arr.length - 1; i++) {
//   if (arr[i] % 2 == 0) console.log(arr[i]);
//   evenarr.push(arr[i]);
// }



const arr = [1,2,3,4,5,6,7,3,4,5,2];
const arr2 = arr.filter((item, index)=> arr.indexOf(item)=== index);
console.log(arr2);

// const sk = [ "rk", "maddy", "khan","md", "mr", "khan","ak","jd" ,"dk", "maddy", "rk"].sort()
// const srk = [...new Set(sk)];
// console.log(srk)

// let i = 5;
// for(i=1; i<=10; i++){
// console.log(i+ " " + "Devloper RK "+"=" +" " +i *2 )
// }

// const sss= [1,2,3,4,5,6,7,8,9,10];
// const kkk= sss.map((item)=>item *2)
// console.log(kkk)



//  function rk(s,k) {
//     console.log(s+k);
// }
// rk(55, 44);


// function add(){
//      sum = 85+20;
//     return sum;
// }
//  add();
// console.log(sum)

// function multiply(x, y) {
//   return 40+50;
// } 


// // b = 40;
// // console.log(b)
// // let b=44;
// // console.log(b)



// function sum(a,b){
//     return a +b;
// };
//  console.log (sum(2)(3));
// const sum =[2,3]
// const result=sum.some
// console.log(sum(2,3));   // Outputs 5
// console.log(sum(2)(3));  // Outputs 5

