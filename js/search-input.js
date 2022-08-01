let searchForm = document.querySelector('#search-form')
let input = document.querySelector('#search-input')
let searchOpen = document.querySelector('#search-open')
let searchClose = document.querySelector('#search-close')


searchOpen.addEventListener('click', function(event){
  event.preventDefault()
  searchForm.classList.add('active')
  input.classList.add('active')
  searchClose.classList.add('active')
})
searchClose.addEventListener('click', function(event){
  event.preventDefault()
  searchForm.classList.remove('active')
  input.classList.remove('active')
  searchClose.classList.remove('active')
})