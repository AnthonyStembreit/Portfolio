$(document).ready( function(){
     
$("body").mouseenter(function(){
    $(".carousel").carousel('pause')
})

let cardHeight = $(".d-block").css("height")
$(".tech").css("height", cardHeight)

function Card(showBtn, hideBtn, description, cardBody, carousel){
this.show = showBtn
this.hide = hideBtn
this.description = description
this.card = cardBody
this.carousel = carousel
}
Card.prototype.openDescription = function (){
    let descriptionBody = this.description
    $(this.show).on("click", function(){
        $(descriptionBody).attr("style", "height:100%")
    })
}
Card.prototype.closeDescription = function (){
    let descriptionBody = this.description
    $(this.hide).on("click", function(){
        $(descriptionBody).attr("style", "height:0")
    })
}
Card.prototype.cycle = function (){
    let carouselBody = this.carousel
    $(this.card).mouseenter( function(){
        $(carouselBody).carousel('next')
        $(carouselBody).carousel('cycle')
    })
}
Card.prototype.pause = function(){
    let carouselBody = this.carousel
    $(this.card).mouseleave(function(){
        $(carouselBody).carousel('pause')
    })
}
let cocktail = new Card("#openCocktail", "#closeCocktail", "#cocktailDescription", "#cocktail-body", "#cocktail-carousel")
cocktail.openDescription()
cocktail.closeDescription()
cocktail.cycle()
cocktail.pause()

let exploration = new Card("#openExploration", "#closeExploration", "#explorationDescription", "#exploration-body", "#exploration-carousel")
exploration.openDescription()
exploration.closeDescription()
exploration.cycle()
exploration.pause()


})