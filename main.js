// window.alert("bteeeeeeeeeeeeeeeeeee5");
// document.getElementById("demo").innerHTML = "bteeeeeeeeeeeeeeeeeee5";
// console.log("bteeeeeeeeeeeeeeeeeee5");
/*--------------------------------------------------------------------------------*/

// var userRole = window.prompt("enter ur role");
// var userAge = 20;

// if (userRole === "admin") {
//   console.log("u can do anything");
//   if (userAge > 18) {
//     console.log("welcom");
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
var x = 10;
console.log(x);
function hello() {
  var y = 30;
  console.log(y);  // local scope
}
hello();