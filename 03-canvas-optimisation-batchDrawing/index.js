
document.addEventListener('DOMContentLoaded', () => {

    const canvas = document.getElementById("myCanvas");
    const context = canvas.getContext("2d");

    context.strokeStyle = "red";
    context.fillStyle = "rgba(0, 0, 255, 0.1)";

    function random(max = canvas.height) {

        return Math.floor(Math.random() * max);
    }

    document.getElementById('myButton').addEventListener('click', () => {

        context.fillStyle = "white";
        context.fillRect(0, 0, canvas.width, canvas.height);
        //const fillStylePartOne = `rgba(${random(255)}, ${random(255)}, ${random(255)}`;
        context.fillStyle = `rgb(${random(255)},${random(255)},${random(255)})`;

        // const nDots = 20;
        // const dotGap = 20;
        // const dotSize = 5;


        const nDots = canvas.height / 4;
        const dotGap = 8;
        const dotSize = 4;

        const maxColumns = Math.floor(canvas.width / dotGap);
        let columnCount = 0;


        const gradient = context.createLinearGradient(0, 0, 0, canvas.height);
        gradient.addColorStop(0, "white");
        gradient.addColorStop(1, "black");
        context.fillStyle = gradient;


        function drawFrame() {

            context.beginPath();
            for (let i = 0; i < nDots; i++) {
                // const value = Math.floor(255 * (i / nDots));
                // context.fillStyle = `rgb(${value}, ${value}, ${value})`;



                //context.beginPath();
                context.moveTo(columnCount * dotGap, i * dotGap);
                context.ellipse(columnCount * dotGap, i * dotGap, dotSize, dotSize, 0, 0, Math.PI * 2);
                //context.fill();

            }

            context.fill();
            columnCount++;

            if (columnCount > maxColumns) {
                cancelAnimationFrame();
            }
            requestAnimationFrame(drawFrame);
        }

        requestAnimationFrame(drawFrame);

    });
}); 