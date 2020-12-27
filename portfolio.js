$(document).ready( function(){
     
$("body").mouseover(function(){
    $(".carousel").carousel('pause')
    $("#inovative").carousel('next')
    $("#inovative").carousel('cycle')
    let cardHeight = $(".height").css("height")
    console.log(cardHeight)
    $(".tech").css("height", cardHeight)
})
$("body").mouseenter(function(){
    $(".carousel").carousel('pause')
    $("#inovative").carousel('next')
    $("#inovative").carousel('cycle')
    let cardHeight = $(".height").css("height")
    console.log(cardHeight)
    $(".tech").css("height", cardHeight)
})


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
let ProjectOne = new Card("#openProjectOne", "#closeProjectOne", "#ProjectOneDescription", "#ProjectOne-body", "#ProjectOne-carousel")
ProjectOne.openDescription()
ProjectOne.closeDescription()
ProjectOne.cycle()
ProjectOne.pause()

let ProjectTwo = new Card("#openProjectTwo", "#closeProjectTwo", "#ProjectTwoDescription", "#ProjectTwo-body", "#ProjectTwo-carousel")
ProjectTwo.openDescription()
ProjectTwo.closeDescription()
ProjectTwo.cycle()
ProjectTwo.pause()

let ProjectThree = new Card("#openProjectThree", "#closeProjectThree", "#ProjectThreeDescription", "#ProjectThree-body", "#ProjectThree-carousel")
ProjectThree.openDescription()
ProjectThree.closeDescription()
ProjectThree.cycle()
ProjectThree.pause()

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