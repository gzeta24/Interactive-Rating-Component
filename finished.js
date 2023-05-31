window.onload = function() {
    const emptyVal = document.getElementById("f-your-selection-value")
    emptyVal.textContent = localStorage.getItem("value")
}