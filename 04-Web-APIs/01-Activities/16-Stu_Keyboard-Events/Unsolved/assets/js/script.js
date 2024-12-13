const h2Key = document.querySelector('#key');
const divCode = document.querySelector('#code');

function keydownAction(event) {

  const key = event.key;
  h2Key.textContent = key;
  divCode.textContent = event.divCode;
  document.querySelector('#status').textContent = 'KEYDOWN Event';
}

function keyupAction(event) {
  const key = event.key;
  h2Key.textContent = key;
  divCode.textContent = key;
  document.querySelector('#status').textContent = 'KEYUP Event';
}



document.addEventListener('keyup', keyupAction);

document.addEventListener('keydown', keydownAction);


