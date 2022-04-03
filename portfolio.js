$(document).ready(function () {
    $("#btnId").on("click", event => {
        event.preventDefault()
        console.log(this)
    })
    function carouselSetUp() {
        console.log("set up hit")
        $("#inovative").carousel('next')
        $("#inovative").carousel('cycle')
        let cardHeight = $(".height").css("height")
        console.log(cardHeight)
        $(".tech").css("height", cardHeight)
    }
    $("body").mouseenter(function () {
        $(".carousel").carousel('pause')
        carouselSetUp()
    })
    $("#contact").mouseenter(function () {
        $(".carousel").carousel('pause')
        carouselSetUp()
    })


    function Card(showBtn, hideBtn, description, cardBody, carousel) {
        this.show = showBtn
        this.hide = hideBtn
        this.description = description
        this.card = cardBody
        this.carousel = carousel
    }
    Card.prototype.openDescription = function () {
        let descriptionBody = this.description
        $(this.show).on("click", function () {
            $(descriptionBody).attr("style", "height:100%")
        })
    }
    Card.prototype.closeDescription = function () {
        let descriptionBody = this.description
        $(this.hide).on("click", function () {
            $(descriptionBody).attr("style", "height:0")
        })
    }
    Card.prototype.cycle = function () {
        let carouselBody = this.carousel
        $(this.card).mouseenter(function () {
            $(carouselBody).attr("data-interval", "4000")
            $(carouselBody).carousel('next')
            $(carouselBody).carousel('cycle')
        })
    }
    Card.prototype.pause = function () {
        let carouselBody = this.carousel
        $(this.card).mouseleave(function () {
            $(carouselBody).carousel('pause')
        })
    }
    function projectChanges(projectCard){
        projectCard.openDescription()
        projectCard.closeDescription()
        projectCard.cycle()
        projectCard.pause()
    }
    
    let ProjectOne = new Card("#openProjectOne", "#closeProjectOne", "#ProjectOneDescription", "#ProjectOne-body", "#ProjectOne-carousel")
    projectChanges(ProjectOne)

    let ProjectTwo = new Card("#openProjectTwo", "#closeProjectTwo", "#ProjectTwoDescription", "#ProjectTwo-body", "#ProjectTwo-carousel")
    projectChanges(ProjectTwo)

    let ProjectThree = new Card("#openProjectThree", "#closeProjectThree", "#ProjectThreeDescription", "#ProjectThree-body", "#ProjectThree-carousel")
    projectChanges(ProjectThree)

    let ProjectFour = new Card("#openProjectFour", "#closeProjectFour", "#ProjectFourDescription", "#ProjectFour-body", "#ProjectFour-carousel")
    projectChanges(ProjectFour)


    //media queries to change html for mobile mode
    var media1000 = window.matchMedia("(max-width: 1000px)")
    media1000.addListener(mediaChange1)
    if (media1000.matches) {
        console.log("mobilehit")
        $(".carousel").attr("data-interval", "0")
        $("#inovative").attr("data-interval", "4000")
        carouselSetUp()
    }
    function mediaChange1(e) {
        if (e.matches) {
            $(".carousel").attr("data-interval", "0")
            $("#inovative").attr("data-interval", "4000")
            carouselSetUp()
        }
    }
    
})