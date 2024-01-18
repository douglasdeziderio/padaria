const menu = document.querySelector('.menu-imagem');
const menuUm = document.querySelector('.menu-menu1');
const menuDois = document.querySelector('.menu-menu2');
const menuTres = document.querySelector('.menu-menu3');

menu.addEventListener('click', ()=>{
    menuUm.classList.toggle('hidden');
    menuDois.classList.toggle('hidden');
    menuTres.classList.toggle('hidden');
});