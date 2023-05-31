const values = [document.getElementById("value-1"), document.getElementById("value-2"), document.getElementById("value-3"), document.getElementById("value-4"), document.getElementById("value-5")]
const submitButton = document.getElementById("submit-button")
let selectedValue = 5;

submitButton.addEventListener('click', () => {
    localStorage.setItem("value", selectedValue)
    window.location.href = "finished.html"
})

for (let i=0; i < values.length; i++) {
    let value = values[i]
    value.addEventListener('click', function() {set_value(i+1)})
}

function set_value(v) {
    selectedValue = v;
    console.log("Selected value:", selectedValue)
}