const open = document.getElementById('open');
const close = document.getElementById('remove');
const container = document.querySelector('.container');
const scrollingElement = (document.scrollingElement || document.body);



open.addEventListener('click', () => container.classList.add
  ('show-nav'))
open.addEventListener('click', () => scrollingElement.scrollTop = scrollingElement.scrollHeight)





function removeShowNav(){
   close.addEventListener('click', () => scrollingElement.scrollTop = 0)
  close.addEventListener('click', () => container.classList.remove
  ('show-nav'))
}

function SignIn(){
   location.replace("signin.html")
}

function SignUp(){
   location.replace("signup.html")
}



function Home(){
  location.replace("index.html")
}
function Catfood(){
  location.replace("cat food.html")
}
function Cattoys(){
  location.replace("cat toys.html")
}
function kittylitter(){
  location.replace("kitty litter.html")
}



