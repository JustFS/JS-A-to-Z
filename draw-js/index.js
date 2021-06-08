const canvas = document.getElementById('art');
const ctx = canvas.getContext('2d');

function getMousePos(canvas, e) {
  const rect = canvas.getBoundingClientRect();
  return {
    x: e.clientX - rect.left,
    y: e.clientY - rect.top
  };
}

function mouseMove(e) {
  const mousePos = getMousePos(canvas, e);
  ctx.lineTo(mousePos.x, mousePos.y);
  ctx.stroke();
  ctx.strokeStyle = "blue"
  ctx.lineWidth = 10
}

canvas.addEventListener('mousedown', (e) => {
  e.preventDefault();
  const mousePos = getMousePos(canvas, e);
  ctx.beginPath();
  ctx.moveTo(mousePos.x, mousePos.y);
  canvas.addEventListener('mousemove', mouseMove);
  canvas.addEventListener('mouseup', () => {
    canvas.removeEventListener('mousemove', mouseMove);
  });
});


document.getElementById('reset').addEventListener('click', () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});



