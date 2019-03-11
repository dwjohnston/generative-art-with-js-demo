
function random(max = canvasPerm.height) {
    return Math.floor(Math.random() * max);
}

const snake = {
    dx: 1,
    dy: 1,
    x: 0,
    y: 0,
}

const randRange = 2;
const snakeSize = 20;

function updateSnake() {
    snake.dx = snake.dx - (randRange / 2) + random(randRange);
    snake.dy = snake.dy - (randRange / 2) + random(randRange);
    if ((snake.dx < 0 && snake.x < 0) || (snake.dy > 0 && snake.x > displayWidth)) {
        snake.dx *= -1;
    }

    if ((snake.y < 0 && snake.dy < 0) || (snake.y > displayHeight && snake.dy > 0)) {
        snake.dy *= -1;
    }
    snake.x += snake.dx;
    snake.y += snake.dy;
}

function drawSnake(context) {
    context.ellipse(Math.floor(snake.x), Math.floor(snake.y), snakeSize, snakeSize);

}
let temp, perm;
function setup() {
    createCanvas(400, 400);
    stroke(50); // Set line drawing color to white

    temp = createGraphics(400, 400);
    perm = createGraphics(400, 400);

    temp.fill(0, 255, 0);
    temp.stroke(0, 255, 0);
    perm.stroke(255, 0, 0, 50);
    perm.fill(255, 0, 0, 50);
}


function draw() {

    updateSnake();
    drawSnake(perm);
    temp.clear();
    drawSnake(temp);

    clear();
    image(perm, 0, 0);
    image(temp, 0, 0);


}

