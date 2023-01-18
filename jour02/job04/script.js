const text =  document.querySelector('#keylogger')  // recupérer la variable dans textarea
function listner(event){
  const key = event.key;
  text.value = text.value + key;
}
document.body.addEventListener('keyup', listner)