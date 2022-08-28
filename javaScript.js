
const canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let c = canvas.getContext('2d');


class Ball {

    constructor(x, y) {

        // Properties of ball

        this.baser = 10;
        this.r = this.baser;
        this.x = x || randomWidth(0 - this.r, window.innerWidth + this.r);
        this.y = y || randomWidth(0 - this.r, window.innerHeight + this.r);;
        this.xv = (Math.random() - 0.5) * 30;
        this.yv = (Math.random() - 0.5) * 30;
        this.draw();
        this.color = Color()

    }

    // drawing  ball
    draw() {

        c.beginPath();
        c.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
        c.fill()
    }

    //Game logic

    update() {

        if (this.x + this.r > window.innerWidth || this.x - this.r < 0) {
            this.xv = -this.xv;
            c.fillStyle = this.color;

        }

        if (this.y + this.r > window.innerHeight || this.y - this.r < 0) {
            this.yv = -this.yv;
            c.fillStyle = this.color;
        }

        this.x += this.xv;
        this.y += this.yv;
        this.draw();
    }
}


let ball = [];

// animation 

function animate() {
    c.clearRect(0, 0, window.innerWidth, window.innerHeight);
    ball.forEach(ball => {
        ball.update();
    })
    requestAnimationFrame(animate);
}

// Production new ball 

window.addEventListener('click', (e) => {
    ball.push(new Ball(e.clientX, e.clientY))
})


// big ball when mousemove

window.addEventListener('mousemove', function (e) {
    ball.forEach(ball => {
        let distance = Math.sqrt(Math.pow(e.clientX - ball.x, 2) + Math.pow(e.clientY - ball.y, 2));
        console.log(distance);
        if (distance < 50 && ball.r < ball.baser * 4) {
            ball.r += 1
        } else if (ball.r > ball.baser && distance > 50) {
            ball.r -= 1
        }
    })

})

// Responsive canvas
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

})

animate();

function Color() {

    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let index = 0; index < 6; index++) {
        color += letters[Math.floor(Math.random() * 16)]
    }

    return color;
}

function randomWidth(min, max) {

    let ran = Math.floor(Math.random() * (max - min + 1) + min);

    return ran;
}

