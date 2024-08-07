'use strict';

const cards = document.querySelectorAll('[data-card-id]');

cards.forEach((card) => {
  const cardId = card.dataset.cardId;
  const cardButton = card.querySelector('[data-button]');
  const cardPopup = card.querySelector('[data-popup]');

  const disableButton = (element) => {
    element.disabled = true;
    element.classList.add('is-disabled');
    element.style.cursor = 'not-allowed';
    element.innerHTML = '<span class="card__loading"></span>';
  };

  const enableButton = (element) => {
    element.disabled = false;
    element.classList.remove('is-disabled');
    element.style.cursor = 'pointer';
    element.innerHTML = 'Good';
  };

  const showPopup = (message) => {
    cardPopup.textContent = message;
  };

  const hidePopup = () => {
    cardPopup.textContent = '';
  };

  cardButton.addEventListener('click', async () => {
    disableButton(cardButton);

    setTimeout(() => {
      enableButton(cardButton);

      const isGoodClicked = localStorage.getItem(`isGoodClicked_${cardId}`);

      if (!isGoodClicked) {
        showPopup('Goodを押しました');
        localStorage.setItem(`isGoodClicked_${cardId}`, true);

        setTimeout(() => {
          hidePopup('');
        }, 4000);
      } else {
        showPopup('既にGoodを押してあります');

        setTimeout(() => {
          hidePopup('');
        }, 4000);
      }
    }, 2500);
  });
});
