let button = document.querySelectorAll('.link-button');
console.log(button);

let store = new Array();
let i = 0;

button.forEach((buttons) => {
    store[i] = button[i].innerText;
    i++;
    buttons.addEventListener('click', onclick);
});

console.log(store);

function onclick(c) {
    let ans = confirm("Do you want to continue ?");
    if (ans) {
        console.log(c.target.style);
        c.target.style.background = 'black';
        c.target.innerText = 'Downloading';
        setTimeout(() => { this.innerText = store[c.target.id - 1]; this.style.background = '' }, 5000);
    }
    else {
        alert("Thank you!");
    }
}