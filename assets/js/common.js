'use strict';

const cards = document.querySelectorAll('[data-card-id]');

const toggleButton = (element, disable) => {
  element.disabled = disable;
  element.innerHTML = disable
    ? '<span class="good-button__loading"></span>'
    : 'Good';
};

const showPopup = (card, message, duration = 4000) => {
  const cardPopup = document.createElement('p');

  cardPopup.classList.add('card__popup-message');
  cardPopup.textContent = message;
  card.appendChild(cardPopup);

  setTimeout(() => {
    cardPopup.remove();
  }, duration);
};

const handleButtonClick = (card, cardId, button) => {
  toggleButton(button, true);

  setTimeout(() => {
    const isGoodClicked = localStorage.getItem(`isGoodClicked_${cardId}`);
    const message = isGoodClicked
      ? '既にGoodを押してあります'
      : 'Goodを押しました';

    if (!isGoodClicked) {
      localStorage.setItem(`isGoodClicked_${cardId}`, true);
    }

    showPopup(card, message);
    toggleButton(button, false);
  }, 2500);
};

cards.forEach((card) => {
  const cardId = card.dataset.cardId;
  const cardButton = card.querySelector('[data-button]');

  cardButton.addEventListener('click', () => {
    handleButtonClick(card, cardId, cardButton);
  });
});
