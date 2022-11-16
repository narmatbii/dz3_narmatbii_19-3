const tabItems = document.querySelectorAll('.tabheader__item')
const tabContent = document.querySelectorAll('.tabcontent')
const tabMain = document.querySelector('.tabheader__items')


const hideContent = () => {
    tabContent.forEach((item) => {
        item.classList.add('hide')
        item.classList.remove('show')
    })
    tabItems.forEach((item) => {
        item.classList.remove('tabheader__item_active')
    })
}


const showContent = (i = 0) => {
    tabContent[i].classList.add('show')
    tabContent[i].classList.remove('hide')

    tabItems[i].classList.add('tabheader__item_active')
}
hideContent()
showContent()


tabMain.addEventListener('click',(event) => {
 const target = event.target
 if (!target.classList.contains('tabheader__item_active')){
     tabItems.forEach((tab,idx) => {
        if (target === tab){
            hideContent()
            showContent(idx)
        }
     })
     }
})

const modalBtn = document.querySelector('.header__right-block')
const modalClose = document.querySelector('.modal__close')
const modal = document.querySelector('.modal')

const openModal = () => {
    modal.classList.add("show")
    modal.classList.remove("hide")
    document.body.style.overflow = "hidden"
}
modalBtn.addEventListener("click", openModal)


const closeModal = () => {
    modal.classList.add("hide")
    modal.classList.remove("show")
    document.body.style.overflow = "hidden"
}
modalClose.addEventListener("click", closeModal)


    modal.addEventListener("click", (event) => {
        if(event.target == modal) {

            modal.classList.add("hide")
            modal.classList.remove("show")
            document.body.style.overflow = "hidden"
        }
    })

