// CH1
// $("button").on("click", function(){
//     alert($(this).closest("div").find("span").text())
//   })

// CH2
// $("button").on("click", function(){
//     alert($(".container").find("p").text())
//   })



// ----------------------------------------

// EX1:-
let id = [];

$(".generator").on("click", function(){                
    console.log('Processor ID:',$(this).closest(".processor").attr('id'))
    const idNum = $(this).closest(".computer").data().id
    id.push({cmp_id:idNum})
    console.log('Computer’s data-id:',idNum)
    console.log('BUS:',$(this).closest(".computer").find(".BUS").text())
})

$(".validator").on("click", function(){                
    console.log($(this).closest(".computer").find(".generator").text())
    console.log($(this).closest(".computer").find(".MB").text())
    console.log($(this).closest(".computer").find(".QR").text())
})


