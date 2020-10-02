$(document).ready( function(){
     
$("body").mouseenter(function(){
    $(".carousel").carousel('pause')
    $("#inovative").carousel('next')
    $("#inovative").carousel('cycle')
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

let tracking = new Card("#openTracking", "#closeTracking", "#trackingDescription", "#tracking-body", "#tracking-carousel")
tracking.openDescription()
tracking.closeDescription()
tracking.cycle()
tracking.pause()

let weather = new Card("#openWeather", "#closeWeather", "#weatherDescription", "#weather-body", "#weather-carousel")
weather.openDescription()
weather.closeDescription()
weather.cycle()
weather.pause()

let readme = new Card("#openReadme", "#closeReadme", "#readmeDescription", "#readme-body", "#readme-carousel")
readme.openDescription()
readme.closeDescription()
readme.cycle()
readme.pause()

let burger = new Card("#openBurger", "#closeBurger", "#burgerDescription", "#burger-body", "#burger-carousel")
burger.openDescription()
burger.closeDescription()
burger.cycle()
burger.pause()

})