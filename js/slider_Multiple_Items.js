const prev = document.querySelector('.prev')
const next = document.querySelector('.next')
const track = document.querySelector('.track')

const prev1 = document.querySelector('.prev1')
const next1 = document.querySelector('.next1')
const track1 = document.querySelector('.track1')

const screenWidth = window.screen.width


let carouselWidth = document.querySelector('.carousel_container').offsetWidth

let carouselWidth1 = document.querySelector('.carousel_container1').offsetWidth

window.addEventListener('resize', () => {
  carouselWidth = document.querySelector('.carousel_container').offsetWidth
})

window.addEventListener('resize', () => {
  carouselWidth1 = document.querySelector('.carousel_container1').offsetWidth
})

let index = 0
let index1 = 0

next.addEventListener('click', () => {
  index++;
  prev.classList.add('show')

  if (screenWidth > 1300) {
    track.style.transform = `translateX(-${index * carouselWidth - 190}px)`

  } else if (screenWidth > 750) {
    track.style.transform = `translateX(-${index * carouselWidth - 110}px)`

  } else {
    track.style.transform = `translateX(-${index * carouselWidth - 95}px)`
  }


  if (track.offsetWidth - (index * carouselWidth) < carouselWidth) {
    next.classList.add('hide');
  }
})

next1.addEventListener('click', () => {
  index1++;
  prev1.classList.add('show')

 if (screenWidth > 1300) {
    track1.style.transform = `translateX(-${index1 * carouselWidth - 230}px)`
    
  } else if (screenWidth > 750) {
    track1.style.transform = `translateX(-${index1 * carouselWidth - 110}px)`

  } else {
    track1.style.transform = `translateX(-${index1 * carouselWidth - 400}px)`
  }

  if (track1.offsetWidth - (index1 * carouselWidth) < carouselWidth) {
    next1.classList.add('hide')
  }
})

prev.addEventListener('click', () => {
  index--;
  next.classList.remove('hide')
  if (index === 0) {
    prev.classList.remove('show')
  }

    track.style.transform = `translateX(-${index * carouselWidth}px)`
})

prev1.addEventListener('click', () => {

  index1--
  next1.classList.remove('hide')

  if (index1 === 0) {
    prev1.classList.remove('show')
  }

  track1.style.transform = `translateX(-${index1 * carouselWidth}px)`
})
