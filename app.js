/* dados locais das de exemplos de review */
const reviews = [
  {
    id: 1,
    name: 'moon byul-yi',
    job: 'ceo',
    img: 'https://i.pinimg.com/originals/44/96/2c/44962cc599431d7efb080b2a5295bfe8.jpg',
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry"
  },
  {
    id: 2,
    name: 'ahn hye-jin',
    job: 'president',
    img: 'https://portalpopline.com.br/wp-content/uploads/2020/12/Hwasa.jpg',
    text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.'
  },
  {
    id: 3,
    name: 'kim yong-sun',
    job: 'model',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGCrMKOphDmYKLSTpa0WWKWDA21zHOM2CLqg&usqp=CAU',
    text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.'
  },
  {
    id: 4,
    name: 'Jung whee-in,',
    job: 'dancer',
    img: 'http://pm1.narvii.com/7379/b6c55b9cf8f4d641cf5ec97c62646c41be548dbdr1-723-675v2_00.jpg',
    text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. '
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
