
const canvas = document.querySelector("canvas");
// size canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
// return a object that with it can draw category deffirent shapes
const c = canvas.getContext("2d");

// factory function

function drawCanvas() {
    return {
        // random color
        randomColor: function () {
            let letters = '0123456789ABCDEF';
            let color = '#';

            for (let index = 0; index < 6; index++) {

                color += letters[Math.floor(Math.random() * 16)]
            }

            return color;
        },

        projet1: function () {

            setInterval(() => {

                let x = Math.random() * window.innerWidth;
                let y = Math.random() * window.innerHeight;
                c.beginPath();
                c.arc(x, y, 50, 0, 2 * Math.PI);
                c.strokeStyle = this.randomColor();
                c.stroke();

            }, 600)


        }

    }
}

let re = drawCanvas();

re.projet1();