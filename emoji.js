let emojis = ["😊", "😰", "👨‍💻"];
let input = document.getElementById("input-value");





let container = document.getElementById("emoji-container");
function render() {
    container.textContent = "";
    for (let i = 0; i < emojis.length; i++) {
        container.textContent += emojis[i] + "   ";
    }
}
render();



let poping = document.getElementById("pop");
poping.addEventListener("click", function () {
    emojis.pop();
    //container.textContent = "";
    render();
})

let pushing = document.getElementById("push");
pushing.addEventListener("click", function () {
    if (input.value) {
        emojis.push(input.value);
    }
    render();
    input.value = "";

})

let shifting = document.getElementById("shift");
shifting.addEventListener("click", function () {
    emojis.shift();
    render();
})


let unshifting = document.getElementById("unshift");
unshifting.addEventListener("click", function () {
    if (input.value) {
        emojis.unshift(input.value);
    }
    render();
    input.value = "";
})