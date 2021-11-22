import confetti from 'https://cdn.skypack.dev/canvas-confetti';
import copyTextToClipboard from 'https://cdn.skypack.dev/copy-text-to-clipboard';

const elem = document.getElementById('password')

function randomPassword() {
    let length = 8
    let result = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    elem.innerText = result;
    copyTextToClipboard(result);
    confetti();
  }

document.body.addEventListener('keyup', (event)=>{
    if (event.keyCode === 13 || event.keyCode === 32) {
        event.preventDefault();
          randomPassword()
      }
      
})
elem.addEventListener('click', randomPassword)
randomPassword()


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