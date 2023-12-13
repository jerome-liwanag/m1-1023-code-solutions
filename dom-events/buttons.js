function handleClick(event) {
  console.log('button clicked');
  console.log('event object:', event);
  console.log('target property:', event.target);
}

const $clickButton = document.querySelector('.click-button');
if (!$clickButton) throw new Error('The $clickBtn query failed');
$clickButton.addEventListener('click', handleClick);

function handleMouseover(event) {
  console.log('button hovered');
  console.log('event object:', event);
  console.log('target property of event:', event.target);
}

const $hoverButton = document.querySelector('.hover-button');
if (!$hoverButton) throw new Error('The $hoverButton query failed');
$hoverButton.addEventListener('mouseover', handleMouseover);

function handleDoubleClick(event) {
  console.log('button double-clicked');
  console.log('event object:', event);
  console.log('target property of event:', event.target);
}

const $dblClickButton = document.querySelector('.double-click-button');
if (!$dblClickButton) throw new Error('The $dblClickButton query failed');
$dblClickButton.addEventListener('dblclick', handleDoubleClick);
