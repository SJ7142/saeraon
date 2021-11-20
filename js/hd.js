const header = document.querySelector('header')
const logo = document.querySelector('.n_logo')
const headerHeight = header.getBoundingClientRect().height
const ul = document.querySelector('.header_nav ul')
const anchrs = document.querySelectorAll('.header_nav a')
const span = document.querySelectorAll('.n_ham > span')

window.addEventListener('scroll', () => {
  if (window.scrollY > headerHeight) {
    logo.setAttribute(
      'style',
      'background: url(./img/logo_b.png) no-repeat; background-size: contain; width: 144px; height: 33px;'
    )
    anchrs.forEach((item) => {
      item.style = 'color:#000;'
    })

    ul.style = 'color:#000;'
    header.setAttribute(
      'style',
      'background: white; padding-bottom: 47px; border-bottom: 1px solid #aaa;'
    )
    span.forEach((item) => {
      item.style = 'border: 1px solid black;'
    })
  } else {
    header.setAttribute('style', 'background: transparent;')
    anchrs.forEach((item) => {
      item.style = 'color:#fff;'
    })
    logo.setAttribute(
      'style',
      'background: url(./img/saeraon_logo_w.png) no-repeat; background-size: contain; width: 144px; height: 33px;'
    )
    span.forEach((item) => {
      item.style = 'border: 1px solid #fff;'
    })
  }
})


const selectElement = (element) => document.querySelector(element)

selectElement('.n_ham').addEventListener('click', () => {
  selectElement('header').classList.toggle('active')
})

