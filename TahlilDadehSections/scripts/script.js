let $ = document
let radioBtns = $.querySelectorAll(".class-info__radio")
let radioLabels = $.querySelectorAll(".class-info__radio-label")
let paragraphs = $.querySelectorAll(".class-info__paragraph")
let currentRadioId
let valueLen
let radioBtnSponsors = $.querySelectorAll(".sponsors__radio")
let radioLabelsSponsors = $.querySelectorAll(".sponsors__radio-label")
let logoContainerSponsors= $.querySelectorAll(".sponsors__logo")
let currentRadioBtnSponsorsId
let activeLabelSponsorsText = "sponsors__radio-label--active"
console.log(radioLabelsSponsors, radioBtnSponsors,logoContainerSponsors)

function getIdRadioBtn(value) {
    valueLen = value.length
     for(let i=valueLen-1; i>=0; i--){
         if (value[i]==='-'){
             return value.slice(++i)
         }
     }
}

radioBtns.forEach((value)=>{
    value.addEventListener("click",function (event) {
        currentRadioId = event.target.id
        radioLabels.forEach(function (value) {
            if(value.classList.contains("class-info__radio-label--active")){
                value.classList.remove("class-info__radio-label--active")
            }
            if (value.getAttribute("for")===currentRadioId ){
                value.classList.add("class-info__radio-label--active")
            }
        })
        paragraphs.forEach(function (value) {
            if (value.classList.contains(`class-info__paragraph--${getIdRadioBtn(currentRadioId)}`)){

                value.style.display = "block"
            }else {
                value.style.display = "none"
            }
        })
    })
})

radioBtnSponsors.forEach(function (value,indexRadioBtn) {
    value.addEventListener("click",function (event) {
        radioLabelsSponsors.forEach(function (value,indexLabel) {
            if (value.classList.contains(activeLabelSponsorsText) && indexRadioBtn !== indexLabel){
                value.classList.remove(activeLabelSponsorsText)
            }else if(indexRadioBtn === indexLabel){
                value.classList.add(activeLabelSponsorsText)
            }
        })
        logoContainerSponsors.forEach(function (value, logoContainerIndex) {
            if (logoContainerIndex === indexRadioBtn){
                value.style.display = "flex"
            }else {
                value.style.display = "none"
            }

        })

    })
})
