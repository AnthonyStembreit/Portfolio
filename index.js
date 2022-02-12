//when my name is clicked
//remove the class hide from all sections
//when about is clicked
//remove class hide from about section and add class hide to contact and project sections
//when about is clicked
//remove class hide from about section and add class hide to contact and project sections
const aboutSection = $("#bio")
const contactSection =  $("#contact")
const projectSection = $("#projects")

$("#about-nav").click(e => {
    e.preventDefault();
    aboutSection.removeClass("hide");
    contactSection.addClass("hide");
    projectSection.addClass("hide")
})

$("#contact-nav").click(e => {
    e.preventDefault();
    contactSection.removeClass("hide");
    aboutSection.addClass("hide");
    projectSection.addClass("hide")
})

$("#project-nav").click(e => {
    e.preventDefault();
    projectSection.removeClass("hide");
    aboutSection.addClass("hide");
    contactSection.addClass("hide")
})
$("#name").click(e => {
    projectSection.removeClass("hide");
    contactSection.removeClass("hide");
    aboutSection.removeClass("hide");
})
