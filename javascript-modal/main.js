const $openButton = document.querySelector('.open-button');
const $background = document.querySelector('.default');
const $modal = document.querySelector('.modal');
const $noButton = document.querySelector('.no-button');

$openButton.addEventListener('click', function () {
  $background.className = 'dimmed-background-display';
  $modal.className = 'modal modal-display';
});

$noButton.addEventListener('click', function () {
  $background.className = 'default';
  $modal.className = 'modal';
});
