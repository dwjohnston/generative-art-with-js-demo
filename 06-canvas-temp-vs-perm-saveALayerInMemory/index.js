
document.addEventListener('DOMContentLoaded', () => {

    const canvasPerm = document.getElementById("canvasPerm");
    const contextPerm = canvasPerm.getContext("2d");

    const canvasOffscreen = document.createElement("canvas");
    canvasOffscreen.width = canvasPerm.width;
    canvasOffscreen.height = canvasPerm.height;
    const contextOffscreen = canvasOffscreen.getContext("2d");

    function random(max = canvasPerm.height) {
        return Math.floor(Math.random() * max);
    }

    document.getElementById('myButton').addEventListener('click', () => {

        contextOffscreen.fillStyle = "rgba(255, 0, 0, 0.2)";
        contextPerm.fillStyle = "green";

        let frameCount = 0;
        const maxFrames = 100;

        const snake = {
            dx: 1,
            dy: 1,
            x: 0,
            y: 0,
        }

        const randRange = 2;
        const snakeSize = 5;

        function updateSnake() {
            snake.dx = snake.dx - (randRange / 2) + random(randRange);
            snake.dy = snake.dy - (randRange / 2) + random(randRange);
            if ((snake.dx < 0 && snake.x < 0) || (snake.dy > 0 && snake.x > canvasPerm.width)) {
                snake.dx *= -1;
            }

            if ((snake.y < 0 && snake.dy < 0) || (snake.y > canvasPerm.height && snake.dy > 0)) {
                snake.dy *= -1;
            }
            snake.x += snake.dx;
            snake.y += snake.dy;
        }

        function drawSnake(context) {
            context.beginPath();
            context.moveTo(Math.floor(snake.x), Math.floor(snake.y));
            context.ellipse(Math.floor(snake.x), Math.floor(snake.y), snakeSize, snakeSize, 0, 0, Math.PI * 2);
            context.fill();
        }


        function drawFrame() {

            updateSnake();


            contextPerm.clearRect(0, 0, canvasPerm.width, canvasPerm.height);
            drawSnake(contextOffscreen);

            const imageData = contextOffscreen.getImageData(0, 0, canvasPerm.width, canvasPerm.height);
            contextPerm.putImageData(imageData, 0, 0);
            drawSnake(contextPerm);

            if (frameCount > maxFrames) {
                cancelAnimationFrame();
            }
            requestAnimationFrame(drawFrame);
        }

        requestAnimationFrame(drawFrame);

    });
}); 