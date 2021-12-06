//Accordion
const accordions = document.querySelectorAll(".accordion-item");

accordions.forEach(accordion => {
    accordion.addEventListener("click", () => {
        accordion.classList.toggle("active");
    })
})

//Form
let error = false

document.querySelector("#selectType")
    .addEventListener('change', (event) => {
        console.log(event)
        event.isTrusted
            ? document.querySelector("#requiredSelectType").innerHTML = ''
            : ''

        error = false
    });

document.querySelector("#selectArea")
    .addEventListener('change', (event) => {
        event.isTrusted
            ? document.querySelector("#requiredSelectArea").innerHTML = ''
            : ''

        error = false
    });

document.querySelector("#selectVacancy")
    .addEventListener('keydown', (event) => {
        console.log(event.key)
        event.key
            ? document.querySelector("#requiredSelectVacancy").innerHTML = ''
            : ''

        error = false
    });

document.querySelector("#search").addEventListener("click", (e) => {
    let selectType = document.querySelector("#selectType").value;
    let selectArea = document.querySelector("#selectArea").value;
    let selectVacancy = document.querySelector("#selectVacancy").value;

    let required = `<p class="required" >Campo Obrigatório</p>`;
    let success = `<p class="required" >Buscando vagas</p>`;

    if (selectType || selectArea || selectVacancy === '') {
        if (selectType === "") {
            document.querySelector("#requiredSelectType").innerHTML = required;
            error = true
        }

        if (selectArea === "") {
            document.querySelector("#requiredSelectArea").innerHTML = required;
            error = true
        }

        if (selectVacancy === "") {
            document.querySelector("#requiredSelectVacancy").innerHTML = required;
            error = true
        }
    } else {
        error = false
    }

    if (!error) {
        document.querySelector("#sendform").innerHTML = success;
    }
});

// Open Modal About Brand

document.querySelector("#aboutBrand").addEventListener("click", (e) => {
    document.getElementById("header").classList.toggle("active");
    document.getElementById("main").classList.toggle("active");
    document.getElementById("about").classList.toggle("active");    
});

// Close Modal About Brand

document.querySelector("#clode-modal").addEventListener("click", (e) => {
    document.getElementById("header").classList.remove("active");
    document.getElementById("main").classList.remove("active");
    document.getElementById("about").classList.remove("active");    
});
