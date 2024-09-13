document.getElementById('loveCalculatorForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  // Display the result
  document.getElementById('score').textContent = '100%';
  document.getElementById('message').textContent = 'Congratulations! You and your partner are a perfect match!';
  document.getElementById('result').classList.remove('hidden');
});
