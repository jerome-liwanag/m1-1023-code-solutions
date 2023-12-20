function handleFocus(event) {
  console.log('focus event was fired');
  console.log('value of name:', event.target.name);
}

function handleBlur(event) {
  console.log('blur event was fired');
  console.log('event target name:', event.target.name);
}

function handleInput(event) {
  console.log('event target name and value:', event.target.name, ' ', event.target.value);
}

const $userName = document.getElementById('user-name');
const $userEmail = document.getElementById('user-email');
const $textarea = document.getElementById('user-message');

$userName.addEventListener('focus', handleFocus);
$userName.addEventListener('blur', handleBlur);
$userName.addEventListener('input', handleInput);

$userEmail.addEventListener('focus', handleFocus);
$userEmail.addEventListener('blur', handleBlur);
$userEmail.addEventListener('input', handleInput);

$textarea.addEventListener('focus', handleFocus);
$textarea.addEventListener('blur', handleBlur);
$textarea.addEventListener('input', handleInput);
