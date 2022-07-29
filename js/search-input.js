window.addEventListener('DOMContentLoaded', function(){
  let input = document.querySelector('#search__input')
  let searchBtn = document.querySelector('#search__btn')
  let closeBtn = document.querySelector('#search__close-btn')

  
  searchBtn.addEventListener('click', function(event){
    event.preventDefault()
    if(!input.classList.contains('active')){
      input.classList.add('active')
      closeBtn.classList.add('active')
    }
  })

  closeBtn.addEventListener('click', function(event){
    event.preventDefault()
    input.classList.remove('active')
    closeBtn.classList.remove('active')
  })

})