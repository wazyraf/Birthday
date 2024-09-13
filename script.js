// Obține referința la elementul audio
const audio = document.getElementById('backgroundMusic');

// Pornește muzica automat la încărcarea paginii
window.addEventListener('load', function() {
  audio.play(); // Pornește muzica
});

// Oprește muzica dacă utilizatorul vrea să o oprească
function toggleMusic() {
  if (audio.paused) {
    audio.play(); // Pornește muzica
  } else {
    audio.pause(); // Oprește muzica
  }
}

// Exemplu de utilizare a funcției pentru a schimba starea muzicii
document.getElementById('toggleMusicButton').addEventListener('click', toggleMusic);

// Funcția pentru calculatorul de dragoste
document.getElementById('loveCalculatorForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Previi trimiterea formularului

  // Afișează rezultatul
  document.getElementById('score').textContent = '100%';
  document.getElementById('message').textContent = 'Congratulations! You and your partner are a perfect match!';
  document.getElementById('result').classList.remove('hidden');
});
