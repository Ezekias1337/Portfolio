const checkbox = document.getElementById("switch");

let trans = () => {
    document.getElementById("body").classList.add("transition");
    window.setTimeout(() => {
        document.getElementById("body").classList.remove("transition")
    }, 550)
}

checkbox.addEventListener("click", function () {
    if (checkbox.checked) {
        trans();
        document.getElementById("body").setAttribute("data-theme", "dark");
        let tableArray = document.getElementsByClassName("technology-table");

        for (const item of tableArray) {
            item.classList.replace("table-light", "table-dark")
        }

        document.getElementById("navbar").classList.replace("navbar-light", "navbar-dark")
        document.getElementById("navbar").classList.replace("bg-light", "bg-dark")

    } else {
        trans();
        document.getElementById("body").setAttribute("data-theme", "light");

        let tableArray = document.getElementsByClassName("technology-table");

        for (const item of tableArray) {
            item.classList.replace("table-dark", "table-light")
        }

        document.getElementById("navbar").classList.replace("navbar-dark", "navbar-light")
        document.getElementById("navbar").classList.replace("bg-dark", "bg-light")
    }
})

//Animated text

let i = 0;
const text = "Hello, I'm Frank Edwards. A Front End Web Developer..._";
const speed = 75;

function animateTextTyping() {
    
    if (i < text.length) {
        document.getElementById("animated-text").innerHTML += text.charAt(i);
        i++;
        setTimeout(animateTextTyping, speed);
    }

}

function trailingUnderScore() {
    let indexForComparison = document.getElementById("animated-text").innerHTML.length - 1;

    if(document.getElementById("animated-text").innerHTML[indexForComparison] === "_") {
        let newStr = document.getElementById("animated-text").innerHTML.substring(0, document.getElementById("animated-text").innerHTML.length - 1)
        document.getElementById("animated-text").innerHTML = newStr;     
        } else {
            document.getElementById("animated-text").innerHTML = document.getElementById("animated-text").innerHTML + "_";
        } 
}

function intervalForCurson() {
    setInterval(trailingUnderScore, 500);
}

animateTextTyping();
setTimeout(intervalForCurson, 4000)