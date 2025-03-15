document.addEventListener('DOMContentLoaded', () => {
  const starsContainer = document.querySelector('.stars');
  const numStars = 100;

  for (let i = 0; i < numStars; i++) {
    const star = document.createElement('div');
    star.classList.add('star');
    star.style.top = `${Math.random() * 100}%`;
    star.style.left = `${Math.random() * 100}%`;
    star.style.animationDelay = `${Math.random() * 2}s`;
    starsContainer.appendChild(star);
  }

  function updateBrightness() {
    const hour = new Date().getHours();
    const brightness = Math.max(0.1, 1 - Math.abs(hour - 12) / 12);
    document.querySelector('.moon').style.boxShadow = `0 0 60px rgba(255, 255, 255, ${brightness})`;
    document.querySelectorAll('.star').forEach((star) => {
      star.style.boxShadow = `0 0 5px rgba(255, 255, 255, ${brightness})`;
    });
  }

  updateBrightness();
  setInterval(updateBrightness, 60000); // Update brightness every minute

  // Show the prompt container after 10 seconds
  setTimeout(() => {
    document.querySelector('.prompt-container').style.display = 'flex';
    document.querySelector('#prompt1').style.display = 'block';
  }, 5000);
});

function handlePrompt1(response) {
  if (response === 'yes') {
    showPrompt('prompt2');
  }
}

function handlePrompt2(response) {
  if (response === 'yes') {
    showPrompt('prompt3');
  }
}

function handlePrompt3(response) {
  if (response === 'yes') {
    showPrompt('prompt5');
  }
}

function handlePrompt4() {
  showPrompt('prompt6');
}

function handlePrompt5() {
  alert("Thank you! You're amazing!");
}

function showPrompt(promptId) {
  document.querySelectorAll('.prompt').forEach((prompt) => {
    prompt.style.display = 'none';
  });
  document.querySelector(`#${promptId}`).style.display = 'block';
}

function submitRating() {
  const rating = document.querySelector('#rating').value;
  if (rating >= 1 && rating <= 100) {
    showPrompt('prompt4');
  } else {
    alert('Please enter a rating between 1 and 10.');
  }
}
