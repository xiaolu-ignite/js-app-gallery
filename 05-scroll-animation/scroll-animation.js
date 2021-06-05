window.addEventListener('scroll', checkBoxes)
const card_container = document.getElementById("card-container")


createBoxes(16)

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
    element.innerHTML = `
      <a class="btn" id="btn-${i}" href="#">HOVER</a>
      
      `
    card_container.appendChild(element)
  }
}

const body = document.querySelector('body');
console.log(body);
const colors = ['green', 'darkgreen','grey'];
var currentIndex = 0;
setInterval(function () {
  document.body.style.backgroundColor = colors[currentIndex]+'';
   if (!colors[currentIndex]) {
       currentIndex = 0;
   } else {
       currentIndex++;
   }
}, 5000);

