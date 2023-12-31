
$("button").on("click", function () {
    let address = $("#addr-input").val()
    let minPrice = $("#min-p-input").val()
    let maxPrice = $("#max-p-input").val()
    let minRooms = $("#min-r-input").val()
    let maxRooms = $("#max-r-input").val()
    let immediate = $("#immed-y")

    let relevantApts = findRelevantApts(address, minPrice, maxPrice, minRooms, maxRooms, immediate)
    renderApts(relevantApts)
})

const source = $('#store-template').html();
const template = Handlebars.compile(source);
const renderApts = function (apartments) {
    const resultsContainer = $("#results");
    resultsContainer.empty()
    const html = template({ apartments });
    resultsContainer.append(html)
    console.log(apartments) 
}
        
renderApts(apartments);
   
    