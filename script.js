// Obține referința la elementul audio
const audio = document.getElementById('backgroundMusic');
const toggleButton = document.getElementById('toggleMusicButton');

// Pornește muzica automat la încărcarea paginii în funcție de starea salvată în localStorage
window.addEventListener('load', function() {
  if (localStorage.getItem('musicPlaying') === 'true') {
    audio.play(); // Pornește muzica
  } else {
    audio.pause(); // Oprește muzica
  }
});

// Funcția pentru a schimba starea muzicii
function toggleMusic() {
  if (audio.paused) {
    audio.play(); // Pornește muzica
    localStorage.setItem('musicPlaying', 'true'); // Salvează starea muzicii ca fiind pornită
  } else {
    audio.pause(); // Oprește muzica
    localStorage.setItem('musicPlaying', 'false'); // Salvează starea muzicii ca fiind oprită
  }
}

// Exemplu de utilizare a funcției pentru a schimba starea muzicii
if (toggleButton) {
  toggleButton.addEventListener('click', toggleMusic);
}

// Funcția pentru calculatorul de dragoste
document.getElementById('loveCalculatorForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Previi trimiterea formularului

  // Afișează rezultatul
  document.getElementById('score').textContent = '100%';
  document.getElementById('message').textContent = 'Congratulations! You and your partner are a perfect match!';
  document.getElementById('result').classList.remove('hidden');
});
