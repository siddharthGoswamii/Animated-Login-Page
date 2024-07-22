const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');
const inBtn = document.getElementById('button-in')
registerBtn.addEventListener('click', ()=>{
    container.classList.add("active");
});
loginBtn.addEventListener('click', ()=>{
    container.classList.remove("active");
});
inBtn.addEventListener('click', (e)=>{
     if(e.target.innerHTML == 'SIGN IN'){
        string = "";
        document.querySelector('input').value = string
      }
})
