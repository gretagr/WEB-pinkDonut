let radius = 120,
    start = Math.PI * 1.5,
    circum = Math.PI * 2,
    current = 0,
    lineWidth = 4,
    canvasSize = 340,
    center = 170;

let animFrame =
    window.requestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.msRequestAnimationFrame;
window.requestAnimationFrame = animFrame;


// --------- get all canvas elements
let canvas = document.querySelectorAll('canvas');

canvas.forEach(canvas => {
  let finishCount = getFinish(canvas);
  const ctx = canvas.getContext('2d');

  // --------- set canvas size

  canvas.width = canvasSize;
  canvas.height = canvasSize;

  // --------- animate charts

  function animate(draw_to){
  ctx.clearRect(0, 0, canvasSize, canvasSize);


  // --------- Base circle (background)

  drawBase(ctx);

  // --------- Inner circle (cutout)

  drawInnerCircle(draw_to, ctx);

  // --------- Outer Lines and fill

  drawArc(ctx, 15, '#D7D2D6', radius - 10, draw_to);
  drawArc(ctx, lineWidth, '#000', radius, draw_to);
  drawArc(ctx, lineWidth, '#000', radius - 15, draw_to);

  drawLines(ctx);

  current++;

  if(current < finishCount + 1) {
    requestAnimationFrame(function () {
      animate(circum * current / 100 + start);
    });
  }
}

animate();

});


// --------- DRAWING SHAPES FUNCTIONS --------- //

function drawLines(ctx) {
  ctx.beginPath();

  ctx.moveTo(center, 30);
  ctx.lineTo(center, 90);
  ctx.stroke();
  ctx.beginPath();

  ctx.moveTo(center - 10, 45);
  ctx.lineTo(center - 10, 110);
  ctx.stroke();

//   ctx.beginPath();

//   ctx.moveTo(390, 260);
//   ctx.lineTo(480, 265);
//   ctx.stroke();
//   ctx.beginPath();

//   ctx.moveTo(370, 275);
//   ctx.lineTo(460, 280);
//   ctx.stroke();
}

function drawBase(ctx) {
  ctx.beginPath();
  ctx.arc(center, center, radius, 0, Math.PI * 2, false);
  ctx.lineWidth = lineWidth;
  ctx.strokeStyle = '#F4F4F4';
  ctx.fillStyle = '#FDF8FC';
  ctx.fill();
  ctx.stroke();
}

function drawInnerCircle(finish, ctx) {
  ctx.beginPath();
  ctx.arc(center, center, radius - 15, Math.PI * 1.5, finish, false);
  ctx.lineTo(center, center);
  ctx.closePath();
  ctx.lineWidth = lineWidth;
  ctx.strokeStyle = '#F4F4F4';
  ctx.fillStyle = '#fff';
  ctx.fill();
  ctx.stroke();
}

function drawArc(ctx, width, fill, radius, draw_to) {
  ctx.lineWidth = width;
  ctx.strokeStyle = fill;
  ctx.beginPath();
  ctx.arc(center, center, radius, start, draw_to, false);
  ctx.stroke();
}

// --------- Get finish points

function getFinish(canvas) {
  if(canvas.classList.contains('ps')) {
    return 75;
  } else if (canvas.classList.contains('ai')) {
    return 65;
  } else if (canvas.classList.contains('knit')) {
    return 25;
  }
  else return;
}

// animate count

document.querySelectorAll('.chart').forEach(counter => {
  counter.classList.contains('ps') ? setNum(75, counter) :
  counter.classList.contains('ai') ? setNum(65, counter) :
  counter.classList.contains('knit') ? setNum(25, counter) : null
})


// TODO: sureguliuoti laiko ir rato apsisukimo greicius

function setNum(num, counter) {
  let startPoint = 0;
  let interval = setInterval(function () {
    counter.innerHTML = startPoint+ '%';
    if (startPoint >= num) {
      clearInterval(interval);
    }
    startPoint++;
  }, 20)
}
