const cards = document.querySelectorAll('.card');

function handleCardHover(event) {
  cards.forEach(card => {
    if (card !== event.currentTarget) {
      card.style.filter = 'grayscale(100%)';
    }
  });

  event.currentTarget.style.transition = 'transform 0.3s';
  event.currentTarget.style.transform = 'scale(1.05)';
  event.currentTarget.querySelector('.card-content').style.textShadow = '2px 2px 4px rgba(0, 0, 0, 0.5)';
}

function handleCardLeave(event) {
  cards.forEach(card => {
    card.style.filter = 'none';
    card.style.transform = 'scale(1)';
    card.querySelector('.card-content').style.textShadow = 'none';
  });
}

cards.forEach(card => {
  card.addEventListener('mouseenter', handleCardHover);
  card.addEventListener('mouseleave', handleCardLeave);
});
