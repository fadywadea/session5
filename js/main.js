// window.alert("bteeeeeeeeeeeeeeeeeee5");
// document.getElementById("demo").innerHTML = "bteeeeeeeeeeeeeeeeeee5";
// console.log("bteeeeeeeeeeeeeeeeeee5");
/*--------------------------------------------------------------------------------*/

// var userRole = window.prompt("enter ur role");
// var userAge = 20;

// if (userRole === "admin") {
//   console.log("u can do anything");
//   if (userAge > 18) {
//     console.log("welcome");
//   }
// } else if (userRole === "editor") {
//   console.log("u can edit");
// } else if (userRole === "viewer") {
//   console.log("u can view");
// } else {
//   console.log("invalid input");
// }

/*--------------------------------------------------------------------------------*/

// var numb11 = prompt("Enter a number :");

// numb11 = Number(numb11);

// for (var i = 1; i <= numb11; i++) {
//   if ((numb11 * i) % 2 == 0) {
//   console.log("even numbers");
//   } else {
//     console.log("odd number");
//   }
/*--------------------------------------------------------------------------------*/

// if (typeof price == "string") {
//   price = Number(price)
// }
// }

/*--------------------------------------------------------------------------------*/

// function calcproductPrice(price,profit,vat) {
//   price = prompt("Enter a numebr price :");
//   profit = prompt("Enter a numebr profit :");
//   vat = prompt("Enter a numebr vat :");
//   var priceWithProfit = price + profit;
//   var finalPrice = priceWithProfit + priceWithProfit * vat;
//   console.log(finalPrice, "finalPrice");
// }

// calcproductPrice(40000,2000,0.2)

// var numb1 = prompt("Enter the first integer: ");
// var numb2 = prompt("Enter the second integer: ");
// var result = (numb1 ^ numb2);

// numb1 = Number(numb1);
// numb2 = Number(numb2);
// result = Number(result);

// console.log(result);

/*--------------------------------------------------------------------------------*/

// var number = prompt("Enter a number: ");
// switch (number % 2) {
//   case 0:
//     console.log("The number is even.");
//     break;
//   case 1:
//     console.log("The number is odd.");
//     break;
// }
/*--------------------------------------------------------------------------------*/
// // x,y ==> parameters
// function calcSum(x, y) {
//   var res = x + y;
//   console.log(res);
// }
// // call--- invoke
// // 100, 200 ===> arguments
// calcSum(100, 200)

// function calcproductPrice(price, profit, vat) {
//   if (price == undefined) {
//     price = 40000;
//   }
//   if (profit == undefined) {
//     profit = 2000;
//   }
//   if (vat == undefined) {
//     vat = 0.2;
//   }
//   var priceWithProfit = price + profit;
//   var finalPrice = priceWithProfit + priceWithProfit * vat;
//   console.log(finalPrice);
// }

// calcproductPrice(40000, 2000);
/*--------------------------------------------------------------------------------*/
// var totalProductPrice = 0;
// function calcproductPrice(price, profit, vat) {
//   var priceWithProfit = price + profit;
//   var finalPrice = priceWithProfit + priceWithProfit * vat;
//   return finalPrice;
// }
// // console.log(calcproductPrice(40000, 2000, 0.2));
// totalProductPrice = totalProductPrice + calcproductPrice(40000, 2000, 0.2);
// console.log(totalProductPrice);

// totalProductPrice = totalProductPrice + calcproductPrice(4000, 200, 0.2);
// console.log(totalProductPrice);

// totalProductPrice = totalProductPrice + calcproductPrice(400, 20, 0.2);
// console.log(totalProductPrice);
// var res = calcproductPrice(40000, 2000, 0.2);
// console.lo;
/*--------------------------------------------------------------------------------*/
// declaration | statement function
// function hello(x) {
//   console.log("Hello", x);
// }
// hello(10)
/*--------------------------------------------------------------------------------*/
// expression function
// var hello = function (x) {
//   console.log("Hellos", x);
//   return "bate5";
// }
// var res = hello(100);
/*--------------------------------------------------------------------------------*/
// var x = 10;
// console.log(x);
// function hello() {
//   var y = 30;
//   console.log(y);  // local scope
// }
// hello();
// /*--------------------------------------------------------------------------------*/
// for (var i = 0; i < 100; i++) {
//   console.log("bl7");
// }
// console.log(i);
// var userAge = 20;
// if (userAge > 2) {
//   var btee5 = "btee5";
// }
// console.log(btee5);
// /*--------------------------------------------------------------------------------*/
// var z = 10;
// console.log(z); //10

// function hello() {
//   console.log(z); //10
//   z = 30;
// }

// hello();

// console.log(z);//30
// /*--------------------------------------------------------------------------------*/
// var f = 10;
// console.log(f);

// // self invoke function

// (function() {
//   console.log("btee55");
// })();
/*--------------------------------------------------------------------------------*/
// var userInp = prompt("please enter the key u want ");
// var user = {
//   name: "fady",
//   age : 24,
//   salary: "5000EGP",
//   haveACar: true,
//   eat : function (){
//     console.log("pizza");
//   }
// }

