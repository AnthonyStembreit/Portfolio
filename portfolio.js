$(document).ready( function(){
     
// $("body").mouseover(function(){
//     $(".carousel").carousel('pause')
//     $("#inovative").carousel('next')
//     $("#inovative").carousel('cycle')
//     let cardHeight = $(".height").css("height")
//     console.log(cardHeight)
//     $(".tech").css("height", cardHeight)
// })
$("body").mouseenter(function(){
    $(".carousel").carousel('pause')
    $("#inovative").carousel('next')
    $("#inovative").carousel('cycle')
    let cardHeight = $(".height").css("height")
    console.log(cardHeight)
    $(".tech").css("height", cardHeight)
})
$("#contact").mouseenter(function(){
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

let ProjectFour = new Card("#openProjectFour", "#closeProjectFour", "#ProjectFourDescription", "#ProjectFour-body", "#ProjectFour-carousel")
ProjectFour.openDescription()
ProjectFour.closeDescription()
ProjectFour.cycle()
ProjectFour.pause()

let ProjectFive = new Card("#openProjectFive", "#closeProjectFive", "#ProjectFiveDescription", "#ProjectFive-body", "#ProjectFive-carousel")
ProjectFive.openDescription()
ProjectFive.closeDescription()
ProjectFive.cycle()
ProjectFive.pause()

let ProjectSix = new Card("#openProjectSix", "#closeProjectSix", "#ProjectSixDescription", "#ProjectSix-body", "#ProjectSix-carousel")
ProjectSix.openDescription()
ProjectSix.closeDescription()
ProjectSix.cycle()
ProjectSix.pause()

})
//media queries to change html for mobile mode
var media1000 = window.matchMedia("(max-width: 1000px)")
media1000.addListener(mediaChange1)
if(media1000.matches){
    let cardHeight = $(".height").css("height")
    console.log(cardHeight)
    $(".tech").css("height", cardHeight)
    $(".carousel").attr("data-interval", "0")
    $(".carousel").carousel('pause')
    console.log( $(".carousel").attr("data-interval"))
    $("#inovative").attr("data-interval", "4000")
    $("#inovative").carousel('cycle')
}
function mediaChange1(e){
    if(e.matches){
        let cardHeight = $(".height").css("height")
        console.log(cardHeight)
        $(".tech").css("height", cardHeight)
        $(".carousel").attr("data-interval", "0")
        $(".carousel").carousel('pause')
        console.log( $(".carousel").attr("data-interval"))
        $("#inovative").attr("data-interval", "4000")
        $("#inovative").carousel('cycle')
    }
}