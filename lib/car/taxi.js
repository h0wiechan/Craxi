import Car from "./car";

class Taxi extends Car {
  constructor(options) {
    super(options); // 315, 470, 70, 110, variable, 0, 70
    // this.lane = 3;
    // this.posXs = [142.5, 235, 327.5, 420, 512.5];
    this.posX = 327.5;
    this.posY = 470;
    // Refactor: 
    // [canvas]wheelDist should depend on height
  }


  move(n) {
    // const targetPosX = this.posX + n;
    // const diff = n > 0 ? 0.25 : -0.25;
    // while (this.posX !== targetPosX) {
    //   this.posX += diff;
    // }
    this.posX += n;
  }

  draw(ctx) {
    // Refactoring: n for-loops

    // car body
    ctx.beginPath();
    ctx.moveTo(this.posX, this.posY);
    ctx.quadraticCurveTo(this.posX + this.width / 2, this.posY - 15, this.posX + this.width, this.posY);
    ctx.quadraticCurveTo(this.posX + this.width + 8, this.posY + (this.height / 2), this.posX + this.width, this.posY + this.height);
    ctx.quadraticCurveTo(this.posX + this.width / 2, this.posY + this.height + 15, this.posX, this.posY + this.height);
    ctx.quadraticCurveTo(this.posX - 8, this.posY + (this.height / 2), this.posX, this.posY);
    ctx.fillStyle = "#EBC72B";
    ctx.fill();
    ctx.stroke();

    // wheels
    ctx.beginPath();
    ctx.moveTo(this.posX - 7, this.posY + 10);
    ctx.lineTo(this.posX, this.posY + 10);
    ctx.lineTo(this.posX, this.posY + 30);
    ctx.lineTo(this.posX - 7, this.posY + 30);
    ctx.lineTo(this.posX - 7, this.posY + 10);
    ctx.fillStyle = "grey";
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(this.posX + this.width + 7, this.posY + 10);
    ctx.lineTo(this.posX + this.width, this.posY + 10);
    ctx.lineTo(this.posX + this.width, this.posY + 30);
    ctx.lineTo(this.posX + this.width + 7, this.posY + 30);
    ctx.lineTo(this.posX + this.width + 7, this.posY + 10);
    ctx.fillStyle = "grey";
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(this.posX - 7, this.posY + this.wheelDist + 10);
    ctx.lineTo(this.posX, this.posY + this.wheelDist + 10);
    ctx.lineTo(this.posX, this.posY + this.wheelDist + 30);
    ctx.lineTo(this.posX - 7, this.posY + this.wheelDist + 30);
    ctx.lineTo(this.posX - 7, this.posY + this.wheelDist + 10);
    ctx.fillStyle = "grey";
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(this.posX + this.width + 7, this.posY + this.wheelDist + 10);
    ctx.lineTo(this.posX + this.width, this.posY + this.wheelDist + 10);
    ctx.lineTo(this.posX + this.width, this.posY + this.wheelDist + 30);
    ctx.lineTo(this.posX + this.width + 7, this.posY + this.wheelDist + 30);
    ctx.lineTo(this.posX + this.width + 7, this.posY + this.wheelDist + 10);
    ctx.fillStyle = "grey";
    ctx.fill();
    ctx.stroke();

    // trunk
    ctx.beginPath();
    ctx.moveTo(this.posX + this.width / 2 - 15, this.posY + 102);
    ctx.lineTo(this.posX + this.width / 2 + 15, this.posY + 102)
    ctx.stroke();

    // headlights
    ctx.beginPath();
    ctx.ellipse(this.posX + 15, this.posY + 2.5, 3, 10, 75 * Math.PI/180, 0, 2 * Math.PI);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.ellipse(this.posX + this.width - 15, this.posY + 2.5, 3, 10, 105 * Math.PI/180, 0, 2 * Math.PI);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.stroke();

    // hood shades
    ctx.beginPath();
    ctx.moveTo(this.posX + 5, this.posY + 10);
    ctx.lineTo(this.posX + 10, this.posY + 25)
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(this.posX + this.width - 5, this.posY + 10);
    ctx.lineTo(this.posX + this.width - 10, this.posY + 25)
    ctx.stroke();

    //brake lights
    ctx.beginPath();
    ctx.arc(this.posX + 10, this.posY + this.height - 2.5, 3, 0, 2 * Math.PI);
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(this.posX + 15, this.posY + this.height - 2, 3, 0, 2 * Math.PI);
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(this.posX + this.width - 10, this.posY + this.height - 2.5, 3, 0, 2 * Math.PI);
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(this.posX + this.width - 15, this.posY + this.height - 2, 3, 0, 2 * Math.PI);
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.stroke();

    // front window
    ctx.beginPath();
    ctx.moveTo(this.posX + 10, this.posY + 30);
    ctx.lineTo(this.posX + 60, this.posY + 30);
    ctx.lineTo(this.posX + 60 - 10, this.posY + 30 + 15);
    ctx.lineTo(this.posX + 20, this.posY + 30 + 15);
    ctx.lineTo(this.posX + 10, this.posY + 30);
    ctx.fillStyle = "#83cef4";
    ctx.fill();
    ctx.stroke();

    // left window
    ctx.beginPath();
    ctx.moveTo(this.posX + 5, this.posY + 30);
    ctx.lineTo(this.posX + 5, this.posY + 30 + 60);
    ctx.lineTo(this.posX + 5 + 10, this.posY + 30 + 60 - 20);
    ctx.lineTo(this.posX + 5 + 10, this.posY + 30 + 60 - 20 - 20);
    ctx.lineTo(this.posX + 5, this.posY + 30);
    ctx.fillStyle = "#83cef4";
    ctx.fill();
    ctx.stroke();

    // right window
    ctx.beginPath();
    ctx.moveTo(this.posX + 5 + 60, this.posY + 30);
    ctx.lineTo(this.posX + 5 + 60, this.posY + 30 + 60);
    ctx.lineTo(this.posX + 5 + 60 - 10, this.posY + 30 + 60 - 20);
    ctx.lineTo(this.posX + 5 + 60 - 10, this.posY + 30 + 60 - 20 - 20);
    ctx.lineTo(this.posX + 5 + 60, this.posY + 30);
    ctx.fillStyle = "#83cef4";
    ctx.fill();
    ctx.stroke();

    // rear window
    ctx.beginPath();
    ctx.moveTo(this.posX + 10, this.posY + 95);
    ctx.lineTo(this.posX + 10 + 50, this.posY + 95);
    ctx.lineTo(this.posX + 10 + 50 - 10, this.posY + 95 - 20);
    ctx.lineTo(this.posX + 10 + 10, this.posY + 95 - 20);
    ctx.lineTo(this.posX + 10, this.posY + 95);
    ctx.fillStyle = "#83cef4";
    ctx.fill();
    ctx.stroke();

    // taxi top
    ctx.beginPath();
    ctx.moveTo(this.posX + 30, this.posY + 55);
    ctx.lineTo(this.posX + 30 + 10, this.posY + 55);
    ctx.lineTo(this.posX + 30 + 10, this.posY +  55 + 15);
    ctx.lineTo(this.posX + 30, this.posY +  55 + 15);
    ctx.lineTo(this.posX + 30, this.posY + 55);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.stroke();
  }
}

export default Taxi;