// console.log(user['name']);
// console.log(user['userInp']);
// console.log(user.userInp);
/*-----------------------------------1---------------------------------------------*/
// var btn = Array.from(document.querySelectorAll("button"));
// var btn1 = document.querySelector(".btn-danger");

// var index = btn.indexOf(btn1);
// console.log(index);

// for (var i = 0; i < btn.length; i++) {
//   if (i != index) {
//     btn[i].addEventListener("click", function () {
//       console.log("hei");
//     })
//   }
// }
/*-----------------------------------2---------------------------------------------*/
// var allImages = document.querySelectorAll(".images img");
// var mainImage = document.querySelector("#mainImage");

// for (var i = 0; i < allImages.length; i++) {
//   allImages[i].addEventListener("click", function (e) {
//     var clickItems = e.target.getAttribute("src");
//     mainImage.setAttribute("src", clickItems);
//     mainImage.setAttribute("alt", "bte5");
//   });
// }

/*-----------------------------------3---------------------------------------------*/
//  spread
// let ages = [10, 20, 30, 40];

// //rest params
// function calcSum(...ay7aga) {
//   if (ay7aga.length) {
//     let sum = 0;
//     for (let i = 0; i < ay7aga.length; i++) {
//       sum += ay7aga[i];
//     }
//     let av = sum / ay7aga.length;
//     console.log(av);
//     console.log(ay7aga);
//   }
// }

// calcSum(...ages);
// calcSum();
// calcSum(10, 20, 30, 40, 100);

/*-----------------------------------4---------------------------------------------*/

// let x = [];
// if(x){
//   console.log("yes");
// } else {
//   console.log("no");
// }

/*-----------------------------------5---------------------------------------------*/
// let person = {
//   name: "ahmed",
//   age: 33,
//   x: {
//     y: {
//       z: {
//         name1: "text1",
//         name2: "text2",
//         name3: "text3"
//       },
//     },
//   },
// };

// let { name1, name2, name3: bte5 } = person.x.y.z
// console.log(name1);
// console.log(name2);
// console.log(bte5);

/*-----------------------------------6---------------------------------------------*/
// "use strict";
/*-----------------------------------7---------------------------------------------*/
// let person = {
//   name: "ahmed",
//   salary: 4000,
//   calcSalary: function(){
//     let calcVat  = () => this.salary * 0.1;
//     return this.salary -  calcVat();
//   }
// }

// let res = person .calcSalary();
// console.log(res);
/*-----------------------------------8---------------------------------------------*/
// let myReq = new XMLHttpRequest();
// let allDate = []

// myReq.open("GET", "")

// myReq.send();

// myReq.addEventListener("readystatechange", function () {
//   if (myReq.readyState == 4 && myReq.status == 200) {
//     allDate = JSON.parse(myReq.response);
//     display();
//   }
// })

// function display() {
//   let carton =  ``;

// }
/*-----------------------------------9---------------------------------------------*/
// class User {
//   static counter = 0;
//   constructor(uName, uAge, uGender, uSalary) {
//     User.counter++;
//     this.name = uName;
//     this.age = uAge;
//     this.gender = uGender;
//     this.salary = uSalary;
//   }
//   Welcome() {
//     console.log(`Welcome ${this.name}`);
//   }
//   login(userName, password) {
//     console.log("success login");
//   }
//   static getCounter() {
//     console.log(User.counter);
//   }
// }

// class Admin extends User {
//   constructor(uName, uAge, uGender, uSalary, isAdmin) {
//     super(uName, uAge, uGender, uSalary);
//     this.isAdmin = isAdmin;
//   }
//   delete(ID) {
//     console.log(`deleted ${ID}`);
//   }
// }

// let fady = new Admin("fady", 24, "male", 1000000, true);
// let ahmed = new User("ahmed", 33, "male", 40000);
// let mario = new User("mario", 44, "male", 50000);
// let toto = new User("toto", 55, "male", 10000);
// Admin.getCounter();
/*-----------------------------------10---------------------------------------------*/
// let person = {
//   fullName: "John",
//   age: 33,
//   gender: "male",
//   wife: {
//     fullName: "nada",
//     son: {
//       fullName: "ans",
//       mobile: {
//         memory: "2GB",
//       },
//     },
//   },
// };
// let {fullName} = person;
// console.log(fullName);
/*-----------------------------------11---------------------------------------------*/
// let prices = [100, 20, 40, 80, 90, 60, 30];
// let newPrice = prices.filter((price) => price < 50).map((price) => price + 10);
// let sum = newPrice.reduce((total, price) => total + price);
// console.log(sum);
/*-----------------------------------12---------------------------------------------*/
// let person =  new Map();

// person.set("name", "ahmed").set("age", 24).set("gender", "male");

// person.set("salary", 10000);

// person.has("gender");
// person.delete("age");
// person.get("salary");
// person.clear();

// console.log(person.values());

