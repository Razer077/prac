const input = document.querySelector("#button");
const form = document.querySelector(".main-form");
const email = document.querySelector("#email");
const errorMsg = document.querySelector(".error-msg");

input.addEventListener("click", onclick);

function onclick(e) {
    if (email.value != "kritantamrakar96@gmail.com") {
        console.log(1);
        errorMsg.style.background = "red";
        errorMsg.style.borderRadius = "5px";
        errorMsg.style.width = "auto";
        errorMsg.innerHTML = "Error! Please enter correct email and password!";
        let i = 0;
        let watch = setInterval(() => {
            i++;
            console.log(i);
            if (i == 3) {
                clearInterval(watch);
                errorMsg.textContent = "";
            }
        }, 1000);
    }
}

