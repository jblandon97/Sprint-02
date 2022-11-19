
const d = document
const input_1 = "#Type"
const input_2 = "#Status"
const selector = ".card"


function filterEstates(input_1, input_2, selector) {
    d.addEventListener("keyup", e => {
        console.log(e)
        if (e.target.matches(input_1) || e.target.matches(input_2)) {
            console.log(e.target.value)
            d.querySelectorAll(selector).forEach(element => element.textContent.toLowerCase().includes(e.target.value)
                ? element.classList.remove("hidden")
                : element.classList.add("hidden"))
        }
    })
}

filterEstates(input_1, input_2, selector)