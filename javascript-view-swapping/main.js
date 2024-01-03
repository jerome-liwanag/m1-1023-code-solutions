const $tabContainer = document.querySelector('.tab-container');
const $tabElements = document.querySelectorAll('.tab');
const $viewElements = document.querySelectorAll('.view');

$tabContainer.addEventListener('click', function(event) {
  if (event.target.matches('.tab')) {
    for (const $tabElement of $tabElements) {
      if ($tabElement === event.target) {
        $tabElement.className = 'tab active';
      } else {
        $tabElement.className = 'tab';
      }
    }

    const $dataView = event.target.getAttribute('data-view');
    for (const $viewElement of $viewElements) {
      if ($viewElement.getAttribute('data-view') === $dataView) {
        $viewElement.className = 'view';
      } else {
        $viewElement.className = 'view hidden';
      }
    }
  }
});
