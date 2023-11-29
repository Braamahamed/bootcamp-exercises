// E1
// function isEven (number) {
//     return number %2 === 0;
// }

// console.log(isEven(3))
// console.log(isEven(2))
// console.log(isEven(4))
// console.log(isEven(7))
// console.log(isEven(10))

// E2
  
//   function printOddNumbers(arr) {
//     for (let i = 0; i < arr.length; i++) {
//       if (!isEven (arr[i])) { 
//         console.log(arr[i]); 
//       }
//     }
//   }
//   const num = [5,6,7,6,4];
//   printOddNumbers(num);
  

// E3

// function checkExists(arr, num){
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === num) { 
//             return true;
//         } 
//     }
//     return false;
// }

//     console.log(checkExists([8, 9, 5], 9));
//     console.log(checkExists([8, 9, 5], 8));

//E4

// const calculator = {
//     add: function(a, b) {
//       return a + b;
//     },
//     subtract: function(a, b) {
//       return a - b;
//     }
// };
  
// const result1 = calculator.add(4, 1)
// const result2 = calculator.subtract(7, 1)

// console.log(calculator.add(result1, result2))

// function foo(){
//     let sum = 0
//     for (let i = 1000; i < 2000; i++){
//         if (i % 203 === 0){
//             sum += getSecondDigit(i)
//         } else if (i % 497 === 0) {
//             sum += getLastDigit(i)
//         } else if (i % 293 === 0) {
//             sum += getLastDigit(i*13)
//         } 
//     }
//     return sum
// }

// function getSecondDigit(number){
//     return parseInt(number.toString().split("")[0])
// }

// function getLastDigit(number){
//     let numberLength = number.toString().length
//     return parseInt(number.toString().split("")[numberLength - 1])
// }

// foo()



// const revealSecret = function () {
//     return this.secret;
//   };
  
//   const shoutIt = function (person, func) {
//     person.revealItAll = func;
//     const result = person.revealItAll();
//     alert(person.name + " said: " + result);
//   };
  
//   const avi = {
//      name: "Avi"
//     ,secret: "Im scared of snakes!"
//   };
  
//   const narkis = {
//     name: "Narkis"
//    ,secret: "I dont have secrets because I'm zen like that."
//   };
  
//   shoutIt(avi, revealSecret);
//   shoutIt(narkis, revealSecret);


// const coffeeShop = {
//   beans: 40,
//   money: 100, // initial amount of money
//   drinkRequirements: {
//     latte: { beanRequirement: 10, price: 5 },
//     americano: { beanRequirement: 5, price: 3 },
//     doubleShot: { beanRequirement: 15, price: 8 },
//     frenchPress: { beanRequirement: 12, price: 6 }
//   },

//   makeDrink: function (drinkType) {
//     if (!(drinkType in this.drinkRequirements)) {
//       alert("Sorry, we don't make " + drinkType);
//       return;
//     }

//     const requiredBeans = this.drinkRequirements[drinkType].beanRequirement;
//     if (requiredBeans > this.beans) {
//       alert("Sorry, we're all out of beans!");
//       return;
//     }

//     this.beans -= requiredBeans;
//     alert("Enjoy your " + drinkType + "!");
//   },

//   buyBeans: function (numBeans) {
//     // Define the cost per bean
//     const costPerBean = 2; // Example cost of 2 units of currency per bean

//     // Calculate the total cost for the given number of beans
//     const totalCost = numBeans * costPerBean;

//     if (totalCost > this.money) {
//       alert("Not enough money to buy beans!");
//       return;
//     }

//     this.money -= totalCost;
//     this.beans += numBeans;
//     alert("Successfully bought " + numBeans + " beans!");
//   },

//   buyDrink: function (drinkType) {
//     if (!(drinkType in this.drinkRequirements)) {
//       alert("Sorry, we don't make " + drinkType);
//       return;
//     }

//     const drinkPrice = this.drinkRequirements[drinkType].price;
//     this.money += drinkPrice;
//     this.makeDrink(drinkType);
//   }
// };

// // Test the makeDrink method
// coffeeShop.makeDrink("latte");
// coffeeShop.makeDrink("americano");
// coffeeShop.makeDrink("filtered"); // Should alert "Sorry, we don't make filtered"
// coffeeShop.makeDrink("doubleShot");
// coffeeShop.makeDrink("frenchPress"); // Should alert "Sorry, we're all out of beans"

// // Test the buyBeans method
// coffeeShop.buyBeans(20); // Assuming 20 beans cost 40 currency units
// coffeeShop.makeDrink("latte"); // Should alert "Enjoy your latte!"

// // Test the buyDrink method (also indirectly tests the makeDrink method)
// coffeeShop.buyDrink("americano"); // Should alert "Enjoy your americano!" and increase money by the drink price

// console.log(coffeeShop.money); // Check the remaining mon


function foo(a,b,c){
  return a+b+c;
}

function boo(a,c){
  var d = c + 2;
  var x = foo(a,c,d);
  return x-d;
}

function goo(x){
  var y = boo(x, 3);
  return y + foo(y,y,y);
}

function moo(n, k){
  return goo(n) + too(k);
}

function too(j){
  return j * 2;
}

function zoo(z){
  return too(z);
}

function noo(a,b){
  if (boo(a,b) * 3.7 > 5887){
      return moo(4, koo(b));
  }
  return boo(a,b) + 4.66;
}

function koo(d){
  var f = zoo(d) * 5.3;
  return f * 1.2;
}

var r = goo(5);
var w = r + too(3) + zoo(r) + boo(r, too(712));
var q = foo(r, w, 4) + koo(34) + noo(w,r);