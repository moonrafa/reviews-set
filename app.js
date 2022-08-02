/* dados locais das de exemplos de review */
const reviews = [
  {
    id: 1,
    name: 'moon byul-yi',
    job: 'ceo',
    img: 'https://i.pinimg.com/originals/44/96/2c/44962cc599431d7efb080b2a5295bfe8.jpg',
    text: 'This app allows me to do my tasks from my smartphone where I want and when I want to. The interface is easy to navigate and I find everything I need quickly. I can’t wait for the new features'
  },
  {
    id: 2,
    name: 'ahn hye-jin',
    job: 'president',
    img: 'https://portalpopline.com.br/wp-content/uploads/2020/12/Hwasa.jpg',
    text: 'Amazing app.  There are so many things to choose from.  It’s impossible to get bored. They eliminate any excuses because there are features for all levels, all time frames, no equipment options, small space options, and even options to have your kids join you. I truly love this app and have had several friends join as well.'
  },
  {
    id: 3,
    name: 'kim yong-sun',
    job: 'model',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGCrMKOphDmYKLSTpa0WWKWDA21zHOM2CLqg&usqp=CAU',
    text: 'This app is super useful and helpful for users that are not a professional yet. I liked how user-friendly the app is. I would recommend this app to anyone who is looking for a quick and easy way to learn.'
  },
  {
    id: 4,
    name: 'Jung whee-in,',
    job: 'dancer',
    img: 'http://pm1.narvii.com/7379/b6c55b9cf8f4d641cf5ec97c62646c41be548dbdr1-723-675v2_00.jpg',
    text: 'I absolutely love this app! It works so well. I love that it has everything I wanted. Just make sure to save before exiting. . I’ve only had it for a month now but I’m super impressed with the quality! And the response was real quick!'
  }
]
/* select items */
const img = document.getElementById('person-img')
const author = document.getElementById('author')
const job = document.getElementById('job')
const info = document.getElementById('info')

/* botões */
const prev = document.querySelector('.prev-btn')
const next = document.querySelector('.next-btn')
const random = document.querySelector('.random-btn')

/* set item inicial */
let currentItem = 0

/* load item inicial */
window.addEventListener('DOMContentLoaded', function () {
  showPerson()
})
/* mostrar a pessoa */
function showPerson() {
  const item = reviews[currentItem]
  img.src = item.img
  author.textContent = item.name
  job.textContent = item.job
  info.textContent = item.text
}
function getRandomNumber() {
  return Math.floor(Math.random() * reviews.length)
}
/* mostrar a pessoa seguinte */
next.addEventListener('click', function () {
  currentItem++
  if (currentItem > reviews.length - 1) {
    currentItem = 0
  }
  showPerson()
})
/* mostrar a pessoa anterior */
prev.addEventListener('click', function () {
  currentItem--
  if (currentItem < 0) {
    currentItem = reviews.length - 1
  }
  showPerson()
})

/* mostrar pessoa aleatória */
random.addEventListener('click', function () {
  currentItem = getRandomNumber()
  showPerson()
})
