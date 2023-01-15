var mobile_menu = document.querySelector("#mobile-menu");

var menu = document.querySelector(".menu");

function despliegue(){
    mobile_menu.classList.toggle('is-active')
    menu.classList.toggle('active')
}


mobile_menu.addEventListener('click', despliegue);

var sign_up = document.getElementsByClassName("links_btn")[0];
var formularios = document.getElementById("formulario");
var formulario_btn = document.getElementById("formulario_btn");

function formulario(){
    
    formularios.classList.toggle('active');
    sign_up.classList.toggle("is-active");
    formulario_btn.classList.toggle("is-active");

}

sign_up.addEventListener('click', formulario);

//Show Active Menu When Scrolling
const nav = document.querySelector('#nav');
let navTop = nav.offsetTop;

function fixedNav() {
  if (window.scrollY >= navTop) {    
    nav.classList.add('fixed');
  } else {
    nav.classList.remove('fixed');    
  }
}

window.addEventListener('scroll', fixedNav);