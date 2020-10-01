$(document).ready( function(){
    console.log("hit start") 
 $("body").mouseenter(function(){
    $("#cocktail-carousel").carousel('pause')
})

let cardHeight = $(".d-block").css("height")
$(".tech").css("height", cardHeight)

$("#openCocktail").on("click", function(){
    $("#cocktailDescription").attr("style", "height:100%")
})

$("#closeCocktail").on("click", function(){
    $("#cocktailDescription").attr("style", "height:0")
})
$("#cocktail-body").mouseenter( function(){
    $("#cocktail-carousel").carousel('next')
    $("#cocktail-carousel").carousel('cycle')
})
$("#cocktail-body").mouseleave(function(){
    $("#cocktail-carousel").carousel('pause')
})


})