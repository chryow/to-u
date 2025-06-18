// Music fade-in on load
window.addEventListener('load', () => {
  const music = document.getElementById('bg-music');
  music.volume = 0;
  let fadeIn = setInterval(() => {
    if (music.volume < 0.8) {
      music.volume = Math.min(music.volume + 0.01, 0.8);
    } else {
      clearInterval(fadeIn);
    }
  }, 200);
});

// Music toggle button
const music = document.getElementById('bg-music');
const toggleBtn = document.getElementById('music-toggle');
let isPlaying = false;

toggleBtn.addEventListener('click', () => {
  if (!isPlaying) {
    music.play();
    toggleBtn.textContent = '⏸';
  } else {
    music.pause();
    toggleBtn.textContent = '▶';
  }
  isPlaying = !isPlaying;
});

// Pause music when closing tab
window.addEventListener('beforeunload', () => {
  music.pause();
});
