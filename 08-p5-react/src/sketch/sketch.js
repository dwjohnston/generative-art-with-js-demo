

function random(max) {
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



function drawSnake(context) {
    context.ellipse(Math.floor(snake.x), Math.floor(snake.y), snakeSize, snakeSize);
}


let temp, perm;

const sketch = function (p) {

    p.setup = function () {
        p.createCanvas(400, 400);
        p.background(0);
        temp = p.createGraphics(400, 400);
        perm = p.createGraphics(400, 400);

        temp.fill(0, 255, 0);
        temp.stroke(0, 255, 0);
        perm.stroke(255, 0, 0, 50);
        perm.fill(255, 0, 0, 50);
    }

    p.updateSnake = function () {
        snake.dx = snake.dx - (randRange / 2) + random(randRange);
        snake.dy = snake.dy - (randRange / 2) + random(randRange);
        if ((snake.dx < 0 && snake.x < 0) || (snake.dy > 0 && snake.x > p.displayWidth)) {
            snake.dx *= -1;
        }

        if ((snake.y < 0 && snake.dy < 0) || (snake.y > p.displayHeight && snake.dy > 0)) {
            snake.dy *= -1;
        }
        snake.x += snake.dx;
        snake.y += snake.dy;
    }


    p.draw = function () {

        p.updateSnake();
        drawSnake(perm);
        temp.clear();
        drawSnake(temp);

        p.clear();
        p.image(perm, 0, 0);
        p.image(temp, 0, 0);
    };
};

export default sketch; 