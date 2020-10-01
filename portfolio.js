$(document).ready( function(){
    console.log("hit start") 
 $("body").mouseenter(function(){
    $("#quiz-carousel").carousel('pause')
})

let cardHeight = $(".d-block").css("height")
$(".tech").css("height", cardHeight)

$("#openQuiz").on("click", function(){
    $("#quizDescription").attr("style", "height:100%")
})

$("#closeQuiz").on("click", function(){
    console.log("click")
    $("#quizDescription").attr("style", "height:0")
})
$("#quiz-body").mouseenter( function(){
    console.log("hit in")

    $("#quiz-carousel").carousel('next')
    $("#quiz-carousel").carousel('cycle')

})
$("#quiz-body").mouseleave(function(){
    console.log("hit out")

    $("#quiz-carousel").carousel('pause')
  
})


})