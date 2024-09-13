// Obține referința la elementul audio
const audio = document.getElementById('backgroundMusic');
const toggleButton = document.getElementById('toggleMusicButton');

// Salvează poziția de redare a muzicii la părăsirea paginii
window.addEventListener('beforeunload', function() {
  if (!audio.paused) {
    localStorage.setItem('musicPlaying', 'true');
    localStorage.setItem('audioCurrentTime', audio.currentTime);
  } else {
    localStorage.setItem('musicPlaying', 'false');
  }
});

// Pornește muzica automat la încărcarea paginii în funcție de starea salvată în localStorage
window.addEventListener('load', function() {
  if (localStorage.getItem('musicPlaying') === 'true') {
    audio.currentTime = localStorage.getItem('audioCurrentTime') || 0; // Restore position
    audio.play(); // Pornește muzica
    toggleButton.textContent = 'Pause Music'; // Update button text
  } else {
    audio.pause(); // Oprește muzica
    toggleButton.textContent = 'Play Music'; // Update button text
  }
});

// Funcția pentru a schimba starea muzicii
function toggleMusic() {
  if (audio.paused) {
    audio.play(); // Pornește muzica
    localStorage.setItem('musicPlaying', 'true'); // Salvează starea muzicii ca fiind pornită
    toggleButton.textContent = 'Pause Music'; // Update button text
  } else {
    audio.pause(); // Oprește muzica
    localStorage.setItem('musicPlaying', 'false'); // Salvează starea muzicii ca fiind oprită
    toggleButton.textContent = 'Play Music'; // Update button text
  }
  localStorage.setItem('audioCurrentTime', audio.currentTime); // Salvează poziția curentă
}

// Funcția pentru calculatorul de dragoste
document.getElementById('loveCalculatorForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Previi trimiterea formularului

  // Afișează rezultatul
  document.getElementById('score').textContent = '100%';
  document.getElementById('message').textContent = 'Congratulations! You and your partner are a perfect match!';
  document.getElementById('result').classList.remove('hidden');
});
