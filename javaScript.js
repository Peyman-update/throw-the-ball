
const canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let c = canvas.getContext('2d');


class Ball {

    constructor() {

        this.r = Math.floor(Math.random() * 40);
        this.x = randomWidth(0 - this.r, window.innerWidth + this.r);
        this.y = randomWidth(0 - this.r, window.innerHeight + this.r);;
        this.xv = (Math.random() - 0.5) * 30;
        this.yv = (Math.random() - 0.5) * 30;
        this.draw();
        this.color = Color()

    }

    draw() {

        c.beginPath();
        c.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
        c.fill()
    }

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

for (let index = 0; index < 200; index++) {

    ball.push(new Ball)

}

function animate() {

    c.clearRect(0, 0, window.innerWidth, window.innerHeight);

    ball.forEach(ball => {
        ball.update();
    })

    requestAnimationFrame(animate);
}


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

