$("#openQuiz").on("click", function(){
    $("#quizDescription").attr("style", "height:100%")
})

$("#closeQuiz").on("click", function(){
    console.log("click")
    $("#quizDescription").attr("style", "height:0")
})


$("#quiz-body").mouseenter( async function(){
    console.log("hit in")
   await $("#quiz-carousel").attr("data-interval", "5000")
    $("#quiz-carousel").carousel('cycle')
    console.log($("#quiz-carousel").attr("data-interval"))
})
$("#quiz-body").mouseleave(function(){
    console.log("hit out")
    $("#quiz-carousel").attr("data-interval", "false")
    $("#quiz-carousel").carousel('pause')
    console.log($("#quiz-carousel").attr("data-interval"))
})