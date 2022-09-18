//======================================================================== Selector All Elements

let c = document.querySelector("#canvas");

let ctx = c.getContext("2d");

let btn = document.querySelector("button");

let btnDarw = document.querySelector(".darw");

let stopDarw = document.querySelector(".stopDarw");

let darwing = false;

//======================================================================== Add Size To Canvas Element

c.width = this.innerWidth;

c.height = this.innerHeight;

//======================================================================== Add Size When Windo Resize

this.addEventListener("resize", () => {

  c.width = this.innerWidth;

  c.height = this.innerHeight;

});

//======================================================================== Create Function To Darw Shape

function darwShape(x, y, raduis, inset, n) {

  ctx.beginPath();

  ctx.save();

  ctx.translate(x, y);

  for (let i = 0; i < n; i++) {

    ctx.rotate(Math.PI / n);

    ctx.lineTo(0, 0 - raduis * inset);

    ctx.rotate(Math.PI / n);

    ctx.lineTo(0, 0 - raduis);

  }

  ctx.closePath();

  ctx.fill();

  ctx.stroke();

  ctx.restore();

}
//======================================================================== Create variable to use it in function

let raduis = 40;

let inset = 0.5;

let number = 8;

let counter = 0;

let angle = 0;


// ======================================================================== Make Event when mouse move
c.addEventListener("mousemove", function (e) {
  
  if (darwing) {

    ctx.save();

    ctx.fillStyle = "hsl(" + counter + " , 100% , 50%)";

    counter += 2;

    //======================================================================== Make Rotate Shape

    ctx.translate(e.x, e.y);

    ctx.rotate(angle);
    
    angle += 12;
    
    //======================================================================== End Make Rotate Shape

    darwShape(0, 0, raduis, inset, number);

    ctx.restore();

    //======================================================================== Create Caricle in shape

    ctx.save();

    ctx.beginPath();

    ctx.fillStyle = "white";

    ctx.arc(e.x, e.y, 20, 0, Math.PI * 2);

    ctx.fill();

    ctx.restore();

    //======================================================================== Create Caricle in shape

    //======================================================================== Create another Craicle

    ctx.save();

    ctx.beginPath();

    ctx.fillStyle = "black";

    ctx.arc(e.x, e.y, 10, 0, Math.PI * 2);

    ctx.fill();

    ctx.restore();

    //======================================================================== End Create another Craicle

  }
});
//======================================================================== Create Main Shape

ctx.save();

ctx.fillStyle = "white";

darwShape(170, 170, 150, 0.5, 3);

ctx.fillStyle = "yellow";

ctx.strokeStyle = "yellow";

darwShape(170, 170, 70, 0.5, 30);

ctx.restore();

//======================================================================== End Main Shape

//======================================================================== Create Event when button click

btn.addEventListener("click", function () {

  ctx.clearRect(0, 0, c.width, c.height);

  ctx.save();

  ctx.fillStyle = "white";

  darwShape(170, 170, 150, 0.5, 3);

  ctx.fillStyle = "yellow";

  ctx.strokeStyle = "yellow";

  darwShape(170, 170, 70, 0.5, 30);

  ctx.restore();

});
//======================================================================== button darw click
btnDarw.addEventListener("click", function () {

  c.classList.add("active");

  if (c.classList.contains("active")) {

    darwing = true;

  }
});
// button to Stop Darwing

stopDarw.addEventListener("click", function () {

  if (c.classList.contains("active")) {

    c.classList.remove("active");
    
    darwing = false;

  }
});
