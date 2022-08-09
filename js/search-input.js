document.addEventListener('DOMContentLoaded', (event) => {
  document.getElementById('search-open').addEventListener('click', (event) => {
    document.getElementById('search-form').classList.add('open')
  })
  document.getElementById('search-form').addEventListener('submit', (event) => {
    event.preventDefault()
  })
  document.getElementById('search-close').addEventListener('click', (event) => {
    document.getElementById('search-form').classList.remove('open')
  })
})