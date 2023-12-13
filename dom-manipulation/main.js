let count = 0;
const $hotButton = document.querySelector('.hot-button');
const $clickCount = document.querySelector('.click-count');

if (!$hotButton) throw new Error('The $hotButton query failed');
$hotButton.addEventListener('click', function() {
    count++;
    if (!$hotButton || !$clickCount) throw new Error('The $hotButton or $clickCount query failed');
    $clickCount.textContent = 'Clicks:' + ' ' + count;
    if (count < 4) {
      $hotButton.className = 'hot-button cold';
    } else if (count < 7) {
      $hotButton.className = 'hot-button cool';
    } else if (count < 10) {
      $hotButton.className = 'hot-button tepid';
    } else if (count < 13) {
      $hotButton.className = 'hot-button warm';
    } else if (count < 16) {
      $hotButton.className = 'hot-button hot';
    } else {
      $hotButton.className = 'hot-button nuclear';
    }
});
