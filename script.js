// Obține referința la elementul audio și butonul de control
const audio = document.getElementById('backgroundMusic');
const toggleButton = document.getElementById('toggleMusicButton');

// Funcția pentru a porni muzica și a restabili poziția la încărcarea paginii
function initializeAudio() {
  const musicPlaying = localStorage.getItem('musicPlaying') === 'true';
  const savedTime = localStorage.getItem('audioCurrentTime') || 0;

  // Dacă muzica nu a fost încă pornită, începe redarea de pe poziția salvată
  if (musicPlaying) {
    audio.currentTime = savedTime;
    audio.play();
    toggleButton.textContent = 'Pause Music';
  } else {
    audio.pause();
    toggleButton.textContent = 'Play Music';
  }
}

// Funcția pentru a schimba starea muzicii
function toggleMusic() {
  if (audio.paused) {
    audio.play();
    localStorage.setItem('musicPlaying', 'true');
    toggleButton.textContent = 'Pause Music';
  } else {
    audio.pause();
    localStorage.setItem('musicPlaying', 'false');
    toggleButton.textContent = 'Play Music';
  }
  localStorage.setItem('audioCurrentTime', audio.currentTime);
}

// Event listener pentru inițializarea muzicii la încărcarea paginii
window.addEventListener('load', function() {
  // Verifică dacă pagina este homepage și setează muzica
  if (window.location.pathname === '/index.html' || window.location.pathname === '/') {
    // În pagina principală, pornește muzica de la început
    audio.currentTime = 0;
    audio.play();
    localStorage.setItem('musicPlaying', 'true');
    toggleButton.textContent = 'Pause Music';
  } else {
    // Pe alte pagini, continuă redarea din poziția salvată
    initializeAudio();
  }
});

// Event listener pentru salvarea stării muzicii la părăsirea paginii
window.addEventListener('beforeunload', function() {
  localStorage.setItem('audioCurrentTime', audio.currentTime);
  localStorage.setItem('musicPlaying', !audio.paused);
});

// Event listener pentru formularul de calculator de dragoste
document.getElementById('loveCalculatorForm')?.addEventListener('submit', function(event) {
  event.preventDefault(); // Previi trimiterea formularului

  // Afișează rezultatul
  document.getElementById('score').textContent = '100%';
  document.getElementById('message').textContent = 'Congratulations! You and your partner are a perfect match!';
  document.getElementById('result').classList.remove('hidden');
});

// Event listener pentru butonul de control al muzicii
toggleButton?.addEventListener('click', toggleMusic);
