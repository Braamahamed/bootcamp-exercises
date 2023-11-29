// $("h1").css('color', 'blue');

// $(".red-div").css('color', 'red');

// $("ul li:first").css('color', 'green');

// $("ul li:last").css('color', 'pink');

// $("#brown-div").css('color', 'brown');

// $("#b1").addClass("box")
// $("#b1").addClass("box")

// const data = $("div").data()
// console.log("Item with barcode " + data.barcode + " will expire on " + data.expirationdate)

// $("#b1").hover(function(){
//   $("#b1").css("background-color", "blue");
// });

// $(".feedme").on("click", function(){
//   let divCopy =$(this).closest('.feedme').clone(true);
//   $("body").append(divCopy)
// })

// EX1

const myForm = "<input type='text' id='addList' placeholder='Add Human Name'>"
const form = $(myForm)
const mybtn = "<input type='button' name='add' class='btn' value='Add'>"
const btn = $(mybtn)
$("body").append(form,btn)

  $(".btn").click(function(){
      let addNames = $('#addList').val();
      let addToList='<li>'+addNames+'</li>';
      $('.List').append(addToList);
  })

  // EX2
  // $('.List').on('click', 'li', function() {
  //   $(this).remove();
  // });


  // EX3

  // const box1 = "<div class='box'></div>"
  // const b1 = $(box1)
  // const box2 = "<div class='box'></div>"
  // const b2 = $(box2)
  // $("body").append(b1,b2)

  // $('.box').hover(function() {
  //   $(this).css('background-color', 'red');
  // }, function() {
  //   $(this).css('background-color', '#8e44ad');
  // });

  // EX4

  // $('.item').on("click", function(){
  //   let inStock = $(this).data('instock');
  //   if (inStock === true){
  //   let addItem =$(this).text();
  //   let cartItem = $('<div class="cart-item">' + addItem + '</div>');
  //   $('#cart').append(cartItem);
  // }})  
 
  // EX5

//   const fruits = [
//     { name: "Orange", color: "orange" },
//     { name: "Banana", color: "yellow" },
//     { name: "Coconut", color: "brown" },
//     { name: "Kiwi", color: "brown" },
//     { name: "Lemon", color: "yellow" },
//     { name: "Cucumber", color: "green" },
//     { name: "Persimmon", color: "orange" },
//     { name: "Pumpkin", color: "orange" }
//   ]


// for (let i = 0; i < fruits.length; i++) {
//   let fruit = fruits[i];
//   let div = $(`<div class=${fruit.color}>${fruit.name}</div>`);
//   $("#basket").append(div);
// }