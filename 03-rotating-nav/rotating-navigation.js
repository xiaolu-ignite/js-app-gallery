const open = document.getElementById('open')
const close = document.getElementById('close')
const container = document.querySelector('.container')

open.addEventListener('click', () => {
  container.classList.add('show-nav')
    open.style.display = "none";
    close.style.display = "flex"
})


close.addEventListener('click', () => {
  container.classList.remove('show-nav')
    close.style.display = "none";
    open.style.display= "flex";
})

