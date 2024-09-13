document.getElementById('loveCalculatorForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission
  
  const name1 = document.getElementById('name1').value;
  const name2 = document.getElementById('name2').value;
  
  // Simple random score for demonstration
  const score = Math.floor(Math.random() * 101);
  
  // Display the result
  document.getElementById('score').textContent = `${score}%`;
  document.getElementById('result').classList.remove('hidden');
});
