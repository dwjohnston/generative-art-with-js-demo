
document.addEventListener('DOMContentLoaded', () => {

    const canvas = document.getElementById("myCanvas");
    const context = canvas.getContext("2d");

    context.strokeStyle = "red";
    context.fillStyle = "rgba(0, 0, 255, 0.1)";

    function random(max = canvas.height) {

        return Math.floor(Math.random() * max);
    }

    document.getElementById('myButton').addEventListener('click', () => {

        context.fillStyle = `rgba(${random(255)}, ${random(255)}, ${random(255)}, 0.1)`;


        //Don't do this!
        setInterval(() => {
            for (let i = 0; i < 100; i++) {
                context.fillRect(random(), random(), 10, 10);
            }
        }, 33);


        // function drawFrame() {
        //     for (let i = 0; i < 100; i++) {
        //         context.fillRect(random(), random(), 10, 10);
        //     }

        //     requestAnimationFrame(drawFrame);
        // }

        // requestAnimationFrame(drawFrame);

    });
}); 