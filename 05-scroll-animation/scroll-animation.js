window.addEventListener('scroll', checkBoxes)
const card_container = document.getElementById("card-container")

createBoxes(15)
const boxes = document.querySelectorAll(".box")
checkBoxes()

function checkBoxes() {
  const triggerBottom = (window.innerHeight / 5 * 4)
  boxes.forEach(box => {
    const boxTop = box.getBoundingClientRect().top
    if(boxTop < triggerBottom) {
      box.classList.add('show')
    } else {
      box.classList.remove('show')
    }
  })
}


function createBoxes(numOfBoxes) {
  for(i=0; i<numOfBoxes; i++) {
    const element = document.createElement('div')
    element.classList.add("box")
    element.innerHTML = `<a id="btn-${i}" href="#">Hover</a>`
    card_container.appendChild(element)
  }
}