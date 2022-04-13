const buttons = document.querySelectorAll("[data-carousel-buttons]")

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const offset = button.dataset.carouselButtons === "next" ? 1 : -1 // prev or next ; 
        console.log("OFFSET" + " " + offset)
        const slides = button.closest("[data-carousel]").querySelector("[data-slides]") // selects the list for the data-carousel
        console.log(button.closest("[data-carousel]").querySelector("[data-slides]"))

        const activeSlide = slides.querySelector("[data-active]")
        console.log(activeSlide)
        let newIndex = [...slides.children].indexOf(activeSlide) + offset
        console.log([...slides.children])
        console.log(newIndex)
        if (newIndex < 0) newIndex = slides.children.length - 1
        if (newIndex >= slides.children.length) newIndex = 0

        slides.children[newIndex].dataset.active = true
        delete activeSlide.dataset.active
    })
})