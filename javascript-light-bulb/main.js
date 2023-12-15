// Change background color of button in between modes
const $switchButton = document.querySelector('.circle-button');
const currentButtonMode = $switchButton.className;

// Change background color of page in between modes
const $switchBody = document.body;
const currentBodyMode = $switchBody.className;

$switchButton.addEventListener('click', function() {
  if (!$switchButton) throw new Error('The $switchButton query failed');

  if ($switchButton.className.includes('light')) {
    $switchButton.className = currentButtonMode.replace('light', 'dark');
    $switchBody.className = currentBodyMode.replace('light', 'dark');
  } else {
    $switchButton.className = currentButtonMode.replace('dark', 'light');
    $switchBody.className = currentBodyMode.replace('dark', 'light');
  }
});
