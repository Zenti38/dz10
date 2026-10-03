// 1
let number = 0

const interval = setInterval(() => {
  console.log('повідомлення')
  number++
  if (number === 5) {
    clearInterval(interval)
  }
}, 1000)

// 2

const button = document.querySelector('.button')
setInterval(() => {
  button.style.backgroundColor = 'red'
}, 2000)

// 3
const firstButton = document.querySelector('.button1')
const secondButton = document.querySelector('.button2')
const thirdButton = document.querySelector('.button3')

const Buttons = [firstButton, secondButton, thirdButton]

let points = document.querySelector('.points')
points.textContent = 0

let randomButton

function nextRound() {
  const randomNumber = Math.floor(Math.random() * 5) + 1
  const randomTime = randomNumber * 1000

  const randomButtonNumber = Math.floor(Math.random() * Buttons.length)
  randomButton = Buttons[randomButtonNumber]

  setTimeout(() => {
    randomButton.style.backgroundColor = 'green'
  }, randomTime)
}

Buttons.forEach((button) => {
  button.addEventListener('click', () => {
    if (
      button === randomButton &&
      randomButton.style.backgroundColor === 'green'
    ) {
      points.textContent++
      button.style.backgroundColor = 'gray'
      nextRound()
    }
  })
})

nextRound()

// 4
const input = document.querySelector('.input')
const pshka = document.querySelector('.pshka')
const timeButton = document.querySelector('.timeButton')
const userTime = input.value * 1000
timeButton.addEventListener('click', onclick1)
function onclick1(e) {
  if (pshka.textContent !== '') {
    pshka.textContent = ''
  }
  setInterval(() => {
    pshka.textContent = 'Повідомлення'
  }, Number(userTime))
}
