const accordions = document.querySelectorAll(".accordion-item");

accordions.forEach(accordion => {
    accordion.addEventListener("click", () => {
        accordion.classList.toggle("active");
    })  
})