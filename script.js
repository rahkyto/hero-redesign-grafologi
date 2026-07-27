const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  card.addEventListener('click', (e) => {
    const alreadyActive = card.classList.contains('is-active');
    cards.forEach(c => c.classList.remove('is-active'));
    if (!alreadyActive) card.classList.add('is-active');
    e.stopPropagation();
  });
});

document.addEventListener('click', () => {
  cards.forEach(c => c.classList.remove('is-active'));
});