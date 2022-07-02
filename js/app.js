const color = ["red", "blue", "green", "violet"];
const btn = document.getElementById('btn');
const change = document.addEventListener('click', function () {
    document.body.style.backgroundColor = color[randomNumber()]
});

function randomNumber() {
    return Math.floor(Math.random() * color.length);
}
