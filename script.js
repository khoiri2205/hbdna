function tampilkanSurprise() {
  alert("🎈 Kejutan! Semoga semua impianmu tercapai tahun ini. Tetap semangat dan bahagia selalu! 🎂");
}

// Konfeti sederhana
const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const pieces = [];
for (let i = 0; i < 100; i++) {
  pieces.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height - canvas.height,
    speed: Math.random() * 3 + 2,
    size: Math.random() * 5 + 5,
    color: `hsl(${Math.random() * 360}, 70%, 60%)`
  });
}

function update() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let piece of pieces) {
    ctx.fillStyle = piece.color;
    ctx.beginPath();
    ctx.arc(piece.x, piece.y, piece.size, 0, 2 * Math.PI);
    ctx.fill();

    piece.y += piece.speed;
    if (piece.y > canvas.height) {
      piece.y = -piece.size;
      piece.x = Math.random() * canvas.width;
    }
  }
  requestAnimationFrame(update);
}

update()
