/*E1:-
(5 > 2) && false = false* 
!("knife" === "sword") = true*
(1 < 2) || (-1 > -1) || !false   = true*
""  = false*
(31 % 5) == "1" = true*
!!true = true*
"5th Avenue" != "5th Avenue" = false*
52 !== "52"  = true*
(undefined || null)  = false *
*/

//-----------------------

/*E2:-
1-a=3
2-c=0
3-b=a    (b=3)
4-b=a    (a=3)
5-c=a    (c=3)
6-b=c    (b=3)
7-a=b    (a=3)

a=3, b=3 , c=3 
*/

//-----------------------

/*E3 - if conditon
let boughtTesla = true
const yearOfTeslaPurchase = 2016
let isUSCitizen = true
let currentYear = 2018


if (boughtTesla && isUSCitizen) {
        if (currentYear - yearOfTeslaPurchase >=4) {
            console.log("Would you like an upgrade?");
        } else {
            console.log("Are you satisfied with the car?");
        }
    } else if (boughtTesla){
        console.log("Would you like to move to the US?");
    } 
    else {
    console.log("Are you interested in buying one?");
} */

//-----------------------

/*E4 - arr:-
const numbers = [1,2,3,4,5,6,7,8,9,10]

numbers.splice(1,2);
numbers[3] = 1;
numbers.splice(-4);
numbers.unshift(0);

console.log(numbers)*/

//-----------------------

/*E5 - objects:-
let p1 = {name:"John", age:14, city:"Bergen"};
let p2 = {name:"Marta", age:24, city:"Oslo"};

if (p1.age === p2.age) {
    if (p1.city === p2.city) {
        console.log("Jill wanted to date Robert");
    } else {
        console.log("Jill wanted to date Robert, but couldn't");
    }
} else {
    console.log("They are not the same age");
}*/

//-----------------------

/*E6
let library = {
    books: [
        {
            title: "The Great Gatsby",
            author: "F. Scott Fitzgerald"
        },
        {
            title: "To Kill a Mockingbird",
            author: "Harper Lee"
        },
    ]
};*/

//-----------------------

/*E7 - Loop
const names = ["Ashley", "Donovan", "Lucas"];
const ages = [23, 47, 18];
const people = [];

for (let i = 0; i < names.length; i++) {
    let person = {
        name: names[i],
        age: ages[i]
    };
    people.push(person);
}

console.log(people);*/


// local scop

/*E1
 -What will console log?
 Finished running 8 miles
 -Will there be an error?
 yes
 -Why?
 becuse the distance is out 
 -Will something be undefined?
 the distants
 -Why?
 becuse it is a local and we cant get it
 -To what scope does each variable belong?
 distans to run 
 -Global or local? If local, to which specifically?
  run global   distans local bloack*/


/* const run = true

if (run) {
    let distance = 8
    for (var i = 0; i < distance; i++) {
        console.log("running")
    }
    console.log("Finished running " + distance + " miles")
}

console.log("Damn, you see this gal? She ran " + distance + " miles") */


/*E2
 -What will console log?
not defined
 -Will there be an error?
 yes
 -Why?
 becuse the  the else in another scope
 -Will something be undefined?
 yes
 -Why?
cow sound 
 -To what scope does each variable belong?
cowsond in the if scoup
-Global or local? If local, to which specifically?
  cowsound local bloack*/


/* if (13 == "space") {
    let cowSound = "moo"
}
else {
    console.log("Cow says " + cowSound)
}*/

/*E3
 -What will console log?
Served a special fish
Served a special lettuce plate
Served a special curious cheese
Finished serving all the orders: fish,lettuce plate,curious cheese
 -Will there be an error?
 no
 -Why?
 becuse the all is ok
 -Will something be undefined?
 no
 -Why?
 becuse the all is ok
 -To what scope does each variable belong?
 specialOrder to the for   order global
-Global or local? If local, to which specifically?
  specialOrder local bloack  order global   allorder globale */

  /*const serveOrders = function (orders) {

    for (let order of orders) {
        let specialOrder = "special " + order
        console.log("Served a " + specialOrder)
    }

    console.log("Finished serving all the orders: " + orders)
}
const allOrders = ["fish", "lettuce plate", "curious cheese"]
serveOrders(allOrders)*/

const person = {
    name: "Julius",
    speak: function() {
      console.log("Et tu, Brutus?")
    }
  }

  console.log(person.name) //you know what this will do

person.speak() //and this? Try it out!


