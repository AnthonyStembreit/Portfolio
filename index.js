//sections
const aboutSection = $("#bio")
const contactSection = $("#contact")
const projectSection = $("#projects")
//navlinks
const aboutNavLink = $("#about-nav")
const contactNavLink = $("#contact-nav")
const projectNavLink = $("#project-nav")
//modal elements
const modal = $("#modal")
const closeModalBtn = $("#modal-close")
const modalTitle = $("#modal-project-title")
const userSpanOne = $("#as-a")
const userSpanTwo = $("#i-want")
const userSpanThree = $("#so-that")
const modalTechList = $("#modal-tech-list")
const modalDesc = $("#modal-description")

//Navigation
function changePage(show, hide1, hide2){
    show.removeClass("hide");
    hide1.addClass("hide");
    hide2.addClass("hide");
}
function changeActive(active, deactivate1, deactivate2){
    active.addClass("active-nav");
    deactivate1.removeClass("active-nav");
    deactivate2.removeClass("active-nav");
}
aboutNavLink.click(e => {
    e.preventDefault();
   changePage(aboutSection, contactSection, projectSection)
   changeActive(aboutNavLink, contactNavLink, projectNavLink)
})

contactNavLink.click(e => {
    e.preventDefault();
    changePage(contactSection, aboutSection, projectSection)
    changeActive(contactNavLink, projectNavLink, aboutNavLink)
})

projectNavLink.click(e => {
    e.preventDefault();
    changePage(projectSection, aboutSection, contactSection)
    changeActive(projectNavLink, aboutNavLink, contactNavLink)
})

$("#name").click(e => {
    projectSection.removeClass("hide");
    contactSection.removeClass("hide");
    aboutSection.removeClass("hide");

    aboutNavLink.removeClass("active-nav");
    contactNavLink.removeClass("active-nav");
    projectNavLink.removeClass("active-nav");
})

//Display Project Cards
for (i = 0; i < projectArr.length; i++) {
    //object deconstruction
    let { title, github, deployed, img1, alt1, img2, alt2, img3, alt3, img4, alt4, img5, alt5 } = projectArr[i]
    //template literal of project card
    let projectCard = `<div id="${i}-card" class="projectCard">
         <p class="card-title">${title}</p>
      
         <div id="${i}-container" class="img-container">

             <!--There needs to be 4 bc of the transistion effects-->
             <img id="${i}-img1" class="reset overlay img1" src=${img1}  alt=${alt1} />
             <img id="${i}-img2" class="reset img2" src=${img2}  alt=${alt2} />
             
             <div id="${i}-img3" class="reset img3">
                 <img class="flip-box-front" src=${img3}  alt=${alt3} />
                 <img id="${i}-img4" class="flip-box-back img4" src=${img4} alt=${alt4} />
             </div>

             <img id="${i}-img5" class="reset img5" src=${img5} alt=${alt5} />
             
             <div id="${i}-final" class="reset final-pg">
                 <a href=${deployed}>Deplyed</a>
                 <a href=${github}>Github</a>
                 <!--but not on these buttons here-->
                 <button id="${i}-overview" value=${i}>Overview</button>
                 <button id="${i}-replay">Replay</button>
             </div> 

         </div>
     </div>`
    //appending project card to page
    projectSection.append(projectCard)

    let imgArr = [$(`#${i}-img1`), $(`#${i}-img2`), $(`#${i}-img3`), $(`#${i}-img4`), $(`#${i}-img5`), $(`#${i}-final`)]
    revealEL(imgArr[0])

    //event listeners for project card

    //img container hover
    $(`#${i}-container`).mouseover(async e => {
        e.preventDefault();
        console.log("hover " + e.target.id)
        if (imgArr[4].attr("class").indexOf("overlay") === -1) {
            animateImgs(imgArr)
        }
    })

    //replay animation on click
    $(`#${i}-replay`).click(e => {
        e.preventDefault();
        imgArr[5].attr("style", "opacity: 0")
        imgArr[2].removeClass("flip-box-inner flip-now")
        for (i = 1; i < imgArr.length; i++) {
            resetEl(imgArr[i])
        }
        revealEL(imgArr[0])
        animateImgs(imgArr)
    })

    //overview on click
    $(`#${i}-overview`).click(e => {
        e.preventDefault();
        presentModal(e.target.value)

    })
}
//animate project card
function animateImgs(imgArr) {
    let currentImg = 0;
    let imgInterval = setInterval(function () {
        currentImg++;
        if(currentImg >= 5){
            console.log(currentImg)
            clearInterval(imgInterval);
            resetEl(imgArr[0])
            imgArr[5].attr("style", "opacity: 1")
            return;
        }
        if (imgArr[currentImg] === imgArr[3]) {
            imgArr[2].addClass("flip-box-inner flip-now")
        }
        revealEL(imgArr[currentImg])
    }, 1000);
}

function resetEl(element) {
    element.attr("style", "transition: unset;")
    element.removeClass("overlay")
}

function revealEL(element) {
    element.attr("style", "transition: .8s ease;")
    element.addClass("overlay")
}

//project modal
function clearModal(){
    modalTitle.text("")
    userSpanOne.text("")
    userSpanTwo.text("")
    userSpanThree.text("")
    modalDesc.text("")
    modalTechList.html("")
}
function presentModal(id){
    let { title, description, asa, iwant, sothat, techused} = projectArr[id]
    modalTitle.text(title)
    userSpanOne.text(asa)
    userSpanTwo.text(iwant)
    userSpanThree.text(sothat)
    modalDesc.text(description)
    let techList = techused.map(tech =>{
        return `<li>${tech}</li>`
    })
    modalTechList.append(techList.join(""))
    modal.removeClass("hide")
}
closeModalBtn.click(e => {
    e.preventDefault();
    console.log("hit")
    clearModal()
    modal.addClass("hide")
})

