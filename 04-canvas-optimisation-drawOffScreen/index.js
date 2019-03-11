
document.addEventListener('DOMContentLoaded', () => {

    const canvas = document.getElementById("myCanvas");
    const context = canvas.getContext("2d");

    context.strokeStyle = "red";
    context.fillStyle = "rgba(0, 0, 255, 0.1)";

    function random(max = canvas.height) {

        return Math.floor(Math.random() * max);
    }

    function getRandomItem(ctx) {

        ctx.fillStyle = `rgba(${random(255)},${random(255)},${random(255)},0.1)`;
        ctx.fillRect(random(), random(), random(), random());


    }

    document.getElementById('myButton').addEventListener('click', () => {

        context.fillStyle = "white";
        context.fillRect(0, 0, canvas.width, canvas.height);

        const nItems = 1000;

        let frameCount = 0;
        const maxFrames = 100;

        function drawFrame() {

            for (let i = 0; i < nItems; i++) {



                getRandomItem(context);
            }

            frameCount++;

            if (frameCount > maxFrames) {
                cancelAnimationFrame();
            }
            requestAnimationFrame(drawFrame);
        }

        requestAnimationFrame(drawFrame);

    });
}); 