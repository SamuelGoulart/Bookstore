const btnMobile = document.getElementById('btn_mobile');

const toggleMenu = (event) => {

  if (event.type === 'touchstart') event.preventDefault();

  const nav = document.getElementById('nav');
  nav.classList.toggle('active');

  const active = nav.classList.contains('active');
  event.currentTarget.setAttribute('aria-expanded', active);

  if (active) {
    event.currentTarget.setAttribute('aria-label', 'Fechar Menu');

  } else {
    event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
  }

}

window.addEventListener('scroll', function(){
  const header = document.querySelector('#header');
  header.classList.toggle('stick', window.scrollY > 0);
})


btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);