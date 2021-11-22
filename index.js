const elem = document.getElementById('password')

function randomPassword() {
    let length = document.getElementById('length').value
    let result = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    elem.value = result;
  }

document.body.addEventListener('keyup', (event)=>{
    if (event.keyCode === 13 || event.keyCode === 32) {
        event.preventDefault();
          randomPassword()
      }
      
})
randomPassword()