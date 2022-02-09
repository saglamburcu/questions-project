let openBtn = document.querySelectorAll(".open")
let questionDOM = document.querySelectorAll(".question")
let line = document.querySelectorAll(".line")
let answer = document.querySelectorAll(".answer")

const plusBtn = `<i class="far fa-plus-square"></i>`
const minusBtn = `<i class="far fa-minus-square"></i>`
let array = [];

openBtn.forEach((btn, index, arr) => {

  btn.addEventListener("click", function() {
    if (btn.innerHTML == `${plusBtn}`) {
      addClassList(btn, index)
      array.push(index)
      
      if (array.length>1 && array[array.length-2] != array[array.length-1]) {
        removeClassList(arr[array[array.length-2]], array[array.length-2])
      }
      
    } else {
      removeClassList(btn, index)
    }

  })
})

function addClassList(button, i) {
  button.innerHTML = `${minusBtn}`
  questionDOM[i].classList.add("height")
  line[i].classList.add("show-answer")
  answer[i].classList.add("show-answer")
}

function removeClassList(button, i) {
  button.innerHTML = `${plusBtn}`
  questionDOM[i].classList.remove("height")
  line[i].classList.remove("show-answer")
  answer[i].classList.remove("show-answer")
}