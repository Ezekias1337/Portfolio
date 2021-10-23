const checkbox = document.getElementById("switch");

let trans = () => {
    document.getElementById("body").classList.add("transition");
    window.setTimeout(() => {
        document.getElementById("body").classList.remove("transition")
    }, 550)
}

checkbox.addEventListener("click", function () {
    
    console.log(document.getElementById("body"))

    if (checkbox.checked) {
        trans();
        document.getElementById("body").setAttribute("data-theme", "dark");
    } else {
        trans();
        document.getElementById("body").setAttribute("data-theme", "light");
    }

    

})