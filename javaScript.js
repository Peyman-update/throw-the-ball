
const canvas = document.querySelector("canvas");
// size canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
// return a object that with it can draw category deffirent shapes
const c = canvas.getContext("2d");

// factory function

function drawCanvas() {
    return {

        Rectangle: function () {

            c.fillStyle = "red";
            c.fillRect(100, 100, 100, 50);
            c.fillStyle = "green";
            c.fillRect(300, 200, 100, 50);
            c.fillStyle = "red";
            c.fillRect(500, 100, 100, 50);
            c.fill();
        },

        Line: function () {

            c.beginPath();
            c.lineTo(200, 300)
            c.lineTo(400, 500)
            c.lineTo(600, 400)
            c.lineTo(700, 400)
            c.lineTo(700, 600)
            c.strokeStyle = 'red'
            c.stroke()
        },
    }
}


// constructor function

function DrawCanvas() {

    this.getRandomColor = function () {

        let letters = '0123456789ABCDEF'

        let color = '#';

        for (let r = 0; r < 6; r++) {

            color += letters[Math.floor(Math.random() * 16)]

        }

        return color;

    }


    this.Rectangle = () => {
        c.strokeStyle = this.getRandomColor()
        c.strokeRect(100, 100, 200, 100);
        c.strokeStyle = this.getRandomColor()
        c.strokeRect(300, 300, 200, 100);
        c.strokeStyle = this.getRandomColor()
        c.strokeRect(500, 100, 200, 100);
        c.strokeStyle = this.getRandomColor()
        c.strokeRect(700, 300, 200, 100);
        c.stroke();

    }
    this.Line = () => {

        c.beginPath();
        c.lineTo(100, 300)
        c.lineTo(500, 600)
        c.lineTo(400, 200)
        c.lineTo(100, 200)
        c.lineTo(700, 150)
        c.strokeStyle = this.getRandomColor()
        // Connect the beginning of the line to the end of the line
        c.closePath()
        // drawing shape
        c.stroke()

    }

    this.Circle = () => {

        let i = 0;

        do {

            let x = Math.random() * window.innerWidth;
            let y = Math.random() * window.innerHeight;
            c.beginPath()
            c.arc(x, y, 50, 0, 2 * Math.PI);
            c.strokeStyle = this.getRandomColor();
            c.stroke();

            i++;

        } while (i <= 100)

    }
}


const result = new DrawCanvas();

//result.Rectangle();
//result.Line();
result.Circle();

//const result = drawCanvas().Line();