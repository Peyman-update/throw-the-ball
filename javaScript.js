
const canvas = document.querySelector("canvas");
// size canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
// return a object that with it can draw category deffirent shapes
const c = canvas.getContext("2d");

let x = 50;
let y = 50;
let r = 40;
let xv = 7;
let yv = 7;

function Color() {

    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let index = 0; index < 6; index++) {
        color += letters[Math.floor(Math.random() * 16)]
    }

    return color;
}

function animate() {
    c.clearRect(0, 0, window.innerWidth, window.innerHeight);
    c.beginPath()
    c.arc(x, y, r, 0, 2 * Math.PI);
    c.fill();
   

    if (x+r > window.innerWidth || x-r < 0) {
        xv = -xv;
        c.fillStyle = Color();
        c.fill();
    }

    if (y+r > window.innerHeight || y-r < 0) {
        yv = -yv;
        c.fillStyle = Color();
        c.fill();
    }

    x += xv;
    y += yv
    requestAnimationFrame(animate);
}

animate();