// for (const [Key , value] of person) {
//   console.log(`${Key}: ${value}`);
// }

/*-----------------------------------13---------------------------------------------*/
// let person = {
//   name: 'John',
//   age: 13,
//   gender: 'Male',
//   salary: 1000000
// }

// person = new Map(Object.entries(person));
// console.log(person);

// for (const [Key , value] of person) {
//     console.log(`${Key}: ${value}`);
//   }
/*-----------------------------------14---------------------------------------------*/
// $("#test").hide(3000);
// $("#test").show(3000);
// $("#test").toggle(3000);

// $("#test").slideUp(3000);
// $("#test").slideDown(3000);
// $("#test").slideToggle(3000);

// $("#test").fadeIn(3000);
// $("#test").fadeOut(3000);
// $("#test").fadeToggle(3000);
// $("#test").fadeTo(3000);

// $(".test").fadeToggle(5000, function () {
//   $("#myBTN").fadeTo(5000, 0.7, function () {
//     $("#myBTN").hide(5000);
//   })
// });


//chain 
// $(".test").slideUp(1000).slideDown(2000).fadeOut(3000);

// $("#myBTN").click(function () {
//   $(".test").slideUp(1000).slideDown(2000).fadeOut(3000);
// });
/*-----------------------------------John---------------------------------------------*/
// function element(elementId) {
//   var carton = ``;
//   for (var i = 0; i == elementId; i++) {
//     carton += `<h2>web developer</h2>`;
//   }
//   document.getElementById(elementId).innerHTML = carton;
// };
/*-----------------------------------15---------------------------------------------*/
// ? let timerId;

// ? function startAlert(x) {

// ?   alert('White Nutella' + x);
// ?   x++;
// ?   timerId = setTimeout(startAlert, 1, x);
// ? }

// ? function stopAlert() {
// ?   clearTimeout(timerId)
// ? }
// todo: -----------------------------------16---------------------------------------------
// ! $("section").animate({ width: '100%' }, 1000);
// ! $("section").animate({ height: '100vh' }, 1000,
// !   function () {
// !     $("h4").slideDown(1000, function () {
// !       $(".desc").slideDown(1000, function () {
// !         $(".col-md-3").slideDown(1000)
// !       })
// !     });
// !   });
// todo:  -----------------------------------17---------------------------------------------
// ? $("h3").click(function () {
// ?   $("h3").append("<a href='#'>Google</a>")
// ? });
// ! $("h3").click(function () {
// !   $("h3").after("<a href='#'>Google</a>")
// ! });
// ? $("h3").click(function () {
// ?   $("h3").prepend("<a href='#'>Google</a>")
// ? });
// ! $("h3").click(function () {
// !   $("h3").before("<a href='#'>Google</a>")
// ! });
// ? $("h3").click(function () {
// ?   $("button").remove();
// ? });
// ! $("button").click(function () {
// !   $("h3").empty();
// ! });
// ? $("button").click(function () {
// ?   let x = $("h3").html();
// ?   console.log(x);
// ? });
// ! $("button").click(function () {
// !   let x = $("h3").text();
// !   console.log(x);
// ! });
// ? $("button").click(function () {
// ?   $("h3").text("hello world");
// ? });
// ! $("button").click(function () {
// !   $("h3").addClass("text-center");
// ! });
// ? $("button").click(function () {
// ?   $("h3").removeClass("bg-info");
// ? });
// ! $("button").click(function () {
// !   $("h3").css({"width":"50%" , "text-align":"center" , "margin":"auto"});
// ! });
// ? $("button").click(function () {
// ?   $("img").attr("src",'img/testi-2.jpg');
// ? });
// ! $(".img-item").click(function (eventInfo){
// !   let imgSrc = $(eventInfo.target).attr("src");
// !   $("#mainImage").attr("src",imgSrc);
// ! })
// ? let x = $(".test").outerWidth(true);
// ? console.log(x);
// ! $("#demo").next().css("borderColor","#09c");
// ! $("#demo").nextAll().css("borderColor","#09c");
// ? $("#demo").prev().css("borderColor","#09c");
// ? $("#demo").prevAll().css("borderColor","#09c");
// ! $("#demo").prevAll("a").css("borderColor","#09c");
// ! $("#demo").nextAll("a").css("borderColor","#09c");
// ? $("#demo").nextUntil(".test").css("borderColor","#09c");
// ? $("#demo").prevUntil(".test").css("borderColor","#09c");
// todo $("#demo").siblings().css("borderColor","#09c");
// ! $("span").click(function (e) { 
// !   $(e.target).siblings().css("borderColor","#09c");
// ! });
// ? $("#demo").parent().css("borderColor","#09c");
// ? $("#demo").parents().css("borderColor","#09c");
// todo $("#demo").parentsUntil("body").css("borderColor","#09c");
// ! $("body").children().css("borderColor","#09c");
// ! $("body").find('h2').css("borderColor","#09c");
// todo $("span").eq(3).css("color","#09c");
$("span").not(".test").css("color","#09c");