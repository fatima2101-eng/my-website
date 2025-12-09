const canvas = document.getElementById("emojiCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const emojis = ["🍝", "🍅", "🫒", "🧄", "🍕", "🥖"];
const particles = [];

class Particle {
  constructor() {
    this.reset();
  }

  reset() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = 30 + Math.random() * 20;          // visible size
    this.speedY = 0.5 + Math.random() * 1.2;      // moderate speed
    this.opacity = 0.15 + Math.random() * 0.25;  // soft but visible (0.15-0.4)
    this.emoji = emojis[Math.floor(Math.random() * emojis.length)];
  }

  update() {
    this.y += this.speedY;
    if (this.y > canvas.height + this.size) {
      this.y = -this.size;
      this.x = Math.random() * canvas.width;
    }
  }

  draw() {
    ctx.globalAlpha = this.opacity;
    ctx.font = `${this.size}px Arial`;
    ctx.fillText(this.emoji, this.x, this.y);
    ctx.globalAlpha = 1;
  }
}

// create 30 floating emojis for fuller effect
for (let i = 0; i < 30; i++) {
  particles.push(new Particle());
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => {
    p.update();
    p.draw();
  });
  requestAnimationFrame(animate);
}

animate();

// handle window resize
window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
