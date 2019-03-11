
document.addEventListener('DOMContentLoaded', () => {

    let clickNum = 0;

    const canvas = document.getElementById("myCanvas");
    const context = canvas.getContext("2d");

    context.strokeStyle = "red";
    context.fillStyle = "green";

    function random(max = canvas.height) {

        return Math.floor(Math.random() * max);
    }

    function displayText(text) {
        document.getElementById("text").innerText = text;
    }

    let imageData;

    document.getElementById('myButton').addEventListener('click', () => {
        switch (clickNum) {
            case 0: {
                displayText("0: fill");
                context.fillRect(10, 20, 100, 40);
                break;
            }
            case 1:
                {
                    displayText("1: stroke - line");
                    context.beginPath();
                    context.moveTo(20, 10);
                    context.lineTo(20, 100);
                    context.stroke();

                    break;
                }

            case 2: {

                displayText("2: stroke - ellipse");
                context.beginPath();
                context.ellipse(30, 30, 50, 50, 0, 0, Math.PI * 2);
                context.stroke();

                break;
            }

            case 3: {

                displayText("3: drawImage");
                const myImage = new Image(184, 274);
                myImage.onload = () => {
                    context.drawImage(myImage, 50, 50);
                }
                myImage.src = "./bart.png";

                break;
            }

            case 4: {

                displayText("4: getImageData/putImageData");
                imageData = context.getImageData(25, 25, 200, 200);
                context.putImageData(imageData, 300, 50);
                break;
            }

            case 5: {

                displayText("5: rotate");
                context.rotate(Math.PI / 8);
                context.fillRect(150, 0, 300, 50);

                break;

            }

            case 6: {

                displayText("6: color mode - multiply");
                context.globalCompositeOperation = "multiply";
                context.fillRect(75, 75, 175, 175);

                break;

            }


            case 7: {

                displayText("6: color mode - difference");
                context.globalCompositeOperation = "difference";
                context.fillRect(105, 105, 175, 175);

                context.translate(200, -50);    //Just add some translate so that a few iterations are going to go ok
                break;


            }

            default: {
                clickNum = 0;
            }
        }

        clickNum = (clickNum + 1) % 8;

    });
}); 