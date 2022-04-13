
let button1 = document.querySelectorAll(".link-button");
console.log(button1);

let store = new Array();
let i = 0;

button1.forEach((buttons) => {
    store[i] = button1[i].innerText;
    i++;
    buttons.addEventListener("click", onclick);
});

class onclick {
    constructor(c) {
        let ans = confirm("Do you want to continue ?");
        if (ans) {
            console.log(c.target.style);
            c.target.style.background = 'black';
            c.target.innerText = 'Downloading';
            setTimeout(() => { this.innerText = store[c.target.id - 1]; this.style.background = ''; }, 5000);
        }
        else {
            alert("Thank you!");
        }
    }
};
