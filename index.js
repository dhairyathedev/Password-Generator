import confetti from 'https://cdn.skypack.dev/canvas-confetti';
import copyTextToClipboard from 'https://cdn.skypack.dev/copy-text-to-clipboard';

const elem = document.getElementById('password')
const copyCheck = document.getElementById('copyCheck')
const strengthElem = document.getElementById('strength')

function randomPassword() {
  let result = '';
    let length = 12
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+*-/!@#$%^&*()_-?/><.,';
    let charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    elem.innerText = result;
    if(!copyCheck.checked){
      console.log('Copy disabled');
      passwordStrength(result);
    }else{
    copyTextToClipboard(result);
    confetti();
    passwordStrength(result);
    }
  }

document.body.addEventListener('keyup', (event)=>{
    if (event.keyCode === 13 || event.keyCode === 32) {
        event.preventDefault();
          randomPassword()
      }
      
})
elem.addEventListener('click', randomPassword)



// Dark Light Toggle
const dark = document.getElementById('dark')
const light = document.getElementById('light')

function toggleDark(){
    dark.classList.add('d-none')
    light.classList.remove('d-none')
    document.body.style.backgroundColor = "#212224"
    document.body.style.color = "#fff"
}

dark.addEventListener('click', toggleDark)

function toggleLight(){
    light.classList.add('d-none')
    dark.classList.remove('d-none')
    document.body.style.backgroundColor = "#fff"
    document.body.style.color = "#000"
}
light.addEventListener('click', toggleLight)

// Password Strength Detection
function passwordStrength(password) {
  let strength = 0
  if (password.length > 8) {
      strength += 1
  }
  if (password.match(/[a-z]/)) {
      strength += 1
  }
  if (password.match(/[A-Z]/)) {
      strength += 1
  }
  if (password.match(/[0-9]/)) {
      strength += 1
  }
  if (password.match(/[^a-zA-Z0-9]/)) {
      strength += 1
  }
    if (strength <= 1) {
      strengthElem.innerHTML = ' ❌ Weak Password'
      strengthElem.style.color = 'red'
      // console.log('week');
  }
  if (strength >= 2) {
    strengthElem.innerHTML = '⚠️ Good Password'
    strengthElem.style.color = '#DBA419'

      // console.log('GOod');
  }
  if (strength > 3) {
      strengthElem.innerHTML = ' ✅ Strong Password'
      strengthElem.style.color = '#11A927'
      // console.log('strong');
  }
}